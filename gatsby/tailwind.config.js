/** @format */

module.exports = {
  purge: {
    mode: 'all',
    content: ['src/**/*.{html,js,jsx,ts,tsx}'],
  },
  corePlugins: {
    container: false,
  },
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    fontFamily: {
      sans: [
        '"Brandon Text Web"',
        '-apple-system',
        'BlinkMacSystemFont',
        "'Segoe UI'",
        'Helvetica',
        'Arial',
        'sans-serif',
      ],
    },
    fontSize: {
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.75rem', // 28px
      '4xl': '2rem', // 32px
      '5xl': '2.5rem', // 40px
    },
    colors: {
      primary: '#5AB1BA',
      'light-primary': '#CDE7EA',
      secondary: '#FFD368',
      'light-secondary': '#FFF2D1',
      white: '#fff',
      black: '#000',
      'light-gray': '#edf2f7',
      gray: '#555',
      mediumGray: '#B0B8BA',
      error: '#ff0000',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    ripple: theme => ({
      colors: theme('colors'),
    }),
  },
  plugins: [
    require('tailwindcss-ripple')(),
    function({addComponents}) {
      addComponents({
        '.container': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          '@screen sm': {
            // background: 'blue',
            maxWidth: '640px',
          },
          '@screen md': {
            // background: 'green',
            maxWidth: '768px',
          },
          '@screen lg': {
            // background: 'yellow',
            maxWidth: '1024px',
          },
          '@screen xl': {
            // background: 'red',
            maxWidth: '1024px',
          },
        },
      })
    },
  ],
}
