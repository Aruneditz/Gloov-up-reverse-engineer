/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#040612', // Cosmic obsidian
        surface: '#0a0e24',     // Deep twilight glass
        'surface-elevated': '#121838', // Elevated neon twilight
        'surface-card': '#0e142e',
        primary: {
          DEFAULT: '#2563eb',  // Proper Royal Blue (#2563eb)
          vibrant: '#3b82f6',  // Pure True Blue (#3b82f6)
          glow: '#60a5fa',     // Vibrant Font Blue (#60a5fa)
          light: '#93c5fd',    // Soft Font Blue (#93c5fd)
          dark: '#1d4ed8',     // Deep Navy Blue (#1d4ed8)
        },
        cosmic: {
          blue: '#3b82f6',
          royal: '#2563eb',
          sky: '#60a5fa',
          cyan: '#38bdf8',
          amber: '#f59e0b',
          purple: '#a855f7',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(59, 130, 246, 0.4)',
        'glow': '0 0 35px rgba(59, 130, 246, 0.55)',
        'glow-lg': '0 0 65px rgba(59, 130, 246, 0.75)',
        'neon-indigo': '0 0 25px rgba(59, 130, 246, 0.6), 0 0 50px rgba(37, 99, 235, 0.35)',
        'neon-blue': '0 0 25px rgba(59, 130, 246, 0.6), 0 0 50px rgba(37, 99, 235, 0.35)',
        'laser': '0 0 15px rgba(96, 165, 250, 0.95), 0 0 30px rgba(59, 130, 246, 0.65)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'aurora-spin': 'aurora-spin 20s linear infinite',
        'laser-pulse': 'laser-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        'aurora-spin': {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        'laser-pulse': {
          '0%, 100%': { opacity: '0.7', filter: 'drop-shadow(0 0 8px rgba(99, 102, 241, 0.6))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 18px rgba(129, 140, 248, 0.9))' },
        }
      }
    },
  },
  plugins: [],
}
