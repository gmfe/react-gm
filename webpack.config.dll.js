const webpack = require('webpack')
const webpackConfigDll = require('gm-webpack/webpack.config.dll.js')

const config = webpackConfigDll({
  publicPath: '/react-gm/build/',
  dll: [
    'react', 'react-dom', 'prop-types',
    'classnames',
    'react-router', 'react-router-dom',
    'history', 'query-string',
    'lodash', 'moment',
    'gm-util',
    'react-table'
  ]
})

module.exports = config
