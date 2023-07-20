/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'navbarbs': '0px 1px 3px 0px rgba(0, 0, 0, 0.26)',
      }
    },
  },
  plugins: [],
}

