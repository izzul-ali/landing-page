import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBackground: "#1a1b1f",
        secondaryBackground: "#2c2d31",
        gold: "#977617",
        goldButton: "#696644",
      },
    },
  },
  plugins: [],
} satisfies Config
