import {nextui} from '@nextui-org/react';
import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EB11D7',
        secondary: '#12CCFB',
        danger: '#DD1C1A',
        success: '#44AF69',
        warning: '#FCAB10',
        tertiary: '#6684ED',
        quarternary: '#EDBF66',
        black: '#0E0E0E',
        white: '#FFFFFF',
      },
      backgroundImage: {
        hero: "linear-gradient(to bottom right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), url('/img/hero.jpg')",
        steps:
          "linear-gradient(to bottom right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), url('/img/step-by-step.jpg')",
        'contact-us':
          "linear-gradient(to bottom right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), url('/img/contact-us.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      addCommonColors: true,
    }),
  ],
};
export default config;
