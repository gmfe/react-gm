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
      loading: false
    }

    this._isMounted = false

    this.debounceDoSearch = _.debounce(this.doSearch, props.delay)
  }

  componentWillUnmount() {
    this._isMounted = true
  }

  handleClear = clearItem => {
    const { onSelect, selected } = this.props

    const willSelected = _.filter(
      selected,
      item => item.value !== clearItem.value
    )

    onSelect(willSelected)
  }

  handleChange = e => {
    const searchValue = e.target.value

    this.setState({
      searchValue
    })

    this.debounceDoSearch(searchValue)
  }

  handleSelected = values => {
    const { onSelect, data, multiple } = this.props

    const items = []
    _.each(data, group => {
      _.each(group.children, item => {
        if (values.includes(item.value)) {
          items.push(item)
        }
      })
    })

    onSelect(items)

    if (!multiple) {
      onSelect(items)
      // 单选选后关闭
      // 要异步
      setTimeout(() => {
        if (!this._isMounted) {
          this.ref.current.click()
        }
      }, 0)
    }
  }

  doSearch = query => {
    const { onSearch, data } = this.props

    if (!this._isMounted && onSearch) {
      const result = onSearch(query, data)

      if (!result) {
        return
      }

      this.setState({
        loading: true
      })

      Promise.resolve(result)
        .then(() => {
          if (!this._isMounted) {
            this.setState({
              loading: false
            })
          }
        })
        .catch(() => {
          if (!this._isMounted) {
            this.setState({
              isLoading: false
            })
          }
        })
    }
  }

  renderList() {
    const {
      data,
      selected,
      multiple,
      isGroupList,
      renderListItem,
      renderListFilter,
      renderListFilterType,
      searchPlaceholder,
      disabledSearch,
      listMaxHeight
    } = this.props

    const { loading, searchValue } = this.state

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
      <div className='gm-more-select-popup'>
        {!disabledSearch && (
          <div className='gm-more-select-popup-input'>
            <input
              autoFocus
              className='form-control'
              type='text'
              value={searchValue}
              onChange={this.handleChange}
              placeholder={searchPlaceholder}
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
      disabled,
      selected,
      multiple,
      placeholder,

      renderSelected,

      className,
      style,
      popoverType,
      children
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
          type={popoverType}
          animName
          popup={this.renderList()}
          disabled={disabled}
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

  popoverType: PropTypes.oneOf(['focus', 'realFocus']),

  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object
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
