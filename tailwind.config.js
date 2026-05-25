/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0a0a0a',
        darker: '#050505',
        neon: '#39ff14',
        'neon-dim': 'rgba(57, 255, 20, 0.2)',
        'neon-glow': 'rgba(57, 255, 20, 0.5)',
        danger: '#ff3333',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}
