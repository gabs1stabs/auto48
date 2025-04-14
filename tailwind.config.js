/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        turret: ["Turret Road", 'sans-serif'],
        neo: ["Neo Cybern", 'sans-serif'],
        space: ["Space Grotesk", 'sans-serif'],
      },
      animation:{
        "loop-scroll":"loop-scroll 12s linear infinite"
      },
      keyframes:{
        "loop-scroll":{
          from:{ transform : "translateX(0)"},
          to:{ transform : "translateX(-50%)"}
        },
      }
    },
  },
  content: ["./src/**/*.{js,jsx}"],
  plugins: [],
}
