import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";

export default defineConfig({
	site: "https://kavsingh.com",
	integrations: [tailwind()],
	adapter: vercel({ webAnalytics: { enabled: true } }),
});
