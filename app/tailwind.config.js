/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    colors: {
      orange: "#F56C43",
      othercolor: "#FF6B40",
      grey: "#999999",
      green: "#3CDC4C",
      red: "#FF4242",
      black: "#FFFFFF",
    },
  },
  plugins: [],
};
