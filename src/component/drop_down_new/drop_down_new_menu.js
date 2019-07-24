import React, { Component, createRef } from 'react'
import { store } from './store'
import { observer } from 'mobx-react'
import _ from 'lodash'

@observer
class DropDownNewMenu extends Component {
  constructor(props) {
    super(props)
    this.currentRef = createRef()
    this.state = {
      style: {},
      triangleStyle: {}
    }
  }

  componentDidMount() {
    // 需要等待模版加载完成才能获取offsetWidth
    setTimeout(() => {
      const { dropdownNewWidth, placement } = store
      const {
        current: { offsetWidth }
      } = this.currentRef
      const [vertical, horizontal] = _.kebabCase(placement).split('-')
      const style = {
        [`${dropdownNewWidth > offsetWidth && 'width'}`]: `${dropdownNewWidth >
          offsetWidth && dropdownNewWidth}px`,
        boxShadow: `${
          vertical === 'top'
            ? '0 -2px 8px rgba(0, 0, 0, 0.15)'
            : '0 2px 8px rgba(0, 0, 0, 0.15)'
        }`
      }
      const triangleStyle = {
        [`${vertical === 'top' ? 'bottom' : 'top'}`]: '-3px',
        [`${horizontal === 'right' ? 'right' : 'left'}`]: `${
          horizontal === 'center' ? `${(offsetWidth - 9) / 2}px` : '10px'
        }`,
        boxShadow: `${
          vertical === 'top'
            ? '0 2px 8px rgba(0, 0, 0, 0.15)'
            : '0 -2px 8px rgba(0, 0, 0, 0.15)'
        }`
      }
      this.setState({ style, triangleStyle })
    })
  }

  render() {
    const { children } = this.props
    const { style, triangleStyle } = this.state
    return (
      <div className='dropdown-new-menu-container'>
        <div className='dropdown-new-menu-triangle' style={triangleStyle} />
        <ul style={style} ref={this.currentRef} className='dropdown-new-menu'>
          {children}
        </ul>
      </div>
    )
  }
}

export default DropDownNewMenu
