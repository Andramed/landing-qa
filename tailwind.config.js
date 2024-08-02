/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      'md': '425px',
      'lg': '768px',
      'xl': '1024px',
      '2xl': '1440px'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'onest': ['Onest', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        pageColor: "rgb(197, 200, 203)"
      },
      borderRadius: {
        '70': '60px',
      }
    },
  },
  plugins: [],
};
