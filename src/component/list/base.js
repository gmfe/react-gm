import React from 'react'
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
  }

  componentDidUpdate() {
    if (this.props.isScrollTo) {
      this.doScrollToSelected('.will-active')
    }
  }

  handleSelect = item => {
    if (item.disabled) {
      return
    }
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
            <div className='gm-list-label'>{group.label}</div>
            {_.map(group.children, (v, index) => {
              sequenceDataIndex++
              return (
                <div
                  key={`${index}_${v.value}`}
                  {...getItemProps(v)}
                  className={classNames('gm-list-item', {
                    active: selected.includes(v.value),
                    'will-active': willActiveIndex === sequenceDataIndex,
                    disabled: v.disabled
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
  data: PropTypes.array.isRequired, // label, children: [{ value text, disabled}]
  selected: PropTypes.array.isRequired,
  onSelect: PropTypes.func, // 返回数组
  multiple: PropTypes.bool,
  isGroupList: PropTypes.bool, // 在这里仅仅表示数据的类型，对UI有影响而已

  /** 自定义 item，参数 item, index */
  renderItem: PropTypes.func,
  willActiveIndex: PropTypes.number,

  // 滚动
  isScrollTo: PropTypes.bool,

  /** 少用。给与更多 Item 的响应 */
  getItemProps: PropTypes.func,

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
