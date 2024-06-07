import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./node_modules/flowbite-react/**/*.js', './app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      // for colors
      colors: {
        // #111111 --> zinc-900
        firstColor: '#878787', // for grey for dark
        secondColor: '#C7C7C7', // for grey for light
        orangeColor: '#F48401',
        greenColor: '#1DBD6E',
        blueColor: '#3F71FF',
        // purpleColor: '#8768FA',
        purpleColor: '#8C66FB',
        purpleSecondColor: '#6B77E5',
      },
      fontFamily: {
        // roboto: ['Lemon', 'sans-serif'],
        //rubik: ['Rubik', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        light: '200',
        thin: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        strong: '800',
        black: '900',
      },
      pills: {
        base: '',
        active: {
          on: 'rounded-lg bg-green-200 text-white',
          off: 'rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white',
        },
      },
    },

    plugins: [require('@tailwindcss/typography'), require('flowbite/plugin')],
    darkMode: 'class',
  },
};
export default config;
