import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
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
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
  ],
  devServer: {
    port: 8848,
  },
  ui: {
    theme: {
      colors: ['primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral'],
    },
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
  piniaPluginPersistedstate: {
    key: `yht-%id-store`,
    storage: 'cookies',
    cookieOptions: {
      sameSite: 'strict',
    },
    debug: true,
  },
  sourcemap: {
    client: 'hidden',
    server: 'hidden',
  },
  compatibilityDate: '2025-03-12',
})
