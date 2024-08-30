/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      background: {
        light: "#ffffff",
        dark: "#4a5261",
      },
      text: {
        light: "#4a5261",
        dark: "#ffffff",
      },
      primary: {
        main: "#ee7383",
        second: "#d9bd9e",
        third: "#d0d4db",
      },
      white: "#ffffff",
      black: "#000000",
      gray: {
        main: "#818285",
        light: "#E0E0E0",
      },
    },
    fontFamily: {
      sans: ["Arial", "sans-serif", "Times New Roman"],
    },
    extend: {
      backgroundImage: (theme) => ({
        "bg-stripes": "url('./assets/pictures/background/background.svg')",
      }),
    },
  },
  plugins: [],
};
