/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        100: '25rem',
        104: '26rem',
        190: '47.5rem',
        192: '48.125rem',
      }
    },
  },
  plugins: [],
}
