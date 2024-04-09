import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at center, #FFA700 0%, #ffffff00 100%)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark-blue': 'var(--color-dark-blue)',
        'light-blue': 'var(--color-light-blue)',
        'light-cyan': 'var(--color-light-cyan)',
        'cyan': 'var(--color-cyan)',
        'dark-green': 'var(--color-dark-green)',
      },
      screens: {
        xs: '480px',
      }
    },
  },
  plugins: [],
};
export default config;
