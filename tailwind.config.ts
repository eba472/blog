import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./app/**/*.{js,ts,tsx}",
    "./components/**/*.{js,ts,tsx}",
    './posts/**/*.md',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-graphik)"],
      },
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
      listStyleType: {
        disc: "disc",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config;
