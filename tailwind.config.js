/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sp': '500px',
        '3xl': '2050px',
        'mf': '950px',
        'mp': '980px',
        'mc': '900px',
        'mk': '850px',
        'mq': '800px',
        'mh': '700px',
        'sh': '600px',
        'sd': '550px',
        'sa': '450px',
        'sk': '390px',
        'sc': '360px',
        'sr': '340px',
        'sb': '300px',
      },
      boxShadow: {
        'custom-md': '2px 1px 12px rgba(0 0 0 / 0.1)',
        'custom-sm': '0px 5px 12px rgba(0 0 0 / 0.1)',
        'custom-sp': '0px 1px 5px rgba(0 0 0 / 0.1)',
        'custom-input': '0px 1px 5px #1018280D',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          /* Chrome, Safari and Opera */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* Firefox */
          'scrollbar-width': 'none',
          /* IE 10+ */
          '-ms-overflow-style': 'none',
        },
      });
    },
  ],
}