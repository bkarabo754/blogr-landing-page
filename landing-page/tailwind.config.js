/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'overpass': 'overpass'
      }, 
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
        }
      },
      colors: {
        'cta-light-red-text': 'hsl(356, 100%, 66%)',
        'cta-bg-very-light-red': 'hsl(355, 100%, 74%)',
        'headings-very-dark-blue': 'hsl(208, 49%, 24%)',
        'white-text': 'hsl(0, 0%, 100%)',
        'grayish-blue-footer': 'hsl(240, 2%, 79%)',
        'very-dark-grayish-blue-body': 'hsl(207, 13%, 34%)',
        'very-dark-black-blue-footer': 'hsl(240, 10%, 16%)',
        'very-light-red': 'hsl(13, 100%, 72%)',
        'light-red': 'hsl(353, 100%, 62%)',
        'very-dark-gray-blue': 'hsl(237, 17%, 21%)',
        'very-dark-desaturated-blue': 'hsl(237, 23%, 32%)'
      },

      fontSize : {
        'size': '16px'
      }
    },
  },
  plugins: [],
}