/** @type {import("prettier").Config & import("prettier-plugin-tailwindcss").PluginOptions} */
export default {
	useTabs: true,
	quoteProps: "consistent",
	plugins: ["prettier-plugin-astro"],
	tailwindStylesheet: "src/style/global.css",
	overrides: [{ files: "*.astro", options: { parser: "astro" } }],
};
