module.exports = {
  purge: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
  dark: "class",
  experimental: {
    darkModeVariant: true,
  },
};
