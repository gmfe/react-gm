import { observable, action } from 'mobx'

class Store {
  /**
   * 是否显示menu
   * @type {boolean}
   * @private
   */
  @observable _showMenu = false

  /**
   * menu的宽度
   * @type {number}
   * @private
   */
  @observable _menuWidth = 0

  @action
  setShowMenu(e) {
    this._showMenu = e
  }

  @action
  setMenuWidth(e) {
    this._menuWidth = e
  }

  get showMenu() {
    return this._showMenu
  }

  get menuWidth() {
    return this._menuWidth
  }
}

export const store = new Store()
