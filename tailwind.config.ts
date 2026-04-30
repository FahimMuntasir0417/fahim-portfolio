import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        surface: "rgb(var(--surface) / var(--surface-opacity))",
        "surface-2": "rgb(var(--surface-2) / var(--surface-2-opacity))",
        "surface-3": "rgb(var(--surface-3) / var(--surface-3-opacity))",
        border: "rgb(var(--border) / var(--border-opacity))",
        muted: "rgb(var(--muted) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-soft": "rgb(var(--accent-soft) / 0.12)",
        "accent-2": "rgb(var(--accent-2) / <alpha-value>)"
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
      },
      boxShadow: {
        card: "0 32px 90px rgba(2, 8, 23, 0.24)",
        glow: "0 0 0 1px rgba(103, 232, 249, 0.18), 0 18px 60px rgba(56, 189, 248, 0.16)",
        soft: "0 12px 36px rgba(15, 23, 42, 0.12)"
      },
      backgroundImage: {
        grid:
          "linear-gradient(to right, rgba(161,161,170,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(161,161,170,0.08) 1px, transparent 1px)"
      },
      animation: {
        float: "float 10s ease-in-out infinite",
        pulseGlow: "pulseGlow 6s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.9" }
        }
      }
    }
  },
  plugins: []
};

export default config;
