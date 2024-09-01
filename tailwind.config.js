/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        black: '#000',
        sienna: '#6e313b',
        'main-para': 'rgba(0, 0, 0, 0.41)',
        bg: 'rgba(0, 122, 255, 0.15)',
        title: '#1c82ad',
        darkslategray: {
          100: '#333',
          200: 'rgba(49, 54, 63, 0.68)',
        },
        gainsboro: '#e6e6e6',
        royalblue: '#007fff',
      },
      spacing: {
        50: '50px',
        100: '100px', // Adding custom spacing value
      },
      fontFamily: {
        inter: 'Inter',
        inherit: 'inherit',
        mainpara: "'Lexend Exa'",
        title: 'Mulish',
      },
      borderRadius: {
        '281xl': '300px',
      },
    },
    fontSize: {
      '10xl': '29px',
      '19xl': '38px',
      lg: '18px',
      '21xl': '40px',
      '5xl': '24px',
      '13xl': '32px',
      '45xl': '64px',
      '32xl': '51px',
      xl: '20px',
      inherit: 'inherit',
    },
    screens: {
      lg: {
        max: '1200px',
      },
      mq1050: {
        raw: 'screen and (max-width: 1050px)',
      },
      mq750: {
        raw: 'screen and (max-width: 750px)',
      },
      mq450: {
        raw: 'screen and (max-width: 450px)',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
