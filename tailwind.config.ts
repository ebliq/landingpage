/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
        ],
        display: [
          "var(--font-display)",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
        ],
      },

      colors: {
        // === Brandfarben ===
        blue: {
          DEFAULT: "#2E5FA7",
          50:  "#EFF4FB",
          100: "#D7E3F4",
          200: "#AFC6E9",
          300: "#87AADE",
          400: "#4B7FCE",
          500: "#2E5FA7", // Primär Blau
          600: "#264F8C",
          700: "#1F3F70",
          800: "#183258",
          900: "#122440",
        },
        violet: {
          DEFAULT: "#A23D8E",
          50:  "#F9F0F8",
          100: "#F1DAEC",
          200: "#E3B5DA",
          300: "#D590C7",
          400: "#C15CAD",
          500: "#A23D8E", // Sekundär / Berry
          600: "#853275",
          700: "#68275B",
          800: "#511F47",
          900: "#3B1634",
        },
        gray: {
          DEFAULT: "#727988",
          50:  "#F6F7F8",
          100: "#EEEFF2",
          200: "#D7DAE0",
          300: "#C1C5CD",
          400: "#949BA8",
          500: "#727988",
          600: "#5C6370",
          700: "#494F5B",
          800: "#303540",
          900: "#1D212B",
        },
        red: {
          DEFAULT: "#E74B4B",
          50:  "#FDEDED",
          100: "#F9D2D2",
          200: "#F4AEAE",
          300: "#EE8181",
          400: "#EA6666",
          500: "#E74B4B", // Error
          600: "#CA1C1C",
          700: "#A21616",
          800: "#751010",
          900: "#510B0B",
        },
        green: {
          DEFAULT: "#1FBF75",
          50:  "#EDFCF5",
          100: "#D3F8E7",
          200: "#A7F1CE",
          300: "#73E8B1",
          400: "#3EE094",
          500: "#1FBF75", // Success
          600: "#1A9E60",
          700: "#147B4B",
          800: "#10603B",
          900: "#0B462B",
        },
        yellow: {
          DEFAULT: "#FFC542",
          50:  "#FFF9EB",
          100: "#FFF0CC",
          200: "#FFE3A3",
          300: "#FFD77A",
          400: "#FFCE5C",
          500: "#FFC542", // Warning
          600: "#F5AB00",
          700: "#CC8F00",
          800: "#996B00",
          900: "#704F00",
        },
        black: "#0D1320", // Marken-Schwarz
        white: "#F8FAFF", // Soft White

        // === Semantic Aliases ===
        primary: {
          DEFAULT: "#2E5FA7",
          50:  "#EFF4FB",
          100: "#D7E3F4",
          200: "#AFC6E9",
          300: "#87AADE",
          400: "#4B7FCE",
          500: "#2E5FA7",
          600: "#264F8C",
          700: "#1F3F70",
          800: "#183258",
          900: "#122440",
        },
        secondary: {
          DEFAULT: "#A23D8E",
          50:  "#F9F0F8",
          100: "#F1DAEC",
          200: "#E3B5DA",
          300: "#D590C7",
          400: "#C15CAD",
          500: "#A23D8E",
          600: "#853275",
          700: "#68275B",
          800: "#511F47",
          900: "#3B1634",
        },

        // === Semantic Aliases ===
        border: "#727988",        // hellblau-grau
        input: "#F6F7F8",
        ring: "#2E5FA7",

        background: "#F8FAFF",    // Soft White
        foreground: "#0D1320",    // Deep Navy

        destructive: {
          DEFAULT: "#E74B4B",
          foreground: "#F8FAFF",
        },

        muted: {
          DEFAULT: "#E9EEFA",     // Gray-50 (blaugetönt)
          foreground: "#6F7C99",
        },
        accent: {
          DEFAULT: "#A23D8E",     // helles Blau als Akzent
          foreground: "#E3B5DA",
        },
        popover: {
          DEFAULT: "#D7E3F4",
          foreground: "#0D1320",
        },
        card: {
          DEFAULT: "#D7E3F4",
          foreground: "#0D1320",
        },
      },
      
      borderRadius: {
        /*lg: "var(--radius)",
        md: "calc(var(--radius) - 1px)",
        sm: "calc(var(--radius) - 3px)",*/
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
