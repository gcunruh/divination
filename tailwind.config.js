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
        flow: "flow 6s ease-in-out infinite",
        floatfast: 'float 3s ease-in-out infinite',
        floatslow: 'float 3s ease-out infinite',
        floatmed: 'float 3s ease-in infinite',
        pulse: 'pulse 1.5s infinite',
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
        pulse: {
          '0%': {},
          '70%': { boxShadow: '0 0 0 50px rgba(#000000, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(#000000, 0)' }
      },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
