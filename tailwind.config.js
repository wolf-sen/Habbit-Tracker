/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['SF Pro Display'],
        soft: ['SF Pro Rounded'],
        body: ['SF Pro Text'],
        mono: ['SF Mono']
      },
    },
  },
  plugins: [],
}

