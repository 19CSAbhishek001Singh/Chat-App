module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  important: true,
  theme: {
    extend: {},
    screens: {
      'sm': '576px',
      'md': '960px',
      'lg': '1440px',
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
