/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    DEFAULT: "#0B1B3A",
                    light: "#132247",
                    dark: "#060F22",
                    800: "#0B1B3A",
                },
                teal: {
                    DEFAULT: "#0EA5C2",
                    light: "#38BDD6",
                    dark: "#0881A0",
                    100: "#B3EAF5",
                    300: "#4DCDE7",
                    400: "#26C2E0",
                },
                gold: {
                    DEFAULT: "#C9A84C",
                    light: "#D4BC72",
                    dark: "#A88630",
                },
                "gray-light": "#F4F6FA",
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
            },
            boxShadow: {
                card: "0 4px 24px rgba(11,27,58,0.10)",
                lg: "0 8px 40px rgba(11,27,58,0.15)",
            },
        },
    },
    plugins: [],
};

export default config;
