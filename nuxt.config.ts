// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/eslint",
    "nuxt-gtag",
  ],
  // @ts-ignore
  gtag: {
    id: "G-V0LRFNH5BY",
  },
  ssr: false,
  // FONTS GOES HERE

  // Vite
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/scss/_globals.scss" as *;
          `,
        },
      },
    },
  },

  css: ["~/assets/scss/_main.scss"],
});
