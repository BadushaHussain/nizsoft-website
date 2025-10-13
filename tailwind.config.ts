import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0066ff",
        "primary-dark": "#0052cc",
        secondary: "#00d4ff",
        accent: "#8b5cf6",
        success: "#10b981",
        dark: "#0a0e27",
        "dark-light": "#141829",
        "dark-card": "#1a1f3a",
        gray: "#8892b0",
        light: "#e6f1ff",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "grid-move": "gridMove 20s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        gridMove: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(60px, 60px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;