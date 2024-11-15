import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
	site: "https://kavsingh.github.io",
	base: "kavsingh",
	integrations: [tailwind()],
});
