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
  modules: ["@nuxt/content", "@nuxt/image"],
});
