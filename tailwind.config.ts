import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/core/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "hsla(259, 63%, 59%, 1)",
        secondary: {
          DEFAULT: "hsla(258, 67%, 78%, 1)",
          border: "hsla(265, 25%, 98%, 1)",
          fg: "hsla(258, 54%, 52%, 1)",
          other: "hsla(210, 20%, 98%, 1)",
        },
        border: {
          primary: "hsla(217, 6%, 87%, 1)",
          secondary: "hsla(265, 89%, 86%, 1)",
        },
        text: {
          placeholder: "hsla(221, 23%, 52%, 1)",
          secondary: {
            fg: "hsla(217, 38%, 33%, 1)",
            700: "hsla(217, 24%, 27%, 1)",
          },
          tertiary: {
            600: "hsla(216, 18%, 34%, 1)",
          },
        },
        button: {
          primary: {
            fg: "hsla(0, 0%, 100%, 1)",
          },
          secondary: {
            fg: "hsla(217, 24%, 27%, 1)",
            bg: "hsla(0, 0%, 100%, 1)",
          },
        },
      },
      boxShadow: {
        "shadow-xs": "0 1px 2px 0 hsla(220, 60%, 50%, 0.15)",
      },
    },
  },
  plugins: [],
} satisfies Config;
