const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const { HOST, PORT, BUILD_DIRECTORY } = require('../constants')

module.exports = () => {
  return merge(commonConfig(), {
    target: 'web',
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
      host: HOST,
      port: PORT,
      static: { directory: BUILD_DIRECTORY },
      historyApiFallback: true,
      client: {
        logging: 'info',
        overlay: false,
      },
      hot: true,
    },
  })
}
