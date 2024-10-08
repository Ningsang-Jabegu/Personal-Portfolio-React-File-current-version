import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy"; // Import the legacy plugin

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ["defaults", "not IE 11"], // Define browser targets
    }),
  ],
  server: {
    open: true, // Automatically open the browser when the dev server starts
  },
});
