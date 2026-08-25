import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#0f1115', // deep charcoal
        forest: '#0b1a14', // dark forest
        sand: '#d9c8a8', // sand beige
        olive: '#6b8f71', // olive green
        sunset: '#ff7a45', // sunset orange accent
        glass: 'rgba(255,255,255,0.06)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(1200px 600px at 20% 10%, rgba(255,122,69,0.15) 0%, rgba(15,17,21,0) 60%), radial-gradient(800px 400px at 80% 30%, rgba(107,143,113,0.18) 0%, rgba(15,17,21,0) 60%)',
        'glass': 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)'
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(0,0,0,0.25)',
        'glow': '0 0 0 1px rgba(255,255,255,0.08), 0 12px 40px rgba(0,0,0,0.35)'
      },
      borderRadius: {
        'xl': '1.2rem',
        '2xl': '1.6rem'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2.5rem'
        }
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'scroll-indicator': {
          '0%': { opacity: '0', transform: 'translateY(0)' },
          '30%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(10px)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out both',
        'scroll-indicator': 'scroll-indicator 1.8s ease-in-out infinite'
      }
    }
  },
  plugins: [],
}

export default config