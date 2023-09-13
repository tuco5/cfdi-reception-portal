module.exports = {
  tabWidth: 2,
  useTabs: false,
  ...require('prettier-airbnb-config'),
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: './tailwind.config.ts',
  printWidth: 100,
};
