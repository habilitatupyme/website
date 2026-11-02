#!/usr/bin/env node
/*
 * Genera lo necesario para que las URLs inexistentes devuelvan un 404 real:
 *   - 404.html  (copia de index.html con rutas absolutas y noindex)
 *   - vercel.json (rewrites SOLO de rutas válidas + redirects 301 de alias; conserva "headers")
 * Las rutas se leen de PATHS en app.js; los alias de "redirects" en sitemap.config.json.
 * Uso:  node scripts/generate-routes.js [archivo-html]     (por defecto index.html)
 * Sin dependencias, solo Node.js >= 14. Si cambia de hosting, 404.html sirve igual; solo hay que traducir
 * las reglas de rewrites/redirects a la sintaxis del nuevo servidor (los datos salen del mismo origen).
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
if (html.indexOf('name="robots"') === -1) html = html.replace(/(<meta charset="utf-8">)/i, '$1\n<meta name="robots" content="noindex">');
fs.writeFileSync(path.join(root, "404.html"), html);

/* vercel.json */
const vp = path.join(root, "vercel.json");
const v = fs.existsSync(vp) ? JSON.parse(fs.readFileSync(vp, "utf8")) : {};
v.redirects = (cfg.redirects || []).map(function (r) { return { source: r.from, destination: r.to, permanent: true }; });
v.rewrites = [{ source: "/(" + slugs.join("|") + ")", destination: "/index.html" }];
const out = { redirects: v.redirects, rewrites: v.rewrites };
Object.keys(v).forEach(function (k) { if (!(k in out)) out[k] = v[k]; });
fs.writeFileSync(vp, JSON.stringify(out, null, 2) + "\n");
console.log("404.html y vercel.json generados. Rutas válidas: / " + slugs.map(function (s) { return "/" + s; }).join(" "));
