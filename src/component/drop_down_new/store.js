import { observable, action } from 'mobx'

class Store {
  /**
   * 是否显示menu
   * @type {boolean}
   * @private
   */
  @observable _showMenu = false

  /**
   * 设置menu
   * @param e
   */
  @action
  setShowMenu(e) {
    this._showMenu = e
  }

  /**
   * 获取是否显示menu
   * @returns {boolean}
   */
  get showMenu() {
    return this._showMenu
  }
}

export const store = new Store()
