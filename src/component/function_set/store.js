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
