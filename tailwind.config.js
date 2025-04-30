/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
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
        cork: {
          50: '#FAF6F3',
          100: '#F5EDE7',
          200: '#E6D5C8',
          300: '#D7BDA9',
          400: '#C8A58A',
          500: '#B98D6B', // Accent color
          600: '#9A7150',
          700: '#7B5535',
          800: '#5C391A',
          900: '#3D1D00',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)'],
      },
    },
  },
  plugins: [],
} 