// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🍎</text></svg>" }]
    }
  },
  modules: [
    '@nuxt/content', '@nuxtjs/tailwindcss'
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  vite: {
    optimizeDeps: {
      include: []
    }
  }
  
})
