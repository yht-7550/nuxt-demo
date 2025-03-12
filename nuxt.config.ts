// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  devServer: {
    port: 8848,
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    storageKey: 'yht-color-mode',
  },

  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/icon',
  ],

  icon: {
    serverBundle: 'remote',
  },

  sourcemap: {
    client: 'hidden',
    server: 'hidden',
  },

  compatibilityDate: '2025-03-12',
})
