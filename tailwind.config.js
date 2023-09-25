/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "gray-dark": {
          100: "#CCD0D4",
          200: "#82888F",
          400: "#525B67",
          600: "#1B1F27",
          700: "#21252E",
          800: "#252528",
          900: "#191D24",
        },
        "secondary": "#F5A937",
      },
      fontSize: {
        'extra-small': '.65rem',
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
}
