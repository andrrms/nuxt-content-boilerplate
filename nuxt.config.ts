import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],

  vite: {
    plugins: [
      // @ts-expect-error
      tailwindcss(),
    ],
  },
  css: ['@/assets/css/main.css'],
});
