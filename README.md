## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Build

`npm run build` builds the client, then a server bundle, then runs
`scripts/prerender.mjs`, which writes one static HTML file per route plus
`sitemap.xml` and `llms-full.txt`. Crawlers (including AI assistants that do
not run JavaScript) get the full content; the browser hydrates it.

New pages must be added to `prerenderRoutes` in `src/entry-server.tsx`.
Studio contact data lives only in `src/lib/site.ts`; practice-area copy and
FAQs in `src/content/practice-areas.ts`.
