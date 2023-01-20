const loadJs = () => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
    ],
  },
})

const loadTs = () => ({
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: { loader: 'ts-loader' },
      },
    ],
  },
})

module.exports = { loadJs, loadTs }
