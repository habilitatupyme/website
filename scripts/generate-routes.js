#!/usr/bin/env node
/*
 * Genera lo necesario para que las URLs inexistentes devuelvan un 404 real:
 *   - 404.html  (copia de index.html con rutas absolutas y noindex)
 *   - vercel.json (rewrites SOLO de rutas válidas + redirects 301 de alias; conserva "headers")
 * Las rutas se leen de PATHS en app.js; los alias de "redirects" en sitemap.config.json.
 * Si existe el HTML prerenderizado de una ruta (página para SEO; ver fileOf), esa ruta se reescribe a ese archivo.
 *   - .htaccess (Apache / LiteSpeed en cPanel): las mismas rutas, alias, barra final, 404 y cabeceras que
 *     vercel.json, más la redirección a https://www y el bloqueo de archivos internos. Ver buildHtaccess().
 * Uso:  node scripts/generate-routes.js [archivo-html]     (por defecto index.html)
 * Sin dependencias, solo Node.js >= 14. vercel.json y .htaccess salen de los mismos datos, así que ambos
 * hostings se comportan igual (vercel.json queda como plan de vuelta atrás).
 */
const fs = require("fs"), path = require("path");
const root = path.resolve(__dirname, "..");
const cfg = JSON.parse(fs.readFileSync(path.join(root, "sitemap.config.json"), "utf8"));
const indexName = process.argv[2] || "index.html";
const src = fs.readFileSync(path.join(root, cfg.appFile), "utf8");
const m = src.match(/var PATHS\s*=\s*(\{[^}]*\})/);
if (!m) { console.error("No se encontró PATHS en " + cfg.appFile); process.exit(1); }
const PATHS = JSON.parse(m[1]);
const slugs = Object.keys(PATHS).map(function (k) { return PATHS[k]; }).filter(Boolean);

/* 404.html */
let html = fs.readFileSync(path.join(root, indexName), "utf8");
html = html.replace(/(src|href)="(app\.js|favicon[^"]*|apple-touch-icon\.png)"/g, '$1="/$2"');
/* index.html viene prerenderizado con el Inicio: el 404 no debe heredar su contenido, canonical, Open Graph ni JSON-LD */
html = html.replace(/\n?<link rel="canonical"[^>]*>/g, "").replace(/\n?<meta (property="og:|name="twitter:)[^>]*>/g, "").replace(/\n?<script type="application\/ld\+json"[\s\S]*?<\/script>/g, "");
html = html.replace(/(<header id="hd")[^>]*>[\s\S]*?<\/header>/, "$1></header>").replace(/(<aside id="dw"[^>]*>)[\s\S]*?<\/aside>/, "$1</aside>").replace(/<main id="app">[\s\S]*?<\/main>/, '<main id="app"></main>').replace(/<footer id="ft">[\s\S]*?<\/footer>/, '<footer id="ft"></footer>').replace(/(<a id="wfab" class="fab wa") href="[^"]*"/, "$1");
if (html.indexOf('name="robots"') === -1) html = html.replace(/(<meta charset="utf-8">)/i, '$1\n<meta name="robots" content="noindex">');
fs.writeFileSync(path.join(root, "404.html"), html);

/* vercel.json */
const vp = path.join(root, "vercel.json");
const v = fs.existsSync(vp) ? JSON.parse(fs.readFileSync(vp, "utf8")) : {};
v.redirects = (cfg.redirects || []).map(function (r) { return { source: r.from, destination: r.to, permanent: true }; });
/* Rutas con HTML prerenderizado van a su propio archivo; el resto, a index.html.
   Archivo plano en la raíz: "/" se reemplaza por "--" (modificacion-de-estatutos/cambio-de-giro -> modificacion-de-estatutos--cambio-de-giro.html) */
