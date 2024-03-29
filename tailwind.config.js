
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      screens: {
        '2xl': {max: '1535px'},
        'xl': {max: '1279px'},  
        'lg': {max: '1023px'},
        'md': {max: '767px'},
        'sm': {max: '639px'},
        'xs': {max: '479px'},
        'lg-min': {min: '1024px'},
      },
      colors: {
        dark: '#1b1b1b',
        light: '#f5f5f5',
        primary: 'green',
        primaryDark: 'red',
        white: colors.white,
      }, 
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px)',
        circularDark: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #1b1b1b 8px, #1b1b1b 100px)'
      },
    },
  },
  plugins: [],
}
