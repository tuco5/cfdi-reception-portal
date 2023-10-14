import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}', 
    './src/components/**/*.{js,ts,jsx,tsx,mdx}', 
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',  
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#EB11D7',
      secondary: '#12CCFB',
      tertiary: '#6684ED',
      quarternary: '#EDBF66',
      black: '#0E0E0E',
      white: '#FFFFFF',
      danger: '#DD1C1A',
      success: '#44AF69',
      warning: '#FCAB10',
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("@nextui-org/react"),
  ],
};
export default config;
