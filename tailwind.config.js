/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-to-45': 'linear-gradient(45deg, #34d399, #93c5fd, #2dd4bf)'
      }),
    },
  },
  plugins: [],
};
