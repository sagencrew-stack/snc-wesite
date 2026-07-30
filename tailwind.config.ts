import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#071A2F",
          mid:     "#0E2A47",
          soft:    "#0F3256",
        },
        accent: {
          DEFAULT: "#7A9E7E",
          soft:    "#A8C3A5",
          deep:    "#5C8060",
        },
        sage: {
          DEFAULT: "#7A9E7E",
          soft:    "#A8C3A5",
          deep:    "#5C8060",
        },
        gold: {
          DEFAULT: "#C9A646",
          soft:    "#D4B76A",
          deep:    "#A8842E",
        },
        ivory: {
          DEFAULT: "#F4F7FA",
          warm:    "#F7F5EE",
        },
        muted:   "#A8B3C2",
        dark:    "#111827",
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "system-ui", "sans-serif"],
        sans:    ["var(--font-sans)",    "Inter",          "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft:          "0 4px 24px -8px rgba(7,26,47,0.12)",
        lift:          "0 24px 48px -16px rgba(7,26,47,0.25)",
        gold:          "0 0 0 1px rgba(201,166,70,0.20), 0 8px 28px -6px rgba(201,166,70,0.22)",
        sage:          "0 8px 28px -6px rgba(122,158,126,0.22)",
        "card-dark":   "0 16px 40px -12px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)",
        "card-light":  "0 2px 12px -4px rgba(7,26,47,0.07), 0 1px 3px -1px rgba(7,26,47,0.05)",
      },
      maxWidth: { container: "1200px" },
      keyframes: {
        "pulse-glow": {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(122,158,126,0.28)" },
          "50%":     { boxShadow: "0 0 0 12px rgba(122,158,126,0)" },
        },
        float:  { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
        float2: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        "fade-up": {
          "0%":   { transform: "translateY(18px)", opacity: "0" },
          "100%": { transform: "translateY(0)",    opacity: "1" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
        "wa-pulse": {
          "0%":   { transform: "scale(0.9)", opacity: "0.7" },
          "100%": { transform: "scale(1.6)", opacity: "0"   },
        },
        "loader-glow":    { to: { opacity: "1" } },
        "loader-logo":    { to: { opacity: "1", transform: "scale(1)" } },
        "loader-word":    { to: { opacity: "1", transform: "translateY(0)" } },
        "loader-ring":    { to: { transform: "rotate(360deg)"  } },
        "loader-ringrev": { to: { transform: "rotate(-360deg)" } },
        "loader-shimmer": {
          "0%":   { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)"  },
        },
        "loader-shimfade": {
          "0%,70%": { opacity: "1" },
          "100%":   { opacity: "0" },
        },
        "loader-pulse": {
          "0%":   { boxShadow: "0 0 0 0 rgba(201,166,70,0.45)"  },
          "60%":  { boxShadow: "0 0 0 32px rgba(201,166,70,0)"  },
          "100%": { boxShadow: "0 0 0 0 rgba(201,166,70,0)"     },
        },
        "shs-entrance": { to: { opacity: "1", transform: "translateY(0) scale(1)" } },
        "shs-pulse": {
          "0%,100%": { opacity: "1",   transform: "scale(1)"   },
          "50%":     { opacity: "0.5", transform: "scale(1.4)" },
        },
        "grad-shift": {
          "0%":   { backgroundPosition: "0% 50%"  },
          "50%":  { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%"  },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 2.5s ease-in-out infinite",
        float:        "float 5s ease-in-out infinite",
        "float-slow": "float2 7s ease-in-out infinite",
        marquee:      "marquee 30s linear infinite",
        "wa-pulse":   "wa-pulse 2s ease-out infinite",
        "grad-shift": "grad-shift 10s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
