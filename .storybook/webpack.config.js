const path = require('path')

module.exports = ({ config }) => {
  config.module.rules[0].include = [
    path.resolve('./')
  ]
  // 不知道正则怎么写，用 function 代替
  config.module.rules[0].exclude = function (filepath) {
    if (filepath.includes('/node_modules/gm-util/')) {
      return false
    }

    return filepath.includes('/node_modules/')
  }

  return config
}
