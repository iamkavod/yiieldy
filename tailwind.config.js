/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#218225",
        primaryColorDark: "#0F3A11",
        primaryColorLight: "#BAD8BB",
        blackShade: "#383B3E",
        blackShadeB: "#5E6282",
        blackShadeC: "rgba(139, 146, 152, 0.50)",
        blackShadeD: "#212121",
        whiteShade: "#D1E2FF"
        
      }
    },
  },
  plugins: [],
}