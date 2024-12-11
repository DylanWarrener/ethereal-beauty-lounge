import vuetify from 'vite-plugin-vuetify';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({ 
  css: [
    'vuetify/styles',
    '~/assets/styles/main.scss'
  ],
  components: {
    dirs: [
      {
         path: '~/components/common',
         prefix: ''
      }
    ]
  },
  imports: {
    autoImport: true
  },
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    plugins: [
      vuetify({
        autoImport: true,
      }),
    ],
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
          measurementId: process.env.FIREBASE_MEASUREMENT_ID
        }
      }
    }
  },
  modules: ['@pinia/nuxt'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true
})
