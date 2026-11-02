// Turns the SPA build into static HTML, one file per route, so search engines
// and AI crawlers (GPTBot, ClaudeBot, PerplexityBot do not run JavaScript) get
// the full page content, meta tags and JSON-LD in the first response.
//
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
// Also writes sitemap.xml and llms-full.txt from the same route/content data.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const SITE_URL = "https://www.studiolegale-properzi.com";

const template = fs.readFileSync(path.join(dist, "index.html"), "utf-8");
const server = await import(pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href);
const { render, prerenderRoutes, practiceAreas, practiceAreaPath } = server;

const outFile = (route) =>
  route === "/" ? path.join(dist, "index.html") : path.join(dist, `${route.slice(1)}.html`);

const writePage = (route, file) => {
  const { html, head } = render(route);
  const page = template.replace("<!--app-head-->", head).replace("<!--app-html-->", html);
  if (!head.includes("<title")) throw new Error(`No <title> rendered for ${route}`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page);
  console.log(`prerendered ${route} -> ${path.relative(root, file)}`);
};

for (const route of prerenderRoutes) writePage(route, outFile(route));
// Vercel serves dist/404.html, with a real 404 status, for any unknown path.
writePage("/404", path.join(dist, "404.html"));

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${prerenderRoutes
  .filter((route) => route !== "/privacy")
  .map((route) => `  <url>\n    <loc>${SITE_URL}${route === "/" ? "/" : route}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`)
  .join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);
console.log("wrote sitemap.xml");

const llmsFull = [
  "# Studio Legale Properzi — testo completo",
  "",
  "> Studio Legale a Roma EUR (Piazzale Benito Juarez 10/11, 00144 Roma) dell'Avv. Vanessa Properzi, cassazionista. Telefono 06 4543 5416, email vanessa.properzi@libero.it. Lunedì-venerdì 9:00-18:00, su appuntamento.",
  "",
  ...practiceAreas.flatMap((area) => [
    `## ${area.name}`,
    "",
    `URL: ${SITE_URL}${practiceAreaPath(area.slug)}`,
    "",
    ...area.intro.flatMap((p) => [p, ""]),
    ...(area.partner ? [area.partner, ""] : []),
    "Attività:",
    ...area.items.map((item) => `- ${item}`),
    "",
    ...area.faqs.flatMap((faq) => [`### ${faq.question}`, "", faq.answer, ""]),
  ]),
].join("\n");
fs.writeFileSync(path.join(dist, "llms-full.txt"), llmsFull);
console.log("wrote llms-full.txt");

fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
