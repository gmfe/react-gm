import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classNames from 'classnames'

class List extends React.Component {
  refList = React.createRef()
  _isMounted = false

  doScrollToSelected = () => {
    // 找第一个即可
    if (!this._isMounted) {
      const $active = this.refList.current.querySelector('.active')
      if ($active) {
        $active.scrollIntoViewIfNeeded()
      }
    }
  }

  componentWillUnmount () {
    this._isMounted = true
  }

  componentDidMount () {
    if (this.props.isScrollTo) {
      this.doScrollToSelected()
    }
  }

  isActive = (value) => {
    const { multiple, selected } = this.props
    if (multiple) {
      return selected.includes(value)
    } else {
      return selected === value
    }
  }

  handleSelect = (item) => {
    const { multiple, selected, onSelect } = this.props
    if (multiple) {
      onSelect(_.xor(selected, [item.value]))
    } else {
      onSelect(item.value)
    }
  }

  render () {
    const {
      data,
      selected, multiple, onSelect, isScrollTo, // eslint-disable-line
      renderItem,
      className,
      ...rest
    } = this.props

    return (
      <div
        {...rest}
        className={classNames('gm-list', className)}
        ref={this.refList}
      >
        {_.map(data, v => (
          <div
            key={v.value}
            className={classNames('gm-list-item', {
              active: this.isActive(v.value)
            })}
            onClick={this.handleSelect.bind(this, v)}
          >
            {renderItem(v)}
          </div>
        ))}
      </div>
    )
  }
}

List.propTypes = {
  // 基本属性
  data: PropTypes.array.isRequired, // value text
  selected: PropTypes.any,
  onSelect: PropTypes.func,
  multiple: PropTypes.bool, // true，则 selected 是数组

  // 展示
  renderItem: PropTypes.func,

  // 滚动
  isScrollTo: PropTypes.bool
}

List.defaultProps = {
  multiple: false,
  onSelect: _.noop,
  renderItem: item => item.text
}

export default List
