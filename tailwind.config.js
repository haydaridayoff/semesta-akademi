/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "salmon-white": "#F7EEE4",
        "primary-white": "#FFFFFF",
        "primary-black": "#000000",
        "secondary-black": "#212121",
      },
      animation: {
        "go-left-infinite": "go-left 20s linear infinite",
      },
      keyframes: {
        "go-left": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
      },
      fontFamily: {
        primary: ["var(--font-hanken)"],
        redactionItalic: ["var(--font-redaction-italic)"],
      },
    },
  },
  plugins: [],
};
