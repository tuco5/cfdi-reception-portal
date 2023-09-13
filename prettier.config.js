module.exports = {
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("prettier-airbnb-config"),
  ],
  tailwindConfig: "./tailwind.config.js",
  printWidth: 100,
};
