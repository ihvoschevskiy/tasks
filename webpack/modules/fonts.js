const loadFonts = () => ({
  module: {
    rules: [
      {
        test: /\.(woff|woff2|ttf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
    ],
  },
})

module.exports = { loadFonts }
