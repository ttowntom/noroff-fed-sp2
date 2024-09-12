/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./src/**/*.mjs"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        battleship: "hsl(180, 1%, 56%)",
        lavender: "hsl(252, 19%, 52%)",
        "lavender-dark": "hsl(251, 19%, 28%)",
        "lavender-light": "hsl(250, 18%, 60%)",
        rust: "hsl(5, 36%, 51%)",
        golf: "hsl(169, 100%, 27%)",
      },
      fontFamily: {
        rowdies: ["Rowdies", "sans-serif"],
        titillium: ["Titillium Web", "sans-serif"],
      },
    },
    screens: {
      xsm: "350px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
