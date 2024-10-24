/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'minha-cor-1': '#011526',
        'minha-cor-2': '#757351',
      },
    },
  },
  plugins: [],
}