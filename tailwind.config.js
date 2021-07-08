const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      gray: colors.coolGray,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
