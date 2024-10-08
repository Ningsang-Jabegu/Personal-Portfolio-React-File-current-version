import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ["defaults", "not IE 11"], // Define browser targets
    }),
  ],
  server: {
    // Automatically open the browser when the dev server starts
    open: true,
  },
  // build: {
  //   rollupOptions: {
  //     // Ensure that images from the src/assets directory are included in the build
  //     input: {
  //       main: '', // Update this if your entry point is different
  //     },
  //   },
  // },
  assetsInclude: [
    '**/*.png', '**/*.PNG',
    '**/*.jpg', '**/*.JPG',
    '**/*.jpeg', '**/*.JPEG',
    '**/*.gif', '**/*.GIF',
    '**/*.svg', '**/*.SVG',
    '**/*.webp', '**/*.WEBP',
  ], // Include all types of modern image files
});
