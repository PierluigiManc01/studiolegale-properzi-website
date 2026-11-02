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
const template = fs.readFileSync(path.join(dist, "index.html"), "utf-8");
const server = await import(pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href);
const { render, prerenderRoutes, practiceAreas, practiceAreaPath, CONTENT_UPDATED, SITE_URL, STUDIO } = server;

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

// lastmod is the date the legal content was last reviewed, not the build date:
// a date that changes on every deploy teaches Google to ignore it. Pages with
// no reviewed content (contacts, applications) carry no lastmod.
const contentRoutes = new Set(["/", "/aree-di-pratica", ...practiceAreas.map((a) => practiceAreaPath(a.slug))]);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${prerenderRoutes
  .filter((route) => route !== "/privacy")
  .map((route) => `  <url>\n    <loc>${SITE_URL}${route === "/" ? "/" : route}</loc>${contentRoutes.has(route) ? `\n    <lastmod>${CONTENT_UPDATED}</lastmod>` : ""}\n  </url>`)
  .join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);
console.log("wrote sitemap.xml");

const address = `${STUDIO.street}, ${STUDIO.postalCode} ${STUDIO.city} (${STUDIO.district})`;
const phone = `${STUDIO.phoneDisplay} (+39 ${STUDIO.phoneDisplay})`;

// llms.txt is generated from the same data as the site, so the studio's NAP can
// never drift from site.ts.
const llms = [
  `# ${STUDIO.name}`,
  "",
  `> Studio Legale a Roma, quartiere ${STUDIO.district}, dell'${STUDIO.lawyer}, avvocato civilista abilitata al patrocinio in Cassazione. Assistenza a privati, imprese ed enti in diritto civile, di famiglia, immobiliare, del lavoro e successioni; diritto penale in partnership con l'Avv. Alessandra Poma.`,
  "",
  `- Indirizzo: ${address}`,
  `- Telefono: ${phone}`,
  `- Email: ${STUDIO.email}`,
  `- Orari: ${STUDIO.hours.replace(/: /, " ")}, su appuntamento`,
  "- Partner esterni: Avv. Alessandra Poma (penalista, Piazza Monteleone di Spoleto 8, Roma); Notaio Maddalena Cuomo (Via Paraguay 5, Roma)",
  "",
  "## Aree di pratica",
  "",
  ...practiceAreas.map((a) => `- [${a.name}](${SITE_URL}${practiceAreaPath(a.slug)}): ${a.summary}`),
  "",
  "## Pagine",
  "",
  `- [Home](${SITE_URL}/): lo Studio, l'${STUDIO.lawyer}, i partner, domande frequenti.`,
  `- [Contatti](${SITE_URL}/contatti): recapiti, orari, modulo per prenotare una consulenza.`,
  `- [Candidature](${SITE_URL}/candidature): candidature per praticanti.`,
  `- [Testo completo per LLM](${SITE_URL}/llms-full.txt): tutte le pagine delle aree di pratica con le FAQ.`,
  "",
].join("\n");
fs.writeFileSync(path.join(dist, "llms.txt"), llms);
console.log("wrote llms.txt");

const llmsFull = [
  "# Studio Legale Properzi — testo completo",
  "",
  `> Studio Legale a Roma ${STUDIO.district} (${address}) dell'${STUDIO.lawyer}, cassazionista. Telefono ${STUDIO.phoneDisplay}, email ${STUDIO.email}. ${STUDIO.hours.replace(/: /, " ")}, su appuntamento.`,
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
