import { defineConfig } from "vite";

// Página estática: index.html + archivos de public/ (imágenes, robots, sitemap).
export default defineConfig({
  build: { outDir: "dist", assetsInlineLimit: 0 },
});
