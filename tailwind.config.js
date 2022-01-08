module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tahiti': '#EC916A'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
