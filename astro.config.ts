import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
	site: "https://kavsingh.com",
	base: "kavsingh",
	integrations: [tailwind()],
});
