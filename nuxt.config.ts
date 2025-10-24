export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'], 
  // css: ['~/assets/css/tailwind.css'], 
  tailwindcss:{
    cssPath: '@/assets/css/tailwind.css'
  },
  nitro: { compatibilityDate: '2025-10-22' }
})