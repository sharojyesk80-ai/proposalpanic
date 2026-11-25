import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        accent: "hsl(var(--accent))",
        muted: "hsl(var(--muted))",
        accent2: "#D5FA52",
        card: "hsl(var(--card))",
        popover: "hsl(var(--popover))",
        popover_foreground: "hsl(var(--popover_foreground))",
        secondary_text: "#6B6B6B",
        almost_black: "#151515",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        devanagari: ["Noto Sans Devanagari", "sans-serif"],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "confetti": {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "100%": { transform: "translateY(100px) rotate(720deg)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.4s ease-out forwards",
        "pulse-slow": "pulse-slow 2s ease-in-out infinite",
        "confetti": "confetti 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;