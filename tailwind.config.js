/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light: '#F0D080',
          dim: '#8A6A2A',
          pale: '#E8D5A0',
        },
        navy: {
          DEFAULT: '#060B1A',
          2: '#0A1228',
          3: '#0E1A38',
          4: '#121F45',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        cormorant: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-ring': 'pulse-ring 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'gold-glow': 'gold-glow 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-up': 'fade-up 0.8s ease forwards',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        'pulse-ring': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201,168,76,0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(201,168,76,0.6), 0 0 80px rgba(201,168,76,0.2)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gold-glow': {
          '0%, 100%': { boxShadow: '0 0 40px rgba(201,168,76,0.12)' },
          '50%': { boxShadow: '0 0 80px rgba(201,168,76,0.3), 0 0 120px rgba(201,168,76,0.1)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #F0D080 50%, #C9A84C 100%)',
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 50% 40%, #1A2A5E 0%, #0A1228 50%, #060B1A 100%)',
        'glass': 'rgba(255,255,255,0.04)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
