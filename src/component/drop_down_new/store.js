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
  @observable _DropdownNewWidth = 0

  @action
  setShowMenu(e) {
    this._showMenu = e
  }

  @action
  setDropdownNewWidth(e) {
    this._DropdownNewWidth = e
  }

  get showMenu() {
    return this._showMenu
  }

  get dropdownNewWidth() {
    return this._DropdownNewWidth
  }
}

export const store = new Store()
