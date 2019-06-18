import React from 'react'
import PropTypes from 'prop-types'
import { is } from 'gm-util'

class Dropper extends React.Component {
  handleDrop = e => {
    e.preventDefault()

    const { multiple, onDrop } = this.props

    const droppedFiles = e.dataTransfer ? e.dataTransfer.files : e.target.files
    const max = multiple ? droppedFiles.length : 1
    const files = []

    for (let i = 0; i < max; i++) {
      const file = droppedFiles[i]
      file.preview = window.URL.createObjectURL(file)
      files.push(file)
    }
    onDrop(files, e)
  }

  handleClick = () => {
    this.refInput.value = null
    this.refInput.click()
  }

  render() {
    const { className, children, accept, multiple } = this.props
    const cn = className || 'gm-dropper-default'

    return (
      <div className='gm-dropper'>
        <div className={cn} onClick={this.handleClick} onDrop={this.handleDrop}>
          {children}
        </div>
        <input
          type='file'
          ref={ref => (this.refInput = ref)}
          className='gm-dropper-input'
          multiple={!is.weixin() && multiple}
          accept={accept}
          onChange={this.handleDrop}
        />
      </div>
    )
  }
}

Dropper.defaultProps = {
  multiple: false
}

Dropper.propTypes = {
  multiple: PropTypes.bool,
  onDrop: PropTypes.func.isRequired,
  accept: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string
}
// TODO 重构
export default Dropper
