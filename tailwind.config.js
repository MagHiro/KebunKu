/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily : {
      'sans': ['sans-serif'],
      'display': ['Montserrat', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'sidebaractive': "url('./assets/sidebaractive.svg')",
      },
      colors : {
        'primary' : '#05A685',
        'header' : '#505050',
        'secondary' : '#fda506'
      },
    },
  },
  plugins: [],
}
