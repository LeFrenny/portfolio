import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "bg-base": "#07090d",
        "bg-panel": "#0d1117",
        "bg-panel-soft": "#111827",
        "ink": "#e6edf3",
        "ink-muted": "#8b949e",
        "line-base": "#30363d",
        "terminal": "#39ff88",
        "terminal-dim": "#163f2b",
        "kernel": "#58a6ff",
        "warn": "#f2cc60",
        "error": "#ff7b72",
        "accent-primary": "#39ff88",
        "accent-secondary": "#58a6ff",
        "accent-tertiary": "#f2cc60",
        "text-main": "#e6edf3",
        "text-muted": "#8b949e"
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-monospace", "SFMono-Regular", "monospace"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        panel: "0 18px 50px rgba(0, 0, 0, 0.35)",
        glow: "0 0 28px rgba(57, 255, 136, 0.16)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        blink: {
          "0%, 45%": { opacity: "1" },
          "46%, 100%": { opacity: "0" }
        },
        sweep: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        }
      },
      animation: {
        "fade-up": "fade-up 520ms ease-out both",
        blink: "blink 1s steps(1) infinite",
        sweep: "sweep 4s linear infinite"
      }
    }
  },
  plugins: [typography]
};

export default config;
