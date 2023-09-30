/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "gray-dark": {
          100: "#CCD0D4",
          200: "#c9d1d9",
          400: "#8b949e",
          500: "#2C3034",
          600: "#1b1f22",
          700: "#1C1F23",
          800: "#252528",
          900: "#212529",
        },
        "secondary": "#F5A937",
        "dark": "#111315",
      },
      fontSize: {
        'extra-small': '.65rem',
      },
      gridTemplateColumns: {
        'projects': '148px 10px 148px 10px 148px',
      },
      gridTemplateRows: {
        'projects': '20px 228px 10px 228px 20px',
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
}
