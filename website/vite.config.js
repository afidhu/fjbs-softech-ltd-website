import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" lets the built site work on any host or folder.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
