const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const utils = require('../modules/utils')

module.exports = () => {
  return merge(
    commonConfig(),
    {
      mode: 'production',
      devtool: false,
    },
    utils.connectToProgressIndicator(),
  )
}
