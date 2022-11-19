/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-text': '#323232',
        'main-purple': '#6100FF',
      },
      screens: {
        between: '1024px',
        lg: '1280px',
      },
    },
  },
  plugins: [],
};
