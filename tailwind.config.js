/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#22d3ee', // cyan-400
          500: '#06b6d4', // cyan-500
          600: '#0891b2', // cyan-600
          DEFAULT: '#0f172a', // Slate 900 (original primary)
        },
        secondary: {
          400: '#a78bfa', // violet-400
          500: '#8b5cf6', // violet-500
          DEFAULT: '#334155', // Slate 700 (original secondary)
        },
        accent: '#38bdf8', // Sky 400
        slate: {
          850: '#151e32',
          950: '#020617', // Ensure this exists (it is in newer tailwind but good to be explicit for our theme)
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
