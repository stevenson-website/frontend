/** @type {import('tailwindcss').Config} */

const commonSizes = {
  header: "84px",
};

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
      yellow: "#FFFF00",
      purple: "#5D3FD3",
    },
    fontFamily: {
      sans: ["Arial", "sans-serif", "Times New Roman"],
    },
    extend: {
      backgroundImage: (theme) => ({
        "bg-stripes": "url('./assets/pictures/background/background.svg')",
      }),
      height: {
        header: commonSizes.header,
      },
      padding: {
        header: commonSizes.header,
      },
      boxShadow: {
        sundown: "0 0 30px rgba(167, 132, 159, 0.9)",
      },
    },
  },
  plugins: [],
};
