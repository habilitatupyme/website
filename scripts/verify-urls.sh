#!/usr/bin/env bash
# -----------------------------------------------------------------------------------------------
# Comprueba con curl que el sitio responde como debe (sirve para Vercel y para el hosting cPanel).
# Las rutas, alias y cabeceras esperadas se leen de vercel.json (generado por generate-routes.js).
#
# Uso:
#   bash scripts/verify-urls.sh [URL-base]          (por defecto https://www.habilitatupyme.cl)
#
# Opciones (variables de entorno):
#   IP_SERVIDOR=1.2.3.4   Prueba un servidor concreto sin cambiar el DNS (curl --resolve). Útil para
#                         revisar el hosting nuevo antes de apuntar el dominio (o saltándose Cloudflare).
#   INSEGURO=1            No valida el certificado HTTPS (curl -k), por ejemplo si AutoSSL aún no lo emite.
#
# Ejemplos:
#   bash scripts/verify-urls.sh
#   IP_SERVIDOR=203.0.113.10 INSEGURO=1 bash scripts/verify-urls.sh https://www.habilitatupyme.cl
# Devuelve código de salida 0 si todo está bien y 1 si hubo algún error.
# -----------------------------------------------------------------------------------------------
set -u

BASE="${1:-https://www.habilitatupyme.cl}"
BASE="${BASE%/}"
DIR="$(cd "$(dirname "$0")/.." && pwd)"
VJ="$DIR/vercel.json"
[ -f "$VJ" ] || { echo "No se encontró $VJ"; exit 2; }
command -v curl >/dev/null || { echo "Se necesita curl"; exit 2; }

HOST="$(printf '%s' "$BASE" | sed -E 's#^[a-zA-Z]+://([^/:]+).*#\1#')"
WWW_HOST="$HOST"
APEX_HOST="${HOST#www.}"

CURL_OPTS=(-s --max-time 20 -A "verify-urls (Habilita tu PYME)")
[ "${INSEGURO:-0}" = "1" ] && CURL_OPTS+=(-k)
if [ -n "${IP_SERVIDOR:-}" ]; then
  for h in "$WWW_HOST" "$APEX_HOST"; do
    CURL_OPTS+=(--resolve "$h:443:$IP_SERVIDOR" --resolve "$h:80:$IP_SERVIDOR")
  done
fi

OK=0; ERR=0; ERRORES=()
ok()   { OK=$((OK + 1));  printf '  [OK]    %s\n' "$1"; }
fail() { ERR=$((ERR + 1)); ERRORES+=("$1 -> $2"); printf '  [ERROR] %s  -> %s\n' "$1" "$2"; }
titulo() { printf '\n== %s ==\n' "$1"; }

# Pide una URL sin seguir redirecciones. Deja CODE, LOC y HDRS.
fetch() {
  HDRS="$(curl "${CURL_OPTS[@]}" -o /dev/null -D - "$1" 2>/dev/null | tr -d '\r')"
  CODE="$(printf '%s\n' "$HDRS" | awk '/^HTTP\//{c=$2} END{print (c=="" ? "000" : c)}')"
  LOC="$(header location)"
}
header() { printf '%s\n' "$HDRS" | grep -i "^$1:" | tail -n 1 | sed -E 's/^[^:]+:[[:space:]]*//; s/[[:space:]]+$//'; }
# Location relativa a la URL base (Vercel responde "/ruta"; Apache, "https://host/ruta")
rel() { local l="$1"; l="${l#"$BASE"}"; printf '%s' "$l"; }
es_permanente() { [ "$1" = "301" ] || [ "$1" = "308" ]; }

# --- Datos de vercel.json -----------------------------------------------------------------------
# Sin <(...), <<<, mapfile ni archivos temporales: el servidor (CloudLinux con CageFS) no tiene /dev/fd
# y su bash puede ser 4.2. Los arreglos vacíos nunca se recorren con "${a[@]}" (falla con set -u en 4.2).
seccion_de() { awk -v s="\"$1\":" '$1==s{on=1;next} /^  "[a-zA-Z]+":/{on=0} on' "$VJ"; }
valor() { sed -nE "s/^[[:space:]]*\"$1\": \"(.*)\",?$/\1/p"; }
# a_arreglo NOMBRE "texto": una línea por elemento (sin expandir comodines como "/(.*)")
a_arreglo() { local IFS=$'\n'; set -f; eval "$1=(\$2)"; set +f; }

