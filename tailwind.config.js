/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    colors: {
      ...colors,
      primary: '#1d4ed8',
      secondary: '#374151',
      tertiary: '#a8a29e',
      fourthy: '#e2e8f0',
      message: '#3b82f6',
      darkPrimary: '#111827'
    },
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite'
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}
