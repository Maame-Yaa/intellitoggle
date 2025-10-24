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
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        xl: '1280px',
        '2xl': '1680px',
      },
    },
    extend: {
      colors: {
        heroFrom: '#42389E',
        heroTo:   '#0F1026',
        header2:  '#1A1C3D',
        body2:    '#475569', 
        bgPanel:  '#EDECF6',
      },
      spacing: {
        32: '32px',
        48: '48px',
        95: '95px',
        100: '100px',
        120: '120px', 
      },
      boxShadow: {
        panel: '0 10px 30px rgba(0,0,0,0.08)',
        soft:  '0 10px 10px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [],
}
