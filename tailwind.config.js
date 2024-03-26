/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.jsx",
    "./src/**/*.jsx",
    "./src/**/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        "primary-500": "#00666C"
      }
    },
  },
  plugins: [],
}

