import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				print: "Avenir, Aptos, system-ui, sans-serif",
			},
			screens: {
				screen: { raw: "screen" },
				print: { raw: "print" },
			},
		},
	},
} satisfies Config;
