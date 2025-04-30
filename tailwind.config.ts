import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          50: '#FCF7F8',
          100: '#F7E7EA',
          200: '#E9C1C7',
          300: '#DB9BA4',
          400: '#CD7581',
          500: '#BF4F5E', // Primary wine color
          600: '#A13D4A',
          700: '#832B37',
          800: '#651A24',
          900: '#470811',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)'],
      },
    },
  },
  plugins: [],
}

export default config 