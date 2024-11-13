import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://ind-sw-eng.github.io",
  base: "/ise",
  prefetch: {
    prefetchAll: true,
  },
});