const fileOf = function (s) { return s.replace(/\//g, "--") + ".html"; };
const pre = slugs.filter(function (s) { return fs.existsSync(path.join(root, fileOf(s))); });
const spa = slugs.filter(function (s) { return pre.indexOf(s) === -1; });
const prevOrder = (Array.isArray(v.rewrites) ? v.rewrites : []).map(function (r) { return r.source; });
v.rewrites = pre.map(function (s) { return { source: "/" + s, destination: "/" + fileOf(s) }; });
if (spa.length) v.rewrites.push({ source: "/(" + spa.join("|") + ")", destination: "/index.html" });
/* Conserva el orden que ya tenía vercel.json (las rutas son exactas: el orden no cambia el comportamiento,
   pero así el archivo no cambia sin motivo). Las rutas nuevas van al final. */
v.rewrites.sort(function (a, b) {
  const ia = prevOrder.indexOf(a.source), ib = prevOrder.indexOf(b.source);
  return (ia === -1 ? 1e9 : ia) - (ib === -1 ? 1e9 : ib);
});
const out = { trailingSlash: false, redirects: v.redirects, rewrites: v.rewrites };
Object.keys(v).forEach(function (k) { if (!(k in out)) out[k] = v[k]; });
fs.writeFileSync(vp, JSON.stringify(out, null, 2) + "\n");

/* .htaccess */
/* Bloque que cPanel ya tiene en public_html (MultiPHP INI Editor). Se copia tal cual al inicio del archivo,
   para que el .htaccess del repositorio coincida con el del servidor. */
const CPANEL_PHP_BLOCK = [
  "# BEGIN cPanel-generated php ini directives, do not edit",
  "# Manual editing of this file may result in unexpected behavior.",
  "# To make changes to this file, use the cPanel MultiPHP INI Editor (Home >> Software >> MultiPHP INI Editor)",
  "# For more information, read our documentation (https://go.cpanel.net/EA4ModifyINI)",
  "<IfModule php8_module>",
  "   php_value error_log \"/home/habilita/logs/php.error.log\"",
  "   php_flag log_errors On",
  "</IfModule>",
  "<IfModule lsapi_module>",
  "   php_value error_log \"/home/habilita/logs/php.error.log\"",
  "   php_flag log_errors On",
  "</IfModule>",
  "# END cPanel-generated php ini directives, do not edit"
].join("\n");
const hp = path.join(root, ".htaccess");
fs.writeFileSync(hp, buildHtaccess(out, pre, spa, fs.existsSync(hp) ? fs.readFileSync(hp, "utf8") : ""));
console.log("404.html, vercel.json y .htaccess generados. Rutas válidas: / " + slugs.map(function (s) { return "/" + s; }).join(" "));

function buildHtaccess(vercel, pre, spa, previous) {
  /* Dominio canónico, tomado de sitemap.config.json ("site"). El dominio sin www redirige a él. */
  const site = new URL(cfg.site);
  const wwwHost = site.hostname, apexHost = wwwHost.replace(/^www\./, "");
  if (wwwHost === apexHost) throw new Error("sitemap.config.json: se esperaba un dominio con www (" + cfg.site + ")");
  const reHost = function (h) { return "^" + h.replace(/\./g, "\\.") + "\\.?(:[0-9]+)?$"; };
  const reRoute = function (p) { return "^" + p.replace(/^\//, "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "$"; };
  /* Línea original de la petición que pide /.well-known/ (p. ej. "GET /.well-known/pki-validation/x HTTP/1.1") */
  const WELL_KNOWN_REQ = "^[A-Z]+\\s/+\\.well-known(/|\\s|\\?)";
  /* Solo la petición original del visitante (no los saltos internos del servidor) */
  const ORIGINAL = "RewriteCond %{ENV:REDIRECT_STATUS} ^$";
  const q = function (s) { return '"' + String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"'; };

  /* Cabeceras: las de vercel.json (solo se admite la regla global "/(.*)") + las que Vercel agrega por su cuenta
     y que hoy reciben los visitantes (HSTS y Cache-Control; medidas en producción el 04-11-2026). */
  const headers = [];
  (vercel.headers || []).forEach(function (h) {
    if (h.source !== "/(.*)") throw new Error("vercel.json: cabeceras con source " + h.source + " no se traducen solas a .htaccess");
    h.headers.forEach(function (x) { headers.push([x.key, x.value]); });
  });
  const has = function (k) { return headers.some(function (x) { return x[0].toLowerCase() === k.toLowerCase(); }); };
  if (!has("Strict-Transport-Security")) headers.push(["Strict-Transport-Security", "max-age=63072000"]);
  if (!has("Cache-Control")) headers.push(["Cache-Control", "public, max-age=0, must-revalidate"]);

  /* Bloques que cPanel agrega por su cuenta: se conservan tal cual, arriba. Si aún no hay .htaccess, se usa el del servidor. */
  const cpanel = previous.match(/# BEGIN cPanel-generated[\s\S]*?# END cPanel-generated[^\n]*/g) || [CPANEL_PHP_BLOCK];

  const L = [];
  L.push(cpanel.map(function (b) { return b.replace(/\r/g, ""); }).join("\n\n"), "");
  L.push(
    "# BEGIN Habilita tu PYME",
    "# ---------------------------------------------------------------------------------------------",
    "# Generado por scripts/generate-routes.js a partir de app.js (PATHS), sitemap.config.json y",
    "# vercel.json. NO EDITAR A MANO: cambie esos archivos y ejecute  node scripts/generate-routes.js",
    "#",
    "# Los bloques \"BEGIN cPanel-generated ... END cPanel-generated\" que cPanel agrega por su cuenta",
    "# (por ejemplo desde MultiPHP INI Editor) pueden convivir ARRIBA de este bloque: el generador los",
    "# conserva tal cual. No ponga reglas propias fuera de este bloque.",
    "# Comprobar el resultado:  bash scripts/verify-urls.sh " + site.origin,
    "# ---------------------------------------------------------------------------------------------",
    "",
    "# Página de inicio, sin listado de carpetas ni negociación de contenido (/index no debe abrir index.html)",
    "DirectoryIndex index.html",
    "Options -Indexes -MultiViews",
    "",
    "# 404 real (código 404) con la página propia del sitio",
    "ErrorDocument 404 /404.html",
    "",
    "# Codificación UTF-8 en los tipos de texto (igual que Vercel)",
    "AddDefaultCharset utf-8",
    "AddCharset utf-8 .js .css .json .xml .svg .txt",
    "",
    "RewriteEngine On",
    "RewriteBase /",
    "",
    "# 1. /.well-known/ (validación del certificado AutoSSL): sin redirecciones ni bloqueos, nunca.",
    "#    Se mira la ruta actual y también THE_REQUEST (la línea original \"GET /.well-known/... HTTP/1.1\"),",
    "#    que no cambia cuando el servidor salta por dentro a /404.html (ErrorDocument): así un archivo",
    "#    inexistente en /.well-known/ responde 404 directo, sin redirigir a https ni a /404.html.",
    "RewriteRule ^\\.well-known(/|$) - [L]",
    "RewriteCond %{THE_REQUEST} " + WELL_KNOWN_REQ + " [NC]",
    "RewriteRule ^ - [L]",
    "",
    "# 2. Archivos internos y ocultos: acceso prohibido (403)",
    "RewriteRule (^|/)\\. - [F,L]",
    "RewriteRule ^scripts(/|$) - [F,L]",
    "RewriteRule ^(sitemap\\.config\\.json|vercel\\.json|package[^/]*\\.json)$ - [F,L]",
    "RewriteRule ^(README|CLAUDE) - [NC,F,L]",
    "",
    "# 3. Dominio canónico: " + apexHost + " -> " + wwwHost + " y http -> https, en un solo salto,",
    "#    conservando ruta y parámetros (gclid, utm_*, etc.). HTTPS se detecta también por las cabeceras",
    "#    de Cloudflare (X-Forwarded-Proto / CF-Visitor) para no crear bucles detrás del proxy.",
    "#    Todas las redirecciones (3, 4 y 5) llevan  RewriteCond %{ENV:REDIRECT_STATUS} ^$ : solo se aplican a",
    "#    la petición original del visitante, nunca a los saltos internos (404.html, archivos .html).",
    ORIGINAL,
    "RewriteCond %{THE_REQUEST} !" + WELL_KNOWN_REQ + " [NC]",
    "RewriteCond %{HTTP_HOST} " + reHost(apexHost) + " [NC]",
    "RewriteRule ^ https://" + wwwHost + "%{REQUEST_URI} [R=301,L]",
    ORIGINAL,
    "RewriteCond %{THE_REQUEST} !" + WELL_KNOWN_REQ + " [NC]",
    "RewriteCond %{HTTP_HOST} " + reHost(wwwHost) + " [NC]",
    "RewriteCond %{HTTPS} !=on",
    "RewriteCond %{HTTP:X-Forwarded-Proto} !https [NC]",
    "RewriteCond %{HTTP:CF-Visitor} !https [NC]",
    "RewriteRule ^ https://" + wwwHost + "%{REQUEST_URI} [R=301,L]",
    "",
    "# 4. Barra final: /ruta/ -> /ruta (Vercel: \"trailingSlash\": false). La portada / no se toca.",
    ORIGINAL,
    "RewriteRule ^(.*[^/])/+$ /$1 [R=301,L]",
    "",
    "# 5. Alias antiguos (redirects de vercel.json / sitemap.config.json)"
  );
  (vercel.redirects || []).forEach(function (r) {
    L.push(ORIGINAL, "RewriteRule " + reRoute(r.source) + " " + r.destination + " [R=" + (r.permanent === false ? 302 : 301) + ",L]");
  });
  L.push("", "# 6. Rutas limpias sin .html (rewrites de vercel.json): la URL no cambia, se sirve el archivo");
  pre.forEach(function (s) { L.push("RewriteRule " + reRoute("/" + s) + " " + fileOf(s) + " [L]"); });
  if (spa.length) L.push("RewriteRule ^(" + spa.map(function (s) { return reRoute(s).slice(1, -1); }).join("|") + ")$ index.html [L]");
  L.push(
    "",
    "# 7. Cabeceras de seguridad y caché en todas las respuestas (también 404 y redirecciones)"
  );
  headers.forEach(function (x) { L.push("Header always set " + x[0] + " " + q(x[1])); });
  L.push("", "# END Habilita tu PYME", "");
  return L.join("\n");
}
