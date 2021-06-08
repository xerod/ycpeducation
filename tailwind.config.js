const windmill = require("@windmill/react-ui/config");
const colors = require("tailwindcss/colors");

module.exports = windmill({
  mode: "jit",
  important: true,
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./theme.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
        emerald: colors.emerald,
      },
      backgroundSize: {
        overflow: "250% 100%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
});
