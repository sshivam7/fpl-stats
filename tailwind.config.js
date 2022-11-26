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
        'dk-background': 'rgba(216,191,171,0.24)'
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