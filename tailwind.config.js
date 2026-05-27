/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables dark mode based on the 'dark' class on the HTML tag
  theme: {
    extend: {
      colors: {
        background: {
          light: '#f8fafc',
          dark: '#020617',
        },
        primary: {
          light: '#3B82F6',
          dark: '#3B82F6',
        },
        secondary: {
          light: '#8B5CF6',
          dark: '#8B5CF6',
        },
        accent: {
          light: '#0ea5e9',
          dark: '#0ea5e9',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      animation: {
        'scanline': 'scanline 8s linear infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
