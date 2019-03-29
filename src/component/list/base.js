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

  handleSelect = (item) => {
    const { multiple, selected, onSelect } = this.props
    if (multiple) {
      onSelect(_.xor(selected, [item.value]))
    } else {
      onSelect([item.value])
    }
  }

  render () {
    const {
      data, isGroupList,
      selected, multiple, onSelect, isScrollTo, // eslint-disable-line
      renderItem,
      className,
      ...rest
    } = this.props

    return (
      <div
        {...rest}
        className={classNames('gm-list', {
          'gm-list-group': isGroupList
        }, className)}
      >
        {_.map(data, group => (
          <div key={group.label} className='gm-list-group-item'>
            <div className='gm-text-desc gm-list-label'>{group.label}</div>
            {_.map(group.children, v => (
              <div
                key={v.value}
                className={classNames('gm-list-item', {
                  active: selected.includes(v.value)
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
  isScrollTo: PropTypes.bool,

  isGroupList: PropTypes.bool // 在这里仅仅表示数据的类型，对UI有影响而已
}

Base.defaultProps = {
  multiple: false,
  onSelect: _.noop,
  renderItem: item => item.text
}

export default Base
