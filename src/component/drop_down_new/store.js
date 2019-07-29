import { observable, action } from 'mobx'

class Store {
  /**
   * 是否显示menu
   * @type {boolean}
   * @private
   */
  @observable _showMenu = false

  @action
  setShowMenu(e) {
    this._showMenu = e
  }

  get showMenu() {
    return this._showMenu
  }
}

export const store = new Store()
