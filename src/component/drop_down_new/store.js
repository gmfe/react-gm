import { observable, action } from 'mobx'

class Store {
  /**
   * DropdownNew包裹的children
   * @type {element}
   * @private
   */
  @observable _ref = null

  @action
  setRef(e) {
    this._ref = e
  }

  get ref() {
    return this._ref
  }
}

export const store = new Store()
