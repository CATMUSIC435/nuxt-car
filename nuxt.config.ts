import tailwindcss from "@tailwindcss/vite";
import yaml from '@rollup/plugin-yaml'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt', // default fallback title
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'description', content: 'My amazing site.' },
      ],
      bodyAttrs: {
        class: 'test',
      },
      script: [{ innerHTML: 'console.log(\'Hello world\')' }],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  components: true,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    'nuxt-lucide-icons',
    'nuxt-swiper',
    '@pinia/nuxt',
  ],
  fonts: {
    google: {
      families: {
        Poppins: [400, 500, 600, 700],
        'Roboto Flex': [400, 700],
      }
    }
  },
  lucide: {
    namePrefix: 'Icon'
  },
  routeRules: {
    // Generated at build time for SEO purpose
    '/': { prerender: true },
    // Cached for 1 hour
    '/api/*': { cache: { maxAge: 60 * 60 } },
    // Redirection to avoid 404
    '/old-page': {
      redirect: { to: '/new-page', statusCode: 302 },
    },
    // ...
  },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [
      yaml(),
      tailwindcss(),
    ],
  },
  pinia: {
    /**
     * Automatically add stores dirs to the auto imports. This is the same as
     * directly adding the dirs to the `imports.dirs` option. If you want to
     * also import nested stores, you can use the glob pattern `./stores/**`
     * (on Nuxt 3) or `app/stores/**` (on Nuxt 4+)
     *
     * @default `['stores']`
     */
    storesDirs: []
  }
})