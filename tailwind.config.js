/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#f5f5f0',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'stat': ['Staatliches', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'anton': ['Anton', 'sans-serif'],
      }
    },
  },
  plugins: [],
}