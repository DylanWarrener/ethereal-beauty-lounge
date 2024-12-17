import vuetify from 'vite-plugin-vuetify';
import Checker from 'vite-plugin-checker';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  alias: {
    '@/abstractions': './src/abstractions',
    '@/assets': './src/assets',
    '@/components': './src/components',
    '@/layouts': './src/layouts',
    '@/middleware': './src/middleware',
    '@/pages': './src/pages',
    '@/plugins': './src/plugins',
    '@/server': './src/server',
    '@/stores': './src/stores',
    '@/utils': './src/utils',
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  plugins: ['~/plugins/vuetify'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: ['@pinia/nuxt'],
  css: ['vuetify/styles', '@/assets/styles/main.scss'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false, // Required for Vuetify
    },
    plugins: [
      vuetify({
        autoImport: true,
      }),
      Checker({
        vueTsc: true, // Enables Vue TypeScript checking
      }),
    ],
  },
  typescript: {
    strict: true,
    typeCheck: true, // Enables type-checking at build/development time.
  },
  imports: {
    autoImport: true,
  },
  runtimeConfig: {
    public: {
      firebase: {
        config: {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          projectId: process.env.FIREBASE_PROJECT_ID,
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.FIREBASE_APP_ID,
          measurementId: process.env.FIREBASE_MEASUREMENT_ID,
        },
      },
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  ssr: true,
});
