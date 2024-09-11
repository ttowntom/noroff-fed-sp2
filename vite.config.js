import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/",
  root: "./",
  build: {
    outDir: "dist",
    // cssCodeSplit: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        login: resolve(__dirname, "user/login/index.html"),
        signup: resolve(__dirname, "user/sign-up/index.html"),
        user: resolve(__dirname, "user/index.html"),
        listings: resolve(__dirname, "listings/index.html"),
        editListing: resolve(__dirname, "listings/edit-listing/index.html"),
        newListing: resolve(__dirname, "listings/new-listing/index.html"),
        searchListing: resolve(__dirname, "listings/search/index.html"),
      },
    },
  },
  server: {
    open: true,
  },
  css: {
    postcss: "./postcss.config.js",
  },
});
