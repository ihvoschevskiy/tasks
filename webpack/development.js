const webpack = require('webpack')
const DevServer = require('webpack-dev-server')
const devConfig = require('./config/webpack.dev')()

const compiler = webpack(devConfig)
const options = { ...devConfig.devServer, open: true }

const server = new DevServer(options, compiler)

async function run() {
  await server.start()
}

run()
