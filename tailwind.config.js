module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/**/*.html',
    ],
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ede3d8',
          DEFAULT: '#e1cebc',
          dark: '#ddbea9',
        },
      },
    },
  }
}
