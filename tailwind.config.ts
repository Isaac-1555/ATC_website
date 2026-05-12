import type { Config } from "tailwindcss";

export default {
	content: ["./index.html", "./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				background: "#141314",
				accent: "#da624d",
				foreground: "#F7FFF7",
			},
			fontFamily: {
				sans: [
					"Inter",
					"ui-sans-serif",
					"system-ui",
					"-apple-system",
					"BlinkMacSystemFont",
					"Segoe UI",
					"sans-serif",
				],
				mono: ["Geist Mono", "IBM Plex Mono", "ui-monospace", "SFMono-Regular", "monospace"],
			},
		},
	},
	plugins: [],
} satisfies Config;

