import React from 'react'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classNames from 'classnames'

// 不要轻易改这个文件

class Base extends React.Component {
  refList = React.createRef()

  _isUnMounted = false

  doScrollToSelected = selector => {
    // 找第一个即可
    if (!this._isUnMounted) {
      const $active = this.refList.current.querySelector(selector)
      if ($active) {
        $active.scrollIntoViewIfNeeded()
      }
    }
  }

  componentWillUnmount() {
    this._isUnMounted = true
  }

  componentDidMount() {
    if (this.props.isScrollTo) {
      this.doScrollToSelected('.active')
      // will-active more prefer
      this.doScrollToSelected('.will-active')
    }
    if (this.props.isAllInTheView) {
      const dom = findDOMNode(this.refList.current)
      dom && dom.scrollIntoViewIfNeeded()
    }
  }

  // TODO 不合理
  componentDidUpdate() {
    if (this.props.isScrollTo) {
      this.doScrollToSelected('.will-active')
    }
  }

  handleSelect = item => {
    const { multiple, selected, onSelect } = this.props
    if (multiple) {
      onSelect(_.xor(selected, [item.value]))
    } else {
      onSelect([item.value])
    }
  }

  render() {
    const {
      data,
      isGroupList,
      selected,
      multiple,
      onSelect,
      isScrollTo, // eslint-disable-line
      renderItem,
      className,
      willActiveIndex,
      getItemProps,
      ...rest
    } = this.props

    let sequenceDataIndex = -1

    return (
      <div
        {...rest}
        ref={this.refList}
        className={classNames(
          'gm-list',
          {
            'gm-list-group': isGroupList
          },
          className
        )}
      >
        {_.map(data, (group, gIndex) => (
          <div key={gIndex + group.label} className='gm-list-group-item'>
            <div className='gm-text-desc gm-list-label'>{group.label}</div>
            {_.map(group.children, (v, index) => {
              sequenceDataIndex++
              return (
                <div
                  key={`${index}_${v.value}`}
                  {...getItemProps(v)}
                  className={classNames('gm-list-item', {
                    active: selected.includes(v.value),
                    'will-active': willActiveIndex === sequenceDataIndex
                  })}
                  onClick={this.handleSelect.bind(this, v)}
                >
                  {renderItem(v, index)}
                </div>
              )
            })}
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

  // 事件
  getItemProps: PropTypes.func,

  // 展示
  renderItem: PropTypes.func,
  willActiveIndex: PropTypes.number,

  // 滚动
  isScrollTo: PropTypes.bool,
  isAllInTheView: PropTypes.bool,

  isGroupList: PropTypes.bool, // 在这里仅仅表示数据的类型，对UI有影响而已
  className: PropTypes.string,
  style: PropTypes.object
}

// 有直接调用 Base 的地方，估需要 defaultProps
Base.defaultProps = {
  multiple: false,
  onSelect: _.noop,
  renderItem: item => item.text,
  getItemProps: () => ({})
}

export default Base
