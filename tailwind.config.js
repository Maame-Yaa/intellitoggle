/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    container:{
      center: true,
      padding: '1.5rem',
      screens:{
        '2xl': '1280px'
      }
    },
    extend: {},
  },
  plugins: [],
}
