const { resolve } = require('path')
const CONSTANTS = require('../constants')
const { merge } = require('webpack-merge')
const { setupHtml } = require('../modules/views')
const { loadCss } = require('../modules/styles')
const { loadFonts } = require('../modules/fonts')
const { loadTs } = require('../modules/scripts')
const { loadImages, processImages } = require('../modules/images')
const { esLint, styleLint, useDotenv } = require('../modules/utils')

module.exports = () => {
  return merge(
    {
      entry: {
        index: resolve(CONSTANTS.SOURCE_DIRECTORY, 'index.tsx'),
      },
      output: {
        path: CONSTANTS.BUILD_DIRECTORY,
        filename: 'scripts/bundle.[contenthash].js',
        publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
        clean: true,
      },
      resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          fonts: resolve(CONSTANTS.ASSETS, 'fonts'),
          images: resolve(CONSTANTS.ASSETS, 'images'),
          blocks: CONSTANTS.BLOCKS,
          common: CONSTANTS.COMMON,
          components: CONSTANTS.COMPONENTS,
          pages: CONSTANTS.PAGES,
        },
      },
    },
    loadFonts(),
    loadImages(),
    processImages(),
    loadTs(),
    setupHtml(),
    loadCss(),
    esLint(),
    styleLint(),
    useDotenv(),
  )
}
