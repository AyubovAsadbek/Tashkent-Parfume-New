/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,css}"],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        greyPrimary: "#F7F8FA",
        greySecondary: "#6F6F6F",
        redPrimary: "#F6285B",
        mainDark: "#383838",
      },
      screens: {
        phoneSm: "430px",
        phone: "575px",
        tabletsm: "768px",
        tablet: "992px",
        laptopSm: "1024px",
        laptop: "1280px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
