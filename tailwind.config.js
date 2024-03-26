/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
    },
    extend: {
      colors: {
        'accent-color': ['#149eca']
      },
    },
  },
  plugins: [],
}

