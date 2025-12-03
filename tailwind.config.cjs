/**** Tailwind config ****/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4f46e5",
          dark: "#3730a3",
        },
      },
    },
  },
  plugins: [],
}
