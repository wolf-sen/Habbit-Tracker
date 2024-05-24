/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SF Pro Display"],
        soft: ["SF Pro Rounded"],
        body: ["SF Pro Text"],
        mono: ["SF Mono"],
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'card': '0.75rem',
        'button': '9999px',
        'input': '0.375rem',        
        'full': '9999px',
        'large': '12px',
      },
      padding: {
        'card': '0.75rem',
      }
    },
  },
  plugins: [],
};
