import type { Config } from "tailwindcss";
const c = (v: string) => `rgb(var(--${v}) / <alpha-value>)`;
export default {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: c("background"), foreground: c("foreground"), surface: c("surface"),
        muted: c("muted"), "muted-foreground": c("muted-foreground"), border: c("border"),
      },
      fontFamily: { sans: ["var(--font-manrope)", "sans-serif"], serif: ["var(--font-fraunces)", "serif"] },
    },
  },
} satisfies Config;
