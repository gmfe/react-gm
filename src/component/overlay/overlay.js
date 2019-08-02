import React from 'react'
import ReactDOM from 'react-dom'

let overlayRef

export default {
  dom: undefined,
  create({ content, showMask }) {
    this.close()
    this.dom = document.createElement('div')
    showMask && this.dom.setAttribute('id', 'overlay-container')
    const JSXDom = render(content)
    ReactDOM.render(JSXDom, this.dom)
    document.body.appendChild(this.dom)
    return new Promise(resolve => resolve(overlayRef))
  },
  close() {
    this.dom && this.dom.remove()
  },
  update(content, style) {
    const JSXDom = render(content, style)
    ReactDOM.render(JSXDom, this.dom)
    document.body.appendChild(this.dom)
  }
}

function render(content, style) {
  return (
    <div>
      <div className='overlay' style={style} ref={ref => (overlayRef = ref)}>
        {content}
      </div>
    </div>
  )
}
