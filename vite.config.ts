import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  define: {
    process: {},
  },

  build: {
    lib: {
      entry: "src/widget/index.ts",
      name: "ChatbotWidget", // REQUIRED
      fileName: () => "widget.js",
      formats: ["iife"],
    },
  },
});