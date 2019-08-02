import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'
import Popover from '../popover'
import Selection from '../selection'
import List from '../list'

const findItemByValFromChildren = (children, val) => {
  children = React.Children.toArray(children)
  return _.find(children, el => el.props.value === val)
}

class Select extends React.Component {
  state = {
    willActiveIndex: 0
  }

  refPopup = React.createRef()

  refSelection = React.createRef()

  apiDoFocus = () => {
    this.refSelection.current.apiDoFocus()
  }

  apiDoSelectWillActive = () => {
    const { data, onChange } = this.props
    const { willActiveIndex } = this.state

    if (data[willActiveIndex]) {
      onChange(data[willActiveIndex].value)
    }
  }

  handleChange = value => {
    const { onChange } = this.props

    this.refPopup.current.apiDoSetActive(false)

    onChange(value)
  }

  handleKeyDown = event => {
    const { data, onKeyDown } = this.props
    let { willActiveIndex } = this.state

    if (!(event.key === 'ArrowUp' || event.key === 'ArrowDown')) {
      onKeyDown(event)
      return
    }

    // 没有数据，不用拦截
    if (data.length === 0) {
      onKeyDown(event)
      return
    }

    // 以下是需要拦截部分
    event.preventDefault()

    if (event.key === 'ArrowUp') {
      willActiveIndex--
    } else if (event.key === 'ArrowDown') {
      willActiveIndex++
    }

    // 修正
    if (willActiveIndex < 0) {
      willActiveIndex = data.length - 1
    } else if (willActiveIndex > data.length - 1) {
      willActiveIndex = 0
    }

    this.setState({
      willActiveIndex
    })
  }

  render() {
    const {
      data,
      value,
      onChange,
      children,
      disabled,
      listProps,
      canShowClose,
      clean,
      className,
      popoverType,
      isInPopup,
      ...rest
    } = this.props
    const { willActiveIndex } = this.state

    let selected
    let newData

    // 兼容之前的用法
    if (children) {
      const option = findItemByValFromChildren(children, value)
      if (option) {
        selected = {
          value: option.props.value,
          text: option.props.children
        }
      }

      newData = React.Children.map(children, child => ({
        value: child.props.value,
        text: child.props.children,
        disabled: child.props.disabled
      }))
    } else {
      newData = data
      selected = _.find(newData, v => v.value === value)
    }

    const listStyle = listProps ? listProps.style : {}

    const popup = (
      <List
        {...listProps}
        data={newData}
        selected={value}
        onSelect={this.handleChange}
        willActiveIndex={willActiveIndex}
        className={'gm-border-0'}
        style={{
          maxHeight: '250px',
          ...listStyle
        }}
      />
    )

    return (
      <Popover
        ref={this.refPopup}
        type={popoverType}
        popup={popup}
        disabled={disabled}
        isInPopup={isInPopup}
      >
        <Selection
          ref={this.refSelection}
          {...rest}
          selected={selected}
          onSelect={onChange}
          disabled={disabled}
          disabledClose={!canShowClose}
          clean={clean}
          className={classNames(`gm-select`, className)}
          isForSelect
          onKeyDown={this.handleKeyDown}
        />
      </Popover>
    )
  }
}

Select.displayName = 'Select'

Select.propTypes = {
  /** [{text, value, disabled}, {text, value}] */
  data: PropTypes.array.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  listProps: PropTypes.object,
  canShowClose: PropTypes.bool,
  clean: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  popoverType: PropTypes.oneOf(['focus', 'realFocus']),
  isInPopup: PropTypes.bool,
  style: PropTypes.object,
  onKeyDown: PropTypes.func
}

Select.defaultProps = {
  canShowClose: false,
  onKeyDown: _.noop
}

export default Select
