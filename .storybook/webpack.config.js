module.exports = ({ config }) => {
  // 写死，别喷
  // 不知道正则怎么写，用 function 代替
  config.module.rules[0].exclude = function(filepath) {
    if (
      filepath.includes('/node_modules/gm-util/') ||
      filepath.includes('/node_modules/gm-svg/')
    ) {
      return false
    }

    return filepath.includes('/node_modules/')
  }

  // 写死，别喷
  config.module.rules[3] = {
    test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
    loader:
      '/Users/liyatang/gm/react-gm/node_modules/@storybook/core/node_modules/file-loader/dist/cjs.js',
    query: { name: 'static/media/[name].[hash:8].[ext]' }
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
    test: /(iconfont)\.(woff|woff2|ttf|eot|svg)($|\?)/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: 'font/[name].[hash:8].[ext]'
        }
      }
    ]
  })

  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre'
  })

  config.module.rules.unshift({
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
          expandProps: 'start',
          svgProps: {
            fill: 'currentColor',
            className: "{'gm-svg-icon ' + (props.className || '')}"
          }
        }
      }
    ]
  })

  return config
}
