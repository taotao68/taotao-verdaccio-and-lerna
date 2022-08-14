/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./packages/**/*.{tsx,jsx}"],
  "darkMode":"class",
  theme: {
    extend: {
      colors: {
        'primary': '#297EFF',
      },
    },
  },
  plugins: [], 
}
