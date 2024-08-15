const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dots': 'radial-gradient(circle, #B3B3B3 0.1px, transparent 1px)',
      },
      backgroundSize: {
        'dots': '10px 10px',
      },
      fontFamily: {
        handlee: ['Handlee', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

