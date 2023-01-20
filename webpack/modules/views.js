const HtmlWebpackPlugin = require('html-webpack-plugin')
const { join } = require('path')
const { COMMON } = require('../constants')

const setupHtml = () => ({
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: join(COMMON, 'views', 'index.html'),
      publicPath: './',
    }),
  ],
})

module.exports = { setupHtml }
