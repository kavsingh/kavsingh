/** @type {import("prettier").Config} */
export default {
	useTabs: true,
	quoteProps: "consistent",
	plugins: ["prettier-plugin-astro"],
	overrides: [{ files: "*.astro", options: { parser: "astro" } }],
};
