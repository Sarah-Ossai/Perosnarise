/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
        screens: {
          'md': '1050px',
          'sp': '1280px',
        },
    extend: {
      colors: {
        lightBlue: "#C2DBFF",
        blue: "#257CFF",
      },
      backgroundImage: {
        'hero-pattern': "url('Components/Assets/Images/herobg.png')",
        'left-half': "url('Components/Assets/Images/lefthalf.png')",
        'right-half': "url('Components/Assets/Images/righthalf.png')",

      },
      fontFamily: {
        'sans': ['Helvetica'],
        'inter': ['Inter']
      },
    },
  },
  plugins: [],
}