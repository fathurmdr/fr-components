/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "max-height, height",
      },
      variants: {
        height: ["responsive", "hover", "focus"],
      },
    },
  },
  plugins: [],
};
