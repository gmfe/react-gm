import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classNames from 'classnames'

class Base extends React.Component {
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
        className={classNames('gm-list gm-list-group', className)}
      >
        {_.map(data, group => (
          <div key={group.label} className='gm-list-group-item'>
            <div className='gm-text-desc gm-list-label'>{group.label}</div>
            {_.map(group.children, v => (
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
        ))}
      </div>
    )
  }
}

Base.propTypes = {
  // 基本属性
  data: PropTypes.array.isRequired, // label, children: [{ value text}]
  selected: PropTypes.array.isRequired,
  onSelect: PropTypes.func, // 返回数组
  multiple: PropTypes.bool,

  // 展示
  renderItem: PropTypes.func,

  // 滚动
  isScrollTo: PropTypes.bool
}

Base.defaultProps = {
  multiple: false,
  onSelect: _.noop,
  renderItem: item => item.text
}

export default Base
