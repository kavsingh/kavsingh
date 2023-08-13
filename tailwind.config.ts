import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			screens: {
				screen: { raw: "screen" },
				print: { raw: "print" },
			},
		},
	},
} satisfies Config;
