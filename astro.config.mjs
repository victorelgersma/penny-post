// @ts-check
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://lambent-jalebi-200841.netlify.app/",
  output: "server",
  adapter: netlify({
    edgeMiddleware: true,
  }),
  server: { port: 4323 },
});
