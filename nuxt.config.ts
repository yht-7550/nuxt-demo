import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxt/icon',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  devServer: {
    port: 8848,
  },
  ui: {
    fonts: false,
    colorMode: true,
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: '',
    storageKey: 'yht-color-mode',
  },
  icon: {
    serverBundle: {
      collections: ['material-symbols'],
      remote: true,
    },
  },
  sourcemap: {
    client: 'hidden',
    server: 'hidden',
  },
  compatibilityDate: '2025-03-12',
})
