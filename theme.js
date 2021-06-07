export default {
  button: {
    base: "align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-all duration-300 font-medium focus:outline-none",
    primary: {
      base: "text-white bg-gradient-to-br from-amber-500 via-orange-500 to-orange-600 bg-overflow",
      active:
        "transform focus:ring active:bg-left hover:bg-right focus:ring-orange-200 active:ring-0",
      disabled: "opacity-50 cursor-not-allowed",
    },
  },
};
