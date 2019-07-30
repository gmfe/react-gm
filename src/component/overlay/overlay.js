import React from 'react'
import ReactDOM from 'react-dom'

export default {
  dom: undefined,
  create({ content, style }) {
    this.close()
    this.dom = document.createElement('div')
    this.dom.setAttribute('id', 'overlay-container')
    const JSXDom = (
      <div>
        <div className='overlay' style={style}>
          {content}
        </div>
      </div>
    )
    ReactDOM.render(JSXDom, this.dom)
    document.body.appendChild(this.dom)
  },
  close() {
    this.dom && this.dom.remove()
  }
}
