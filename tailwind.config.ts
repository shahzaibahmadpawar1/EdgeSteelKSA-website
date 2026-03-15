import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: "#FF5722",
          dark: "#E64A19",
        },
        cobalt: "#1A73E8",
        charcoal: "#202124",
        slate: "#5F6368",
        "grey-bg": "#F8F9FA",
        border: "#E0E2E5",
      },
      fontFamily: {
        main: ["Sora", "sans-serif"],
        mono: ['"Space Mono"', "monospace"],
      },
      animation: {
        ticker: "ticker 28s linear infinite",
        "laser-scan": "laserScan 4s ease-in-out infinite",
        "nav-in": "navIn 0.8s cubic-bezier(0.16,1,0.3,1) both",
        "fade-up": "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-left": "fadeLeft 1s cubic-bezier(0.16,1,0.3,1) forwards",
        "scroll-pulse": "scrollPulse 2s ease-in-out infinite",
        slideInRight:
          "slideInRight 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s both",
      },
      keyframes: {
        ticker: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        laserScan: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        navIn: {
          from: { opacity: "0", transform: "translateY(-100%)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeLeft: {
          from: { opacity: "0", transform: "translateX(40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        scrollPulse: {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(1rem)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
