import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },

  build: {
    lib: {
      entry: "src/widget/index.ts",
      name: "ChatbotWidget",
      fileName: () => "widget.js",
      formats: ["iife"],
    },
  },
});