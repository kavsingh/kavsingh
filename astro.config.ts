import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://www.kavsingh.com",
	vite: { plugins: [tailwindcss()] },
});
