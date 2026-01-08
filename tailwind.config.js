/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#19215f",
          green: "#185615",
          navyLight: "#2C3E50",
          navyDark: "#1A2433",
          greenLight: "#27AE60",
          greenDark: "#1E8449",
        },
        neutral: {
          softWhite: "#FAFAFA",
          warmWhite: "#FDFBF7",
          lightGray: "#F5F5F5",
          bodyText: "#333333",
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'Lato', 'Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

