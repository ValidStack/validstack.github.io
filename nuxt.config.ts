// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  typescript: {
    shim: false,
  },

  app: {
    rootId: "vs-site-wrapper",
  },

  css: [
    "minireset.css/minireset.css",
    "@/assets/style/index.css",
    "@/assets/style/scrollbar.css",
  ],

  postcss: {
    plugins: {
      "postcss-nested": {},
    },
  },

  modules: [
    '@nuxt/content',
    '@nuxt/image',
    'nuxt-gtag',
    '@zadigetvoltaire/nuxt-gtm',
  ],
  gtag: {
    enabled: process.env.NODE_ENV === 'production', // Enable only in production
    id: 'G-TE6K13CVN3', 
  },
  gtm: {
    enabled: process.env.NODE_ENV === 'production', 
    id: 'GTM-M6CLXHQC', 
    defer: false,
    debug: true,
    enableRouterSync: true,
  },

  compatibilityDate: "2024-10-21",
});