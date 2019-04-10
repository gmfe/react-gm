import { createHashHistory } from 'history'
import { processHistory } from 'gm-util'

// 重写history的push replace方法
let history = processHistory(createHashHistory())

export {
  history
}
