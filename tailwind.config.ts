
import type { Config } from "tailwindcss";
export default {
    content: [
        "./src/app/**/*.{js, ts, jsx, tsx}",
        "./src/components/**/*.{js, ts, jsx, tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                "fade-in-soft": {
                    "0%": { opacity: "0", transform: "translateY(6px)" },
                    "100%": { opacity: "1", transform: "translateY(0px)" },
                },
            },
            animation: {
                "fade-in-soft": "fade-in-soft 0.65s ease-out 0.05s both cubic-bezier(0.16, 1, 0.3, 1)",
            },

            fontFamily: {
                header: ["var(--font-playfair)"],
                body: ["var(--font-cormorant)"],
                accent: ["var(--font-allura)"],
            },
            colors: {
                background: "hsl(var(--background) / <alpha-value>)",
                foreground: "hsl(var(--foreground) / <alpha-value>)",
                primary: "hsl(var(--primary) / <alpha-value>)",
                secondary: "hsl(var(--secondary) / <alpha-value>)",

            },
            spacing: {
                xs: "var(--space-xs)",
                sm: "var(--space-sm)",
                md: "var(--space-md)",
                lg: "var(--space-lg)",
                xl: "var(--space-xl)",
            },
        },
    },
    plugins: [],
} satisfies Config; 