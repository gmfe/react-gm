import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classNames from 'classnames'
import Popover from '../popover'
import Flex from '../flex'
import ListBase from '../list/base'
import Loading from '../loading'
import { pinYinFilter } from 'gm-util'

// 不要轻易改这个文件

class Base extends React.Component {
  constructor(props) {
    super(props)

    this.ref = React.createRef()

    this.state = {
      searchValue: '',
      loading: false,
      willActiveIndex: null
    }

    this._isUnMounted = false
    this._popRef = null
    this.debounceDoSearch = _.debounce(this.doSearch, props.delay)
  }

  componentWillUnmount() {
    this._isUnMounted = true
  }

  /**
   * 获取扁平化的数组
   *
   * @memberof Base
   */
  sequencedData = () => {
    return !this.props.isGroupList
      ? this.props.data
      : this.props.data.reduce((a, b) => a.concat(b.children), [])
  }

  onInputKeyUp = e => {
    if (this.props.onInputKeyUp) {
      this.props.onInputKeyUp(e)
    }
  }

  handleKeyDown = e => {
    const { selected, multiple } = this.props

    const sequencedData = this.sequencedData()
    if (!sequencedData.length) {
      return
    }
    let willActiveIndex = this.state.willActiveIndex

    switch (e.key) {
      case 'ArrowDown': {
        if (willActiveIndex === null) {
          willActiveIndex = -1
        }
        willActiveIndex++
        break
      }
      case 'ArrowUp': {
        if (willActiveIndex === null) {
          willActiveIndex = sequencedData.length
        }
        willActiveIndex--
        break
      }
      case 'Enter': {
        if (willActiveIndex === null) {
          return
        }
        const currentActiveItem = sequencedData[willActiveIndex]
        if (currentActiveItem !== undefined) {
          if (!multiple) {
            this.doSelect([currentActiveItem])
          } else {
            this.handleSelected(selected.map(s => s.value), [
              currentActiveItem.value
            ])
            willActiveIndex++
          }
        }
        break
      }
      case 'Tab': {
        e.preventDefault()
        break
      }
    }

    const fixWillActiveIndex = () => {
      if (willActiveIndex < 0) {
        willActiveIndex = sequencedData.length - 1
      }
      if (willActiveIndex >= sequencedData.length) {
        willActiveIndex = 0
      }
      return willActiveIndex
    }

    this.setState({
      willActiveIndex: fixWillActiveIndex()
    })
  }

  handleClear = clearItem => {
    const { onSelect, selected } = this.props

    const willSelected = _.filter(
      selected,
      item => item.value !== clearItem.value
    )

    onSelect(willSelected)

    this.setState({ willActiveIndex: null })
  }

  handleChange = e => {
    const searchValue = e.target.value

    this.setState({
      searchValue
    })

    this.debounceDoSearch(searchValue)
  }

  handleSelected = values => {
    const { data } = this.props
    const items = []
    _.each(data, group => {
      _.each(group.children, item => {
        if (values.includes(item.value)) {
          items.push(item)
        }
      })
    })
    this.doSelect(items)
  }

  doSelect = selected => {
    const { onSelect, multiple } = this.props
    onSelect(selected)
    this.setState({ searchValue: '' }, () => {
      if (!multiple) {
        // 单选选后关闭
        if (this._popRef) {
          this._popRef.close()
        }
      }
    })
  }

  doSearch = query => {
    const { onSearch, data } = this.props

    if (!this._isUnMounted && onSearch) {
      const result = onSearch(query, data)

      if (!result) {
        return
      }

      this.setState({
        loading: true
      })

      Promise.resolve(result)
        .then(() => {
          if (!this._isUnMounted) {
            this.setState({
              loading: false
            })
          }
        })
        .catch(() => {
          if (!this._isUnMounted) {
            this.setState({
              isLoading: false
            })
          }
        })
    }
  }

  renderList = () => {
    const {
      data,
      multiple,
      selected,
      isGroupList,
      onInputKeyUp,
      onInputFocus,
      onInputKeyDown,
      listMaxHeight,
      renderListItem,
      disabledSearch,
      renderListFilter,
      searchPlaceholder,
      renderListFilterType
    } = this.props

    const { loading, searchValue, willActiveIndex } = this.state

    let filterData = data

    // 节省过滤时间
    if (renderListFilter) {
      filterData = renderListFilter(data, searchValue)
    } else if (renderListFilterType === 'pinyin') {
      filterData = renderListFilterPinYin(data, searchValue)
    } else {
      filterData = renderListFilterDefault(data, searchValue)
    }

    return (
      <div className='gm-more-select-popup' onKeyDown={this.handleKeyDown}>
        {!disabledSearch && (
          <div className='gm-more-select-popup-input'>
            <input
              autoFocus
              type='text'
              value={searchValue}
              className='form-control'
              onChange={this.handleChange}
              placeholder={searchPlaceholder}
              onFocus={e => {
                onInputFocus && onInputFocus(e)
              }}
              onKeyUp={e => {
                onInputKeyUp && onInputKeyUp(e)
              }}
              onKeyDown={e => {
                onInputKeyDown && onInputKeyDown(e)
              }}
            />
          </div>
        )}
        {loading && (
          <Flex alignCenter justifyCenter className='gm-bg gm-padding-5'>
            <Loading size={20} />
          </Flex>
        )}
        {!loading && (
          <ListBase
            data={filterData}
            selected={_.map(selected, v => v.value)}
            multiple={multiple}
            isGroupList={isGroupList}
            className='gm-border-0'
            renderItem={renderListItem}
            onSelect={this.handleSelected}
            isScrollTo
            willActiveIndex={willActiveIndex}
            style={{
              maxHeight: listMaxHeight
            }}
          />
        )}
      </div>
    )
  }

  render() {
    const {
      popRef,
      disabled,
      selected,
      multiple,
      children,
      showArrow,
      placeholder,
      popoverType,
      renderSelected,
      className,
      style,
      popoverClassName
    } = this.props

    return (
      <div
        ref={this.ref}
        className={classNames(
          'gm-more-select',
          {
            'gm-more-select-disabled': disabled,
            'gm-more-select-multiple': multiple
          },
          className
        )}
        style={style}
      >
        <Popover
          animName
          showArrow={showArrow}
          type={popoverType}
          disabled={disabled}
          popup={this.renderList()}
          className={classNames(popoverClassName)}
          popRef={pop => {
            this._popRef = pop
            if (popRef) {
              popRef({
                ...pop,
                show: () => {
                  // popup弹出框renderList处于memorized状态，内部渲染没更新
                  this.setState({ searchValue: '', willActiveIndex: null })
                  pop.show()
                }
              })
            }
          }}
        >
          {children || (
            <Flex wrap className='gm-more-select-selected'>
              {selected.length !== 0 ? (
                _.map(selected, item => (
                  <Flex
                    key={item.value}
                    className='gm-more-select-selected-item'
                  >
                    <Flex flex column>
                      {renderSelected(item)}
                    </Flex>
                    <i
                      onClick={
                        disabled ? _.noop : this.handleClear.bind(this, item)
                      }
                      className={classNames(
                        'xfont  gm-cursor gm-more-select-clear-btn',
                        {
                          'xfont-close-circle': !multiple,
                          'xfont-remove': multiple
                        }
                      )}
                    />
                  </Flex>
                ))
              ) : (
                <div className='gm-text-desc'>{placeholder}</div>
              )}
            </Flex>
          )}
        </Popover>
      </div>
    )
  }
}

function renderListFilterDefault(data, query) {
  const result = []
  _.each(data, v => {
    const arr = _.filter(v.children, item => item.text.includes(query))
    if (arr.length) {
      result.push({
        ...v,
        children: arr
      })
    }
  })

  return result
}

function renderListFilterPinYin(data, query) {
  const result = []
  _.each(data, v => {
    const arr = pinYinFilter(v.children, query, item => item.text)
    if (arr.length) {
      result.push({
        ...v,
        children: arr
      })
    }
  })

  return result
}

Base.renderListFilterDefault = renderListFilterDefault
Base.renderListFilterPinYin = renderListFilterPinYin

Base.propTypes = {
  // 基本属性
  data: PropTypes.array.isRequired, // label, children: [{value, text}]
  selected: PropTypes.array.isRequired, // item 数组。 非 value，也非引用，原因是想解耦 selected 和 data 的关系。这样当
  onSelect: PropTypes.func.isRequired, // 返回 item 数组
  multiple: PropTypes.bool,

  // 状态
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,

  // 列表 搜索
  onSearch: PropTypes.func, // searchValue, data
  delay: PropTypes.number,
  searchPlaceholder: PropTypes.string,
  disabledSearch: PropTypes.bool, // 不需要搜索
  renderListFilter: PropTypes.func, // 过滤，提供 searchValue 和 data
  renderListFilterType: PropTypes.oneOf(['default', 'pinyin']), // 也可简单指定 默认的过滤类型

  // 展示
  renderSelected: PropTypes.func, // 定制已选的区域，提供 selected
  renderListItem: PropTypes.func, // 定制列表

  // 样式
  listMaxHeight: PropTypes.string,

  // isGroupList
  isGroupList: PropTypes.bool,

  popoverType: PropTypes.oneOf(['click', 'focus', 'realFocus']),

  children: PropTypes.any,
  className: PropTypes.string,
  popoverClassName: PropTypes.string,
  showArrow: PropTypes.bool,
  style: PropTypes.object,

  popRef: PropTypes.func,
  onInputKeyUp: PropTypes.func,
  onInputFocus: PropTypes.func,
  onInputKeyDown: PropTypes.func
}

Base.defaultProps = {
  renderSelected: item => item.text,

  delay: 500,
  renderListItem: item => item.text,
  listMaxHeight: '250px',

  renderListFilterType: 'default',

  popoverType: 'focus'
}

// 介绍 selected
// 假设 selected 是 value，那么在搜索的时候 data 是一份新的数据，这份数据内不存在 已选的 values，那么 selected 怎么显示就束手无策了
// 估用了 item
// 由于引用方式诟病比较多，所以也改成了非引用方式。

export default Base
