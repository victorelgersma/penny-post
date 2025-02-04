// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://lambent-jalebi-200841.netlify.app/",
  // https://docs.astro.build/en/guides/integrations-guide/netlify/
  server: { port: 4323 },
});
