const webpack = require('webpack')
const webpackConfig = require('gm-webpack/webpack.config.js')
const HappyPack = require('happypack')
const happyThreadPool = HappyPack.ThreadPool({size: 6})

const config = webpackConfig({
  publicPath: '/react-gm/build/',
  port: 3000,
  projectShortName: 'index',
  index: './demo/index.js',
  commons: [
    'gm-util',
    'gm-xfont/iconfont.css',
    'highlight.js/styles/default.css'
  ]
})

// 补 md
config.module.rules.push({
  test: /\.md/,
  loader: 'happypack/loader?id=md'
})

config.plugins.push(new HappyPack({
  id: 'md',
  threadPool: happyThreadPool,
  loaders: [{
    path: 'babel-loader',
    query: {
      cacheDirectory: true
    }
  }, 'markdown-it-react-loader']
}))

module.exports = config
