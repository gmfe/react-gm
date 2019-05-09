import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class EditableText extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      editable: false,
      value: this.props.content
    }
  }

  handleInputChange = e => {
    const value = e.target.value
    this.setState({
      value
    })
  }

  handleEdit = () => {
    if (!this.props.disabled) {
      this.setState({
        editable: true
      })
    }
  }

  handleOkClick = () => {
    const { onOk } = this.props
    onOk && onOk(this.state.value)
    this.setState({
      editable: false
    })
  }

  handleCancelClick = () => {
    const { onCancel } = this.props
    onCancel && onCancel()
    this.setState({
      editable: false
    })
  }

  handleInputBlur = () => {
    // 延迟 onBlur 来处理与 onClick 事件的冲突
    setTimeout(this.handleCancelClick, 300)
  }

  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.handleOkClick()
    }
  }

  render () {
    const { content, className, disabled, children } = this.props
    const { editable } = this.state
    return editable ? (
      <div className={classNames('gm-editable-text-input-wrap', className)}>
        <input
          className='form-control input-sm'
          autoFocus
          defaultValue={content}
          onBlur={this.handleInputBlur}
          onChange={this.handleInputChange}
          onKeyUp={this.handleKeyUp}
        />
        <div className='gm-gap-5'/>
        <i className='xfont xfont-ok gm-cursor gm-editable-text-xfont-ok' onClick={this.handleOkClick}/>
        <div className='gm-gap-5'/>
        <i className='xfont xfont-remove gm-cursor gm-editable-text-xfont-cancel' onClick={this.handleCancelClick}/>
      </div>
    ) : (
      <div
        className={classNames('gm-editable-text', className)}
      >
        <span onClick={this.handleEdit}>{children || content || '-'}</span>
        {!disabled && <i
          className='xfont xfont-edit gm-margin-left-5 gm-cursor gm-editable-text-edit-pen'
          onClick={this.handleEdit}/>}
      </div>
    )
  }
}

EditableText.propTypes = {
  content: PropTypes.string.isRequired, // 组件显示的内容
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string
}

export default EditableText
