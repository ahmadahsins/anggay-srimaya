/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'second-page.html'],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  daisyui: {
    themes: ['light', 'dark'],
  },
  plugins: [require('daisyui'), require('tailwindcss-animated')],
};
