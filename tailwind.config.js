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
        'ss': {'max': '399px'},       // 399以下
        'smMax695': {'max': '695px'}, // 695以下
        'smMax639': {'max': '639px'}, // 639以下
        'smMax552': {'max': '552px'}, // 552以下
        'smMax567': {'max': '567px'}, // 567以下
        'smMax453': {'max': '453px'}, // 453以下
        'smMax401': {'max': '401px'}, // 401以下
        'smMax351': {'max': '351px'}, // 351以下
        'smMin553': {'min': '553px'}, // 553以上
      },
      // fontFamily: {
      //   custom: ['Alumni Sans', '游ゴシック', 'Arial', 'sans-serif'],
      // },
    },
  },
  plugins: [],
};
