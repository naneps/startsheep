/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [{
      mytheme: {
        "primary": "#2563eb",
        "secondary": "#8b5cf6",
        "accent": "#fef08a",
        "neutral": "#1B1D1D",
        "base-100": "#212121",
        "info": "#7dd3fc",
        "success": "#22c55e",
        "warning": "#facc15",
        "error": "#DC2828",
      },
    }, ],
  },
  plugins: [require("daisyui")],
}