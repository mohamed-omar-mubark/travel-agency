// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "@nuxt/image-edge",
  ],

  image: {
    dir: "assets/images",
  },

  i18n: {
    lazy: true,
    langDir: "locales/",
    strategy: "prefix_except_default",
    defaultLocale: "ar",
    defaultDirection: "rtl",
    // we need to set detectBrowserLanguage to false to avoid a redirect loop
    detectBrowserLanguage: false,
    locales: [
      {
        code: "ar",
        name: "العربية",
        file: "ar.json",
        dir: "rtl",
      },
      {
        code: "en",
        name: "English",
        file: "en.json",
        dir: "ltr",
      },
    ],
  },

  googleFonts: {
    families: {
      Cairo: [300, 400, 500, 600, 700, 800, 900],
      Roboto: [300, 400, 500, 600, 700, 800, 900],
    },
    display: "swap",
  },

  css: [
    "~/assets/css/theme.css",
    "~/assets/scss/app.scss",
    "primeicons/primeicons.css",
    "primeflex/primeflex.css",
  ],

  build: {
    transpile: ["primevue"],
  },

  devtools: { enabled: true },

  app: {
    head: {
      title: "Travel Agency",

      meta: [
        {
          name: "description",
          content: "Your first destination to book flights",
        },
      ],
    },
  },
});
