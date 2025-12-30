/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "lb-primary": "var(--lb-primary)",
        "lb-secondary": "var(--lb-secondary)",
        "lb-accent": "var(--lb-accent)",
        "lb-dark": "#1a1a1a",
        "lb-light": "#f8f9fa",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
