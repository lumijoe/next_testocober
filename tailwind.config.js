/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        lineFlow: {
          '0%': {
            bottom: '100%',
            height: '0%',
          },
          '20%': {
            bottom: '0%',
            height: '100%',
          },
          '40%': {
            bottom: '0%',
            height: '0%',
          },
          '100%': {
            bottom: '0%',
            height: '0%',
          },
        }
      },
      animation: {
        lineFlow: 'lineFlow 8s infinite',
      },
      screens: {
        'ss': {'max': '399px'},
      },
    },
  },
  plugins: [],
};
