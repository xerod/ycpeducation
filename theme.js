export default {
  button: {
    base: "align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-all duration-300 font-medium focus:outline-none",
    primary: {
      base: "text-white bg-gradient-to-br from-amber-500 via-orange-500 to-orange-600 bg-overflow",
      active:
        "transform focus:ring active:bg-left hover:bg-right focus:ring-orange-200 active:ring-0",
      disabled: "opacity-50 cursor-not-allowed",
    },
    icon: {
      larger: "h-5 w-5",
      large: "h-5 w-5",
      regular: "h-4 w-4",
      small: "h-3 w-3",
      left: "mr-2 -ml-1",
      right: "ml-2 -mr-1",
    },
  },
  input: {
    base: "block w-full text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md transition duration-300 shadow-sm",
    active:
      "focus:border-orange-300 border-gray-200 dark:border-gray-600 focus:ring focus:ring-orange-100 dark:focus:border-gray-600 dark:focus:ring-gray-300 dark:bg-gray-700",
    disabled: "cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800",
    valid:
      "border-green-600 dark:bg-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:ring focus:ring-green-200 dark:focus:ring-green-200",
    invalid:
      "border-red-600 dark:bg-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring focus:ring-red-200 dark:focus:ring-red-200",
    radio:
      "text-orange-600 form-radio focus:border-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-offset-0 dark:focus:ring-gray-300",
    checkbox:
      "text-orange-600 form-checkbox focus:border-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-offset-0 rounded dark:focus:ring-gray-300",
  },
  label: {
    base: "block text-sm text-gray-600 dark:text-gray-400",
    // check and radio get this same style
    check: "inline-flex items-center",
    disabled: "opacity-50 cursor-not-allowed",
  },
  textarea: {
    base: "block w-full text-sm dark:text-gray-300 rounded-md focus:outline-none transition duration-300 shadow-sm",
    active:
      "focus:border-orange-300 border-gray-200 dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700 dark:focus:ring-gray-300 focus:ring focus:ring-orange-100",
    disabled: "cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800",
    valid:
      "border-green-600 dark:bg-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:ring focus:ring-green-200 dark:focus:ring-green-200",
    invalid:
      "border-red-600 dark:bg-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring focus:ring-red-200 dark:focus:ring-red-200",
  },
};
