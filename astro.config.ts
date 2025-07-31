import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://kavsingh.github.io",
	base: "kavsingh",
	vite: { plugins: [tailwindcss()] },
});
