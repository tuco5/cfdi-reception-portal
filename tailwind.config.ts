import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
        hero: "linear-gradient(to bottom right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), url('/img/hero.jpg')",
        steps:
          "linear-gradient(to bottom right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), url('/img/step-by-step.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
