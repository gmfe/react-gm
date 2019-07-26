import { observable, action } from 'mobx'

class Store {
  /**
   * DropdownNew组件包裹的内容的实际宽度，当该宽度长于下拉Menu的实际宽度时，用此宽度替代Menu的宽度
   * @type {number}
   * @private
   */
  @observable _width = 0

  @action
  setWidth(e) {
    this._width = e
  }

  get width() {
    return this._width
  }
}

export const store = new Store()
