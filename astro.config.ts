import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";

import type { AstroIntegration } from "astro";

export default defineConfig({
	site: "https://kavsingh.com",
	integrations: [tailwind() as unknown as AstroIntegration],
	adapter: vercel({ webAnalytics: { enabled: true } }),
});
