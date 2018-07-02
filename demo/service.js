import createHistory from 'history/createHashHistory'
import { processHistory } from 'gm-util'

// 重写history的push replace方法
let history = processHistory(createHistory())

export {
  history
}
