const { path: PROJECT_ROOT } = require('app-root-path')
const { join, resolve } = require('path')

exports.BUILD_DIRECTORY = join(PROJECT_ROOT, './build')
exports.SOURCE_DIRECTORY = join(PROJECT_ROOT, './src')

exports.ASSETS = resolve(PROJECT_ROOT, './src/assets')
exports.BLOCKS = resolve(PROJECT_ROOT, './src/blocks')
exports.COMMON = resolve(PROJECT_ROOT, './src/common')
exports.COMPONENTS = resolve(PROJECT_ROOT, './src/components')
exports.PAGES = resolve(PROJECT_ROOT, './src/pages')

exports.HOST = 'localhost'
exports.PORT = '3000'
