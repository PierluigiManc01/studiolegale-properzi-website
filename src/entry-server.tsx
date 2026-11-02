import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import App from "./App";
import { pageRoutes, sitemapExcluded } from "./routes";
import { practiceAreas, practiceAreaPath } from "./content/practice-areas";
import { SITE_URL, STUDIO } from "./lib/site";

export { practiceAreas, practiceAreaPath, SITE_URL, STUDIO };

// Every URL that gets its own static HTML file at build time: the pages in the
// route registry plus one page per practice area.
const areaRoutes = practiceAreas.map((area) => ({
  path: practiceAreaPath(area.slug),
  sources: ["src/content/practice-areas.ts"],
}));
const pages = [...pageRoutes.map(({ path, sources }) => ({ path, sources })), ...areaRoutes];

export const prerenderRoutes = pages.map((page) => page.path);
export const sitemapPages = pages.filter((page) => !sitemapExcluded.includes(page.path));

export function render(url: string) {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>,
  );
  const { helmet } = helmetContext;
  const head = helmet
    ? [helmet.title, helmet.priority, helmet.meta, helmet.link, helmet.script]
        .map((tag) => tag.toString())
        .join("\n    ")
    : "";
  return { html, head };
}
