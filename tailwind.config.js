/** @type {import('tailwindcss').Config} */

const flattenColorPalette =
  require('tailwindcss/lib/util/flattenColorPalette').default; /* eslint-disable-line */

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/**/*.{js,jsx,ts,tsx}', './App.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'night-300': '#202124',
        'night-400': '#303134',
        'night-500': '#444242',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-unused-vars
    ({ addUtilities, theme, variants }) => {
      const colors = flattenColorPalette(theme('borderColor'));
      delete colors.default;

      const colorMap = Object.keys(colors).map((color) => ({
        [`.border-t-${color}`]: { borderTopColor: colors[color] },
        [`.border-r-${color}`]: { borderRightColor: colors[color] },
        [`.border-b-${color}`]: { borderBottomColor: colors[color] },
        [`.border-l-${color}`]: { borderLeftColor: colors[color] },
      }));
      const utilities = Object.assign({}, ...colorMap);

      addUtilities(utilities, variants('borderColor'));
    },
  ],
};
