// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  typescript: {
    shim: false,
  },

  app: {
    rootId: "vs-site-wrapper",
    head: {
      title: 'ValidStack - Web Development, Data Visualization & Backend Solutions',
      meta: [
        { name: 'description', content: 'ValidStack offers professional web and mobile development services. We specialize in frontend, backend, API development, and data visualization, ensuring high-quality solutions tailored to your business needs.' },
        { name: 'keywords', content: 'web development, mobile development, frontend, backend, Vue, Nuxt, Strapi, Node.js, React, API, GraphQL, OSS, BSS, Big Data' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'ValidStack - Web Development, Data Visualization & Backend Solutions' },
        { property: 'og:description', content: 'Transform your ideas into reality with ValidStack. We build scalable and dynamic enterprise solutions.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://validstack.pro' },
        { property: 'og:image', content: 'https://validstack.pro/preview.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'ValidStack - Web Development, Data Visualization & Backend Solutions' },
        { name: 'twitter:description', content: 'Providing top-tier web and mobile solutions with expertise in Vue, Nuxt, Strapi, and more.' },
        { name: 'twitter:image', content: 'https://validstack.pro/preview.jpg' }
      ]
    }
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
  ],
  gtag: {
    enabled: process.env.NODE_ENV === 'production',
    id: 'GTM-M6CLXHQC',
    // id: 'G-TE6K13CVN3', 
  },

  compatibilityDate: "2024-10-21",
});