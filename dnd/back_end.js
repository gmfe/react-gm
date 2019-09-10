class BackEnd {
  constructor(manager) {
    this.action = manager.getAction()
    this.monitor = manager.getMonitor()
  }

  setup() {}

  addEvents() {}

  handleTopDragStart() {}

  handleDragStart() {}

  handleDragOver() {}

  handleDragEnd() {}
}

export default BackEnd
