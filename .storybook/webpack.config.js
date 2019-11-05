const path = require('path')

module.exports = ({ config }) => {
  // 不知道正则怎么写，用 function 代替
  const rulesOne = {
    test: /\.(mjs|jsx?)$/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          cacheDirectory: './node_modules/.cache/storybook',
          babelrc: false,
          plugins: [
            [
              path.resolve('./.storybook/babel-plugin-react-docgen/index.js'),
              { DOC_GEN_COLLECTION_NAME: 'STORYBOOK_REACT_CLASSES' }
            ]
          ]
        }
      }
    ],
    include: [path.resolve('./')],
    exclude: function(filepath) {
      if (filepath.includes('/node_modules/gm-util/')) {
        return false
      }

      return filepath.includes('/node_modules/')
    }
  }

  config.module.rules[0] = rulesOne

  config.module.rules[3] = {
    test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
    loader:
      './node_modules/@storybook/core/node_modules/file-loader/dist/cjs.js',
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
