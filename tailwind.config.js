/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Navy/Dark Purple Background
        "background-dark": "#1A1A2E",
        // Vibrant Violet/Purple Accent (for cards/badges/primary links)
        "primary-purple": "#6C5CE7",
        // Gold/Yellow Accent (for CTAs and highlights)
        "accent-gold": "#FFD700",
        // Subtle Gray for secondary text
        "text-light": "#E0E0E0",
      },
      fontFamily: {
        // Using Inter as a default
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        // Custom shadow for emphasis
        "3xl": "0 35px 60px -15px rgba(108, 92, 231, 0.4)",
      },
    },
  },
  plugins: [],
};
