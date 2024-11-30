import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/core/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: {
          DEFAULT: "hsba(258, 67%, 78%, 1)",
          border: "hsba(265, 25%, 98%, 1)",
        },
        border: {
          primary: "hsba(217, 6%, 87%, 1)",
          secondary: "hsba(265, 25%, 98%, 1)",
        },
        text: {
          placeholder: "hsba(221, 23%, 52%, 1)",
          secondary: {
            fg: "hsba(217, 38%, 33%, 1)",
          },
        },
      },
    },
    boxShadow: {
      "shadow-xs": "0 1px 2px 0 hsla(220, 60%, 50%, 0.15)",
    },
  },
  plugins: [],
} satisfies Config;
