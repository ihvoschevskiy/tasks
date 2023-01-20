const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const loadCss = () => {
  const cssConfig = {}
  const loaders = []

  if (process.env.NODE_ENV === 'production') {
    loaders.push({
      loader: MiniCssExtractPlugin.loader,
      options: { publicPath: '../' },
    })
    loaders.push(cssLoader())
    loaders.push(scssLoader())

    cssConfig.plugins = [
      new MiniCssExtractPlugin({
        filename: 'styles/[name].css',
      }),
    ]

    cssConfig.optimization = {
      minimizer: [new CssMinimizerPlugin()],
    }
  } else {
    loaders.push('style-loader')
    loaders.push(cssLoader({ sourceMap: true }))
    loaders.push(scssLoader({ sourceMap: true }))
  }
  cssConfig.module = {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: loaders,
      },
    ],
  }

  return cssConfig
}

const cssLoader = ({ sourceMap } = { sourceMap: false }) => {
  return {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: '[local]',
      },
      url: true,
      sourceMap,
    },
  }
}

const scssLoader = ({ sourceMap } = { sourceMap: false }) => {
  return {
    loader: 'sass-loader',
    options: {
      sassOptions: {
        sourceMap,
      },
    },
  }
}

module.exports = { loadCss }
