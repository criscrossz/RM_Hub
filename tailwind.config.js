/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx,vue}",],
  theme: {
    extend: {
      fontFamily: {
        sans: ['FS Elliot', ...defaultTheme.fontFamily.sans],
    },
    colors : {
        'topbar':"#023047",
        'globe':'#1352AB',
        'oranges':'#FEB220',
        'grays' : '#EDEDED',
        'BCM':'#1363DF',
        'EMS':'#3E7C17',
        'ENMS': '#FFE569',
        'OSH' : '#FF8B13',
        'CMS' : '#850000',
        'ERM' : '#019DDD',
    }
    },
  },
  plugins: [],
  mode: 'jit',
}

