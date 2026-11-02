// The site's pages, defined once. App.tsx renders them, and the build derives
// from the same list which pages to prerender and put in the sitemap: add a page
// here and it is routed, prerendered and listed, with nothing else to update.
//
// `sources` are the files whose git history gives the page's sitemap lastmod.
// A page without them is still listed, just without a lastmod.

import type { ReactElement } from "react";
import Home from "@/pages/Home";
import PracticeAreas from "@/pages/PracticeAreas";
import Contact from "@/pages/Contact";
import Candidature from "@/pages/Candidature";
import Privacy from "@/pages/Privacy";

export type PageRoute = { path: string; element: ReactElement; sources?: string[] };

export const pageRoutes: PageRoute[] = [
  {
    path: "/",
    element: <Home />,
    sources: ["src/pages/Home.tsx", "src/content/practice-areas.ts", "src/lib/site.ts"],
  },
  {
    path: "/aree-di-pratica",
    element: <PracticeAreas />,
    sources: ["src/pages/PracticeAreas.tsx", "src/content/practice-areas.ts"],
  },
  { path: "/contatti", element: <Contact />, sources: ["src/pages/Contact.tsx", "src/lib/site.ts"] },
  { path: "/candidature", element: <Candidature />, sources: ["src/pages/Candidature.tsx"] },
  { path: "/privacy", element: <Privacy />, sources: ["src/pages/Privacy.tsx", "src/lib/site.ts"] },
];

// Pages that must not be in the sitemap: add the path here only for a page that
// is deliberately noindex.
export const sitemapExcluded: string[] = [];
