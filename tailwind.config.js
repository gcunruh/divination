module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      FontFamily: {
        'news': "Newsreader",
        'cloister': "Cloister"
      },
      colors: {
        'deepblue': '#072533',
        'medblue': '#1D6571',
        'lightblue': '#91B9B9',
        'deepyellow': '#A38033',
        'lightyellow': '#E5D195',
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
