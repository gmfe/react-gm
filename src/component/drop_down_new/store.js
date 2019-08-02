import { observable, action } from 'mobx'

class Store {
  /**
   * menu的宽度
   * @type {number}
   * @private
   */
  @observable _dropdownNewWidth = 0

  @action
  setDropdownNewWidth(e) {
    this._dropdownNewWidth = e
  }

  get dropdownNewWidth() {
    return this._dropdownNewWidth
  }
}

export const store = new Store()
