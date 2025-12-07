/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Baloo 2"', 'system-ui', 'sans-serif'],
        body: ['"Nunito"', 'system-ui', 'sans-serif'],
      },
      colors: {
        bachpanPink: "#FF9EC4",
        bachpanBlue: "#4F46E5",
        bachpanYellow: "#FACC15",
        bachpanMint: "#6EE7B7",
      },
    },
  },
  plugins: [],
};
