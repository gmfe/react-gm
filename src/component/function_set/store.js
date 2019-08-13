// TODO 不能依赖 任何数据流
// 而且也只能单个用
import { action, observable } from 'mobx'

class Store {
  @observable _popover = null

  @action setPopover(e) {
    this._popover = e
  }

  get popover() {
    return this._popover
  }
}

export const store = new Store()
