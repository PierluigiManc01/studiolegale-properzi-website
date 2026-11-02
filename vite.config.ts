import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { gitLastModified } from "./scripts/lastmod.mjs";

// Date the practice-area and FAQ content last changed in git: shown on the
// pages and used as dateModified. Empty when git cannot tell (see lastmod.mjs).
const contentUpdated = gitLastModified(["src/content/practice-areas.ts"]) ?? "";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  define: {
    __CONTENT_UPDATED__: JSON.stringify(contentUpdated),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