a_arreglo FUENTES    "$(seccion_de rewrites  | valor source)"
a_arreglo ALIAS_DE   "$(seccion_de redirects | valor source)"
a_arreglo ALIAS_A    "$(seccion_de redirects | valor destination)"
a_arreglo CAB_NOMBRE "$(seccion_de headers   | valor key)"
a_arreglo CAB_VALOR  "$(seccion_de headers   | valor value)"
if [ ${#FUENTES[@]} -eq 0 ] || [ ${#ALIAS_DE[@]} -ne ${#ALIAS_A[@]} ] || [ ${#CAB_NOMBRE[@]} -eq 0 ] \
   || [ ${#CAB_NOMBRE[@]} -ne ${#CAB_VALOR[@]} ]; then
  echo "No se pudieron leer las rutas, alias o cabeceras de $VJ"; exit 2
fi

RUTAS=("/")
for ((i = 0; i < ${#FUENTES[@]}; i++)); do
  src="${FUENTES[$i]}"
  if [[ "$src" == "/("*")" ]]; then           # grupo "/(a|b)" que va a index.html
    a_arreglo grupo "$(printf '%s' "${src:2:${#src}-3}" | tr '|' '\n')"
    for ((j = 0; j < ${#grupo[@]}; j++)); do RUTAS+=("/${grupo[$j]}"); done
  else
    RUTAS+=("$src")
  fi
done

PRUEBA="${RUTAS[1]}"                          # una ruta interior para las pruebas de barra y dominio
QS="gclid=prueba-123&utm_source=verify"

echo "Verificando $BASE"
[ -n "${IP_SERVIDOR:-}" ] && echo "(conectando directamente a $IP_SERVIDOR)"

# --- 1. Rutas válidas ---------------------------------------------------------------------------
titulo "1. Rutas válidas (deben responder 200)"
for r in "${RUTAS[@]}"; do
  fetch "$BASE$r"
  [ "$CODE" = "200" ] && ok "$r" || fail "$r" "código $CODE${LOC:+ (redirige a $LOC)}"
done

# --- 2. Alias -----------------------------------------------------------------------------------
titulo "2. Alias antiguos (redirección permanente 301/308 al destino, conservando parámetros)"
for ((i = 0; i < ${#ALIAS_DE[@]}; i++)); do
  de="${ALIAS_DE[$i]}"; a="${ALIAS_A[$i]}"
  fetch "$BASE$de?$QS"
  destino="$(rel "$LOC")"
  if es_permanente "$CODE" && [ "$destino" = "$a?$QS" ]; then ok "$de -> $a ($CODE)"
  else fail "$de" "código $CODE, destino '$LOC' (esperado $a?$QS)"; fi
done

# --- 3. 404 -------------------------------------------------------------------------------------
titulo "3. Rutas inexistentes (deben responder 404 con la página 404)"
for r in "/esta-ruta-no-existe-$RANDOM" "/index" "$PRUEBA/no-existe" "${PRUEBA}.htm"; do
  fetch "$BASE$r"
  tipo="$(header content-type)"
  if [ "$CODE" = "404" ] && [[ "$tipo" == text/html* ]]; then ok "$r (404)"
  else fail "$r" "código $CODE, tipo '$tipo' (esperado 404 text/html)"; fi
done

# --- 4. Barra final -----------------------------------------------------------------------------
titulo "4. Barra final (/ruta/ -> /ruta)"
fetch "$BASE$PRUEBA/"
if es_permanente "$CODE" && [ "$(rel "$LOC")" = "$PRUEBA" ]; then ok "$PRUEBA/ -> $PRUEBA ($CODE)"
else fail "$PRUEBA/" "código $CODE, destino '$LOC' (esperado $PRUEBA)"; fi
fetch "$BASE$PRUEBA/?$QS"
if es_permanente "$CODE" && [ "$(rel "$LOC")" = "$PRUEBA?$QS" ]; then ok "$PRUEBA/?... conserva los parámetros"
else fail "$PRUEBA/?$QS" "código $CODE, destino '$LOC'"; fi
fetch "$BASE/"
[ "$CODE" = "200" ] && ok "/ (portada) no se redirige" || fail "/" "código $CODE"

# --- 5. Dominio y HTTPS -------------------------------------------------------------------------
titulo "5. Dominio sin www -> www y http -> https (conservando ruta y parámetros)"
if [[ "$HOST" != www.* ]]; then
  echo "  (se omite: la URL base no empieza con www.)"
else
  ESPERADO="https://$WWW_HOST$PRUEBA?$QS"
  for url in "https://$APEX_HOST$PRUEBA?$QS" "http://$WWW_HOST$PRUEBA?$QS"; do
    fetch "$url"
    if es_permanente "$CODE" && [ "$LOC" = "$ESPERADO" ]; then ok "$url -> $LOC ($CODE)"
    else fail "$url" "código $CODE, destino '$LOC' (esperado $ESPERADO)"; fi
  done
  url="http://$APEX_HOST$PRUEBA?$QS"
  res="$(curl "${CURL_OPTS[@]}" -L --max-redirs 5 -o /dev/null -w '%{http_code} %{num_redirects} %{url_effective}' "$url")"
  c="${res%% *}"; res="${res#* }"; n="${res%% *}"; final="${res#* }"
  if [ "$c" = "200" ] && [ "$final" = "$ESPERADO" ]; then ok "$url -> $final ($n salto(s))"
  else fail "$url" "terminó en '$final' con código $c tras $n salto(s)"; fi
  fetch "https://$WWW_HOST/"
  [ "$CODE" = "200" ] && ok "https://$WWW_HOST/ responde 200 (sin bucles)" || fail "https://$WWW_HOST/" "código $CODE"
fi

# --- 6. .well-known y archivos internos ---------------------------------------------------------
titulo "6. /.well-known/ libre y archivos internos bloqueados"
fetch "$BASE/.well-known/verify-urls-$RANDOM.txt"
if [ "$CODE" = "404" ]; then ok "/.well-known/ no se bloquea ni redirige (404 normal)"
else fail "/.well-known/" "código $CODE${LOC:+ -> $LOC} (esperado 404)"; fi
if [ -n "${IP_SERVIDOR:-}" ]; then          # por http solo tiene sentido directo al servidor (Cloudflare fuerza https)
  # AutoSSL valida por http ambos dominios: no debe recibir ninguna redirección (ni a https ni a /404.html)
  for url in "http://$WWW_HOST/.well-known/pki-validation/verify-$RANDOM.txt" \
             "http://$APEX_HOST/.well-known/pki-validation/verify-$RANDOM.txt" \
             "https://$APEX_HOST/.well-known/acme-challenge/verify-$RANDOM"; do
    fetch "$url"
    if [ "$CODE" = "404" ]; then ok "$url -> 404 sin redirección"
    else fail "$url" "código $CODE${LOC:+ -> $LOC} (esperado 404 sin redirección)"; fi
  done
fi
for r in /vercel.json /sitemap.config.json /scripts/generate-routes.js /scripts/verify-urls.sh /scripts/ \
         /package.json /package-lock.json /README.md /CLAUDE.md /.htaccess /.git/config /.gitattributes /.vercelignore; do
  fetch "$BASE$r"
  if [ "$CODE" = "403" ] || [ "$CODE" = "404" ]; then ok "$r bloqueado ($CODE)"
  else fail "$r" "código $CODE (esperado 403 o 404)"; fi
done

# --- 7. Cabeceras -------------------------------------------------------------------------------
titulo "7. Cabeceras de seguridad y caché"
# Valores que Vercel envía por su cuenta (no están en vercel.json) y que el .htaccess replica.
HSTS_ESPERADO="max-age=63072000"
for r in "/" "$PRUEBA" "/app.js" "/esta-ruta-no-existe-$RANDOM"; do
  fetch "$BASE$r"
  faltan=()
  for ((i = 0; i < ${#CAB_NOMBRE[@]}; i++)); do
    [ "$(header "${CAB_NOMBRE[$i]}")" = "${CAB_VALOR[$i]}" ] || faltan+=("${CAB_NOMBRE[$i]}")
  done
  if [ ${#faltan[@]} -eq 0 ]; then ok "$r ($CODE): las ${#CAB_NOMBRE[@]} cabeceras de vercel.json (CSP, X-Frame-Options, ...)"
  else fail "$r ($CODE)" "faltan o difieren: ${faltan[*]}"; fi

  hsts="$(header strict-transport-security)"
  if [ "$hsts" = "$HSTS_ESPERADO" ]; then ok "$r Strict-Transport-Security: $hsts"
  else fail "$r Strict-Transport-Security" "'${hsts:-ausente}' (esperado $HSTS_ESPERADO)"; fi

  # El servidor envía "public, max-age=0, must-revalidate". Cloudflare puede subir max-age en archivos
  # estáticos (.js, .png, .txt...) según su "Browser Cache TTL", así que se exige public + must-revalidate,
  # y max-age=0 en las páginas HTML.
  cc="$(header cache-control)"
  if [[ "$cc" == *public* && "$cc" == *must-revalidate* ]] && { [[ "$(header content-type)" != text/html* ]] || [[ "$cc" == *max-age=0* ]]; }; then
    ok "$r Cache-Control: $cc"
  else fail "$r Cache-Control" "'${cc:-ausente}' (esperado public, max-age=0, must-revalidate)"; fi
done

# --- Resumen ------------------------------------------------------------------------------------
printf '\n== Resumen ==\n'
printf '  Comprobaciones correctas: %d\n' "$OK"
printf '  Con error:                %d\n' "$ERR"
if [ "$ERR" -gt 0 ]; then
  printf '\n  Revisar:\n'
  for ((i = 0; i < ${#ERRORES[@]}; i++)); do e="${ERRORES[$i]}"; printf '   - %s\n' "$e"; done
  exit 1
fi
printf '\n  Todo en orden.\n'
