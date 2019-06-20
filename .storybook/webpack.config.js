module.exports = ({ config }) => {
  // 不知道正则怎么写，用 function 代替
  config.module.rules[0].exclude = function(filepath) {
    if (filepath.includes('/node_modules/gm-util/')) {
      return false
    }

    return filepath.includes('/node_modules/')
  }

  config.module.rules.push({
    test: /\.less$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader'
      },
      {
        loader: 'less-loader'
      }
    ]
  })

  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre'
  })

  return config
}
