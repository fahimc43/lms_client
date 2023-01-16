/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF731D",
        secondary: "#256164",
        trinity: "#9CDBDE",
        placeholder: "#CDCDCD",
        "solid-black": "#000000",
        "solid-white": "#FFFFFF",
      },
    },
    fontFamily: {
      anybody: ["Anybody", "cursive"],
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
