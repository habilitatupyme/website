#!/usr/bin/env node
/*
 * Genera sitemap.xml a partir de las rutas reales del sitio (objeto PATHS de app.js).
 * Sin dependencias: solo Node.js >= 14. Funciona igual en Vercel, Netlify, Nginx, cPanel, etc.
 *
 * Uso (desde la raíz del proyecto):   node scripts/generate-sitemap.js
 * Configuración: sitemap.config.json
 *   exclude : rutas (slugs) que NO deben indexarse (ej. "blog" mientras esté "en construcción")
 *   lastmod : { "slug": "AAAA-MM-DD" } solo con fechas reales; si no hay dato, se omite <lastmod>
 *   extra   : [{ "path": "/blog/mi-articulo", "lastmod": "AAAA-MM-DD" }] para artículos publicados
 *             (si algún día hay CMS, genere este arreglo desde él antes de ejecutar el script)
 */
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const cfg = JSON.parse(fs.readFileSync(path.join(root, "sitemap.config.json"), "utf8"));
const site = cfg.site.replace(/\/+$/, "");

const src = fs.readFileSync(path.join(root, cfg.appFile), "utf8");
const m = src.match(/var PATHS\s*=\s*(\{[^}]*\})/);
if (!m) { console.error("No se encontró el objeto PATHS en " + cfg.appFile); process.exit(1); }
const PATHS = JSON.parse(m[1]);

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const okDate = (d) => /^\d{4}-\d{2}-\d{2}(T[\d:.+\-Z]+)?$/.test(d);

const urls = [];
const seen = new Set();
function add(p, lastmod) {
  const loc = site + (p === "" || p === "/" ? "/" : "/" + p.replace(/^\/+|\/+$/g, ""));
  if (seen.has(loc)) return;
  seen.add(loc);
  urls.push({ loc, lastmod: lastmod && okDate(lastmod) ? lastmod : null });
}

Object.keys(PATHS).forEach(function (key) {
  const slug = PATHS[key];
  if (cfg.exclude.indexOf(slug) > -1 || cfg.exclude.indexOf(key) > -1) return;
  add(slug, cfg.lastmod[slug] || cfg.lastmod[key]);
});
(cfg.extra || []).forEach(function (e) { add(e.path, e.lastmod); });

const xml =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map(function (u) {
    return "  <url>\n    <loc>" + esc(u.loc) + "</loc>\n" + (u.lastmod ? "    <lastmod>" + u.lastmod + "</lastmod>\n" : "") + "  </url>";
  }).join("\n") + "\n</urlset>\n";

fs.writeFileSync(path.join(root, "sitemap.xml"), xml);

const robotsPath = path.join(root, "robots.txt");
const line = "Sitemap: " + site + "/sitemap.xml";
let robots = fs.existsSync(robotsPath) ? fs.readFileSync(robotsPath, "utf8") : "User-agent: *\nAllow: /\n";
robots = robots.replace(/^\s*Sitemap:.*$/gim, "").replace(/\s*$/, "\n\n") + line + "\n";
fs.writeFileSync(robotsPath, robots);

console.log("sitemap.xml: " + urls.length + " URLs");
urls.forEach(function (u) { console.log("  " + u.loc + (u.lastmod ? "  (" + u.lastmod + ")" : "")); });
