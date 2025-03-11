import { ViteImageOptimizer } from "vite-plugin-image-optimizer"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	modules: ["@nuxt/icon", "@nuxtjs/google-fonts", "@nuxtjs/tailwindcss"],
	googleFonts: {
		families: {
			Quicksand: ["400", "500", "600", "700", "800", "900"],
			Inter: ["400", "500", "600", "700", "800", "900"],
		},
	},
	vite: {
		plugins: [
			ViteImageOptimizer({
				includePublic: true,
			}),
		],
	},
	app: {
		pageTransition: { name: "page", mode: "out-in" },
	},
	css: ["~/assets/css/sections.css"],
})
