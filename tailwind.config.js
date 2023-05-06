/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-400": "#d45d93",
        "dark-400": "#0a122a",
        "dark-300": "#091026",
        "dark-200": "#011936",
        "dark-mid": "#38334c",
      },
    },
  },
  plugins: [require("daisyui")],
};
