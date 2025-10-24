export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  tailwindcss: { cssPath: '@/assets/css/tailwind.css' },
  googleFonts: {
    families: {
      'Merriweather Sans': [700],
      'DM Sans': [700],
      Inter: [600],
    },
    display: 'swap'
  },
  nitro: { compatibilityDate: '2025-10-22' }
})
