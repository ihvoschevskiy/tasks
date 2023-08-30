const { HotModuleReplacementPlugin } = require('webpack')
const Dotenv = require('dotenv-webpack')
const WebpackBar = require('webpackbar')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const ESLintPlugin = require('eslint-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')

const esLint = () => ({
  plugins: [
    new ESLintPlugin({
      files: '{**/*,*}.{tsx,ts,js}',
    }),
  ],
})

const styleLint = () => ({
  plugins: [
    new StyleLintPlugin({
      files: '{**/*,*}.scss',
    }),
  ],
})

const connectToHMR = () => ({
  plugins: [new HotModuleReplacementPlugin()],
})

const connectToProgressIndicator = () => ({
  plugins: [new WebpackBar({})],
})

const connectToBundleAnalyzer = () => ({
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      openAnalyzer: false,
      generateStatsFile: true,
    }),
  ],
})

const useDotenv = () => ({
  plugins: [new Dotenv()],
})

module.exports = {
  esLint,
  styleLint,
  connectToHMR,
  connectToProgressIndicator,
  connectToBundleAnalyzer,
  useDotenv,
}
