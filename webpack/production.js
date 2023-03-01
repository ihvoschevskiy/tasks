const webpack = require('webpack')
const prodConfig = require('./config/webpack.prod')
const log = require('./services/logger')

async function run() {
  const compiler = webpack(prodConfig())
  compiler.run((err, stats) => {
    if (err) {
      log.error(err.stack || err)

      if (err.details) {
        log.error(err.details)
      }

      return null
    }

    const info = stats.toString({
      hash: false,
      colors: true,
      env: false,
      modules: false,
      entrypoints: false,
      children: true,
      warnings: false,
      errors: true,
      errorDetails: false,
      errorStack: false,
      logging: 'error' | 'warn',
      logginTrace: false,
    })

    log.info(`\n${info}`)
  })
}

run()
