const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

const loadImages = () => ({
  module: {
    rules: [
      {
        test: /\.(jpg|jpeg|png)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[contenthash][ext]',
        },
      },
      {
        test: /\.webp$/,
        type: 'asset',
        generator: {
          filename: 'images/[contenthash][ext]',
        },
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[contenthash][ext]',
        },
      },
    ],
  },
})

const processImages = () => ({
  plugins: [
    new ImageMinimizerPlugin({
      minimizer: [
        {
          implementation: ImageMinimizerPlugin.sharpMinify,
          filter: (source, sourcePath) => !/\.(svg)$/i.test(sourcePath),
          options: {
            encodeOptions: {
              jpeg: {
                quality: 90,
              },
              webp: {
                quality: 90,
              },
              png: {
                quality: 90,
              },
            },
          },
        },
        {
          implementation: ImageMinimizerPlugin.svgoMinify,
          options: {
            encodeOptions: {
              multipass: true,
              plugins: ['preset-default'],
            },
          },
        },
      ],
    }),
  ],
})

module.exports = { loadImages, processImages }
