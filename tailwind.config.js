module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tahiti': '#EC916A'
      },
      animation: {
        flow: "flow 5s ease-in-out infinite",
        floatfast: 'float 3s ease-in-out infinite',
        floatslow: 'float 3s ease-out infinite',
        floatmed: 'float 3s ease-in infinite',
      },
      keyframes: {
        flow: {
          '0%': {
            backgroundPosition: "0 50%"
          },
          '50%': {
            backgroundPosition: "100% 50%"
          },
          '100%': {
            backgroundPosition: "0 50%"
          }
        },
        float: {
          '0%': { transform: 'translate(0, 0px)' },
          '50%': { transform: 'translate(2px, 10px)' },
          '100%': { transform: 'translate(0, -0px)' }
        },

      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
