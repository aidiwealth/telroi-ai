// nuxt.config.ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-27',
  devtools: { enabled: false },

  css: [
    '~/assets/css/tokens.css',
    '~/assets/css/base.css',
    '~/assets/css/components.css'
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Telroi — AI-native voice infrastructure',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        {
          name: 'description',
          content:
            'Telroi is the AI-native voice infrastructure layer powering CPaaS platforms, banks, fintechs and high-volume businesses across growing markets. Programmable voice, AI routing, SIP and Virtual AI Numbers — one API.'
        },
        { property: 'og:title', content: 'Telroi — AI-native voice infrastructure' },
        {
          property: 'og:description',
          content: 'Deploy, automate, route and monitor intelligent voice systems globally.'
        },
        { name: 'theme-color', content: '#ffffff' }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: 'https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/telroi-v1%20logo.png'
        },
        {
          rel: 'apple-touch-icon',
          href: 'https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/telroi-v1%20logo.png'
        },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Geist:wght@300;400;500;600&display=swap'
        }
      ]
    }
  },

  components: [
    { path: '~/components', pathPrefix: false },
    { path: '~/components/sections', pathPrefix: false }
  ],

  // Static site generation — perfect for marketing sites
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    },
    routeRules: {
      '/**': {
        headers: {
          'X-Frame-Options': 'SAMEORIGIN',
          'X-Content-Type-Options': 'nosniff',
          'X-XSS-Protection': '1; mode=block',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
          'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
          'Content-Security-Policy': [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' https://app.cal.com https://fonts.googleapis.com",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "font-src 'self' https://fonts.gstatic.com",
            "img-src 'self' data: https://pub-f138f42d66b748108ebf7432c7314665.r2.dev",
            "media-src 'self' https://pub-f138f42d66b748108ebf7432c7314665.r2.dev",
            "connect-src 'self' https://app.cal.com https://api.telroi.ai",
            "frame-src https://app.cal.com",
            "object-src 'none'",
            "base-uri 'self'"
          ].join('; ')
        }
      }
    }
  }
});
