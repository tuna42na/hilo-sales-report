import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: { outDir: "build", cssMinify: "esbuild" },
  test: { environment: "jsdom", globals: true, setupFiles: "./src/setupTests.js" },
});
