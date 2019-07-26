import { observable, action } from 'mobx'

class Store {
  @observable width = 0

  @action
  setWidth(e) {
    this.width = e
  }
}

export const store = new Store()
