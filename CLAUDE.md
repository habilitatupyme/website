# Sitio web · Habilita tu PYME

Sitio público de **Habilita tu PYME** (agencia chilena de formalización de empresas):
`https://www.habilitatupyme.cl` (el dominio sin www redirige a www). Repositorio:
https://github.com/habilitatupyme/website, rama `main`.

## Reglas

1. **Responder siempre en español** y en lenguaje simple (el dueño del sitio no es programador).
2. **No modificar el contenido ni el diseño** de las páginas (textos, estilos, imágenes, `app.js`)
   sin que se pida explícitamente.
3. **Después de agregar, quitar o renombrar páginas**, regenerar con el generador
   (`node scripts/generate-routes.js` y `node scripts/generate-sitemap.js`) y subir los archivos generados.
   Nunca editar a mano `.htaccess`, `404.html` ni las secciones `redirects`/`rewrites` de `vercel.json`.
4. **Mantener `vercel.json` funcionando** mientras Vercel siga siendo el plan de vuelta atrás: cualquier
   cambio de rutas, alias o cabeceras debe quedar igual en `vercel.json` y en `.htaccess` (ambos salen del
   mismo generador).
5. Saltos de línea **LF** (lo fuerza `.gitattributes`). Sin dependencias: solo Node.js para los scripts.
6. Lo que no deba publicarse en Vercel va en `.vercelignore`; en cPanel, se bloquea desde el `.htaccess`
   (regla 2 del generador).

## Cómo funciona el sitio

- **Estático**, sin compilación: HTML, `app.js`, íconos. Cada ruta tiene su HTML prerenderizado (para SEO).
- **Rutas limpias** sin `.html`. Las subpáginas usan `/` en la URL y `--` en el archivo:
  `/modificacion-de-estatutos/cambio-de-giro` → `modificacion-de-estatutos--cambio-de-giro.html`.
- **Fuente de verdad de las rutas**: objeto `PATHS` en `app.js`. Alias antiguos (301), dominio y fechas
  del sitemap: `sitemap.config.json`. Cabeceras de seguridad (CSP, etc.): sección `headers` de `vercel.json`.
- Sin barra final (`/ruta/` → `/ruta`). Rutas inexistentes → 404 real con `404.html`.

| Script | Genera |
|---|---|
| `scripts/generate-routes.js` | `vercel.json` (redirects + rewrites, conserva headers), `404.html` (copia de `index.html` sin contenido y con `noindex`) y `.htaccess` (equivalente para Apache/LiteSpeed) |
| `scripts/generate-sitemap.js` | `sitemap.xml` y la línea `Sitemap:` de `robots.txt` |
| `scripts/verify-urls.sh` | No genera nada: comprueba el sitio publicado con curl |

Para cambiar la CSP: editar `headers` en `vercel.json` y ejecutar `node scripts/generate-routes.js`
(copia las cabeceras al `.htaccess`). El `.htaccess` agrega además HSTS (`max-age=63072000`) y
`Cache-Control: public, max-age=0, must-revalidate`, que Vercel envía por su cuenta.

## Migración en curso: Vercel → Mediaweb

- **Hoy**: publicado en Vercel (cada push a `main` se publica solo).
- **Destino**: hosting compartido Mediaweb, cPanel + servidor **LiteSpeed** (lee `.htaccess` de Apache),
  carpeta `/home/habilita/public_html`, detrás del proxy de **Cloudflare** (SSL "Full").
- El `.htaccess` hace además: http → https y sin www → www en un salto (conservando parámetros, importante
  para Google Ads; detecta HTTPS también por `X-Forwarded-Proto` / `CF-Visitor` para no crear bucles),
  deja libre `/.well-known/` (AutoSSL) y bloquea archivos internos (`scripts/`, `*.json` de configuración,
  archivos ocultos, `README`, `CLAUDE.md`).
- Vercel usa 308 en sus redirecciones permanentes; el `.htaccess`, 301 (equivalentes para Google).
- No tocar el servidor ni el DNS sin instrucción explícita.

### Bloques de cPanel en el `.htaccess` (importante)

cPanel escribe sus propios bloques en `public_html/.htaccess` (`# BEGIN cPanel-generated ... do not edit`,
por ejemplo desde MultiPHP INI Editor). El archivo del repositorio ya incluye el bloque actual del servidor
(log de errores de PHP) **arriba**, y nuestras reglas van en el bloque `# BEGIN Habilita tu PYME ... # END`.
- El generador conserva tal cual los bloques de cPanel que encuentre en el `.htaccess` existente.
- Si alguien cambia algo desde cPanel, el archivo del servidor dejará de coincidir con el del repositorio:
  copiar el bloque nuevo al `.htaccess` del repositorio, ejecutar el generador y subir (si no, un
  `git pull` en el servidor puede chocar).
- No poner reglas propias fuera del bloque `Habilita tu PYME`.

## Verificación (`scripts/verify-urls.sh`)

```bash
bash scripts/verify-urls.sh                                  # producción (lo que responda el DNS)
bash scripts/verify-urls.sh https://www.habilitatupyme.cl    # URL base explícita
IP_SERVIDOR=1.2.3.4 INSEGURO=1 bash scripts/verify-urls.sh   # probar Mediaweb antes de cambiar el DNS
```
Comprueba: rutas válidas (200), alias (301/308 al destino con parámetros), 404, barra final, sin www → www
y http → https, `/.well-known/`, archivos internos bloqueados y cabeceras (las de `vercel.json`, HSTS y
Cache-Control). Termina con un resumen; código de salida 1 si hay errores.
En Vercel salen 3 errores conocidos: Vercel publica `/scripts/generate-routes.js` y `/sitemap.config.json`
(y `/scripts/` redirige). En cPanel esos quedan bloqueados.
