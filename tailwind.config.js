/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#bfa544',
        blue: '#6ec1e4',
        navy: '#151c27',
        cream: '#f7f7e7',
      },
      fontFamily: {
        sans: ['Montserrat', 'Arial', 'Helvetica', 'sans-serif'],
      },
      fontWeight: {
        thin: 300,
        normal: 400,
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
};
