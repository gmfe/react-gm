import { observable, action } from 'mobx'

class Store {
  /**
   * menu的宽度
   * @type {number}
   * @private
   */
  @observable _dropdownNewWidth = 0

  /**
   * placement
   * @type {string}
   * @private
   */
  @observable _placement = 'bottomLeft'

  @action
  setDropdownNewWidth(e) {
    this._dropdownNewWidth = e
  }

  get dropdownNewWidth() {
    return this._dropdownNewWidth
  }

  @action
  setPlacement(e) {
    this._placement = e
  }

  get placement() {
    return this._placement
  }
}

export const store = new Store()
