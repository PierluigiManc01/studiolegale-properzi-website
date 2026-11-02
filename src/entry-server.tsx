import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import App from "./App";
import { practiceAreas, practiceAreaPath } from "./content/practice-areas";

export { practiceAreas, practiceAreaPath };

// Every URL that gets its own static HTML file at build time.
export const prerenderRoutes = [
  "/",
  "/aree-di-pratica",
  ...practiceAreas.map((area) => practiceAreaPath(area.slug)),
  "/contatti",
  "/candidature",
  "/privacy",
];

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
