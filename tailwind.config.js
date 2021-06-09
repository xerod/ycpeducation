const windmill = require("@windmill/react-ui/config");
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

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
      zIndex: {
        "-10": "-10",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".bg-mask-t-0": {
          maskImage:
            "linear-gradient(to top, rgba(0, 0, 0, 1.0) 0%, transparent 100%)",
        },
        ".bg-mask-b-0": {
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 0%, transparent 100%)",
        },
      };

      addUtilities(newUtilities);
    }),
  ],
});
