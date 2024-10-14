/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'false',
  theme: {
    extend: {
      fontFamily: {
        'Sen': ['"Sen"', 'sans-serif'],
        'FontAwesome': ['"Sen"', '"FontAwesome"', 'sans-serif']
      },
      screens: {
        'sm': {'max': '767px'},
        'md': {'min': '768px', 'max': '1023px'},
        'lg': {'min': '1024px', 'max': '1279px'},
        'xl': {'min': '1280px', 'max': '1535px'},
        '2xl': {'min': '1536px'},
      },
      colors: {
        'xblue' : {
          200 : '#c3edff',
          500 : '#0191ba',
        },
        'xsky' : {
          500 : '#35bbca',
        },
        'xyellow' : {
          500 : '#f8d90f'
        },
        'xgreen' : {
          500: '#d3dd1b'
        }
      }
    },
  },
  plugins: [],
}

