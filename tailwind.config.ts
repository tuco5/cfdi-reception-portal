import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      Primary: '#EB11D7',
      Secondary: '#12CCFB',
      Tertiary: '#6684ED',
      Quarternary: '#EDBF66',
      Black: '#0E0E0E',
      White: '#FFFFFF',
      Danger: '#DD1C1A',
      Success: '#44AF69',
      Warning: '#FCAB10',
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
