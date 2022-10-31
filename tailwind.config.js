/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      xs: '375px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    fontSize: {
      base: '1.125rem',
      md: '1.5rem',
      lg: '3rem',
      xl: '4rem',
    },

    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        black: '#000000',
        picker: '#263238',
        primary: '#5AE4A8',
        secondary: '#F1FFF5',
        yellow: '#F3AD43',
        lightGrey: '#BFBFBF',
      }

    }
   
  },


}
