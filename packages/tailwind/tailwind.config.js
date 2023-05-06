/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    // include packages if not transpiling
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
    // app content
    'src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
