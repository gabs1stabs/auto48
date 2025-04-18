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
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1700px',
      '4xl': '1900px',
      '5xl': '2100px',
      '6xl': '2300px',
      '7xl': '2500px',
      '8xl': '2700px',
    }
    
    
  },
  content: ["./src/**/*.{js,jsx}"],
  plugins: [],
}
