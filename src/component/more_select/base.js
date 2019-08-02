import { getLocale } from '../../locales'
import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classNames from 'classnames'
import Popover from '../popover'
import Flex from '../flex'
import ListBase from '../list/base'
import Loading from '../loading'
import { pinYinFilter } from 'gm-util'
import { findDOMNode } from 'react-dom'
import SVGCloseCircle from '../../../svg/close-circle.svg'
import SVGRemove from '../../../svg/remove.svg'

// 不要轻易改这个文件
// TODO keydown item disabled
// 目前全键盘还没有这种场景，暂时不管
class Base extends React.Component {
  constructor(props) {
    super(props)

    this.ref = React.createRef()
    this.popoverRef = React.createRef()
    this.selectedRef = React.createRef()

    this._isUnmounted = false

    this.debounceDoSearch = _.debounce(this.doSearch, props.delay)

    this.state = {
      searchValue: '',
      loading: false,
      willActiveIndex: null // null 代表没有做过键盘操作
    }
  }

  apiDoFocus = () => {
    // 唤起 popover，input autoFocus 会自动聚焦，但是这种方式本质是显示 UI
    // this.popoverRef.current.apiDoSetActive(true)

    // focus 更符合直觉
    findDOMNode(this.selectedRef.current).focus()
  }

  apiDoSelectWillActive = () => {
    // TODO 先考虑单选的情况
    const { selected, onSelect, multiple } = this.props
    const { willActiveIndex } = this.state
    const flatList = this.getFlatFilterData()
    // 没有做过键盘操作啥也不做
    if (willActiveIndex !== null && willActiveIndex < flatList.length) {
      if (multiple) {
        onSelect(
          _.uniqBy([...selected, flatList[willActiveIndex]], item => item.value)
        )
      } else {
        onSelect([flatList[willActiveIndex]])
      }
    }
  }

  componentWillUnmount() {
    this._isUnmounted = true
  }

  handleClear = (clearItem, event) => {
    event.stopPropagation()

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
      // 单选选后关闭
      // 要异步
      setTimeout(() => {
        if (!this._isUnmounted) {
          this.popoverRef.current.apiDoSetActive(false)
        }
      }, 0)
    }
  }

  doSearch = query => {
    const { onSearch, data } = this.props

    if (!this._isUnmounted && onSearch) {
      const result = onSearch(query, data)

      if (!result) {
        return
      }

      this.setState({
        loading: true
      })

      Promise.resolve(result)
        .then(() => {
          if (!this._isUnmounted) {
            this.setState({
              loading: false
            })
          }
        })
        .catch(() => {
          if (!this._isUnmounted) {
            this.setState({
              isLoading: false
            })
          }
        })
    }
  }

  getFlatFilterData = () => {
    return _.flatMap(this.filterData, v => v.children)
  }

  handlePopupKeyDown = event => {
    const { onKeyDown, selected } = this.props
    let { willActiveIndex } = this.state

    // 不是上下方向键，不用拦截
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') {
      onKeyDown(event)
      return
    }

    const flatList = this.getFlatFilterData()
    // 没有过滤数据，不用拦截
    if (flatList.length === 0) {
      onKeyDown(event)
      return
    }

    // 以下是需要拦截部分

    // 如果为 null，代表没有做过键盘操作，如果有选择，默认到 selected 第一个的位置
    if (willActiveIndex === null) {
      if (selected.length > 1) {
        willActiveIndex = _.findIndex(
          flatList,
          v => v.value === selected[0].value
        )
      }
      // 否则去到第一个
      else {
        willActiveIndex = 0
      }
    }
    // 非 null，则 ++ --
    else {
      // null -- ++ 后是 0
      if (event.key === 'ArrowUp') {
        willActiveIndex--
      } else if (event.key === 'ArrowDown') {
        willActiveIndex++
      }
    }

    // 修正
    if (willActiveIndex < 0) {
      willActiveIndex = flatList.length - 1
    } else if (willActiveIndex > flatList.length - 1) {
      willActiveIndex = 0
    }

    this.setState({
      willActiveIndex
    })
  }

  getFilterData = () => {
    const { data, renderListFilter, renderListFilterType } = this.props
    const { searchValue } = this.state

    let filterData = data
    // 节省过滤时间
    if (renderListFilter) {
      filterData = renderListFilter(data, searchValue)
    } else if (renderListFilterType === 'pinyin') {
      filterData = renderListFilterPinYin(data, searchValue)
    } else {
      filterData = renderListFilterDefault(data, searchValue)
    }

    // 存起来给上下键用
    this.filterData = filterData

    return filterData
  }

  renderList() {
    const {
      selected,
      multiple,
      isGroupList,
      renderListItem,
      searchPlaceholder,
      listMaxHeight,
      popupClassName
    } = this.props

    const { loading, searchValue, willActiveIndex } = this.state

    const filterData = this.getFilterData()

    return (
      <div
        className={classNames('gm-more-select-popup', popupClassName)}
        onKeyDown={this.handlePopupKeyDown}
      >
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
        {loading && (
          <Flex alignCenter justifyCenter className='gm-bg gm-padding-5'>
            <Loading size={20} />
          </Flex>
        )}
        {!loading && filterData.length === 0 && (
          <Flex
            alignCenter
            justifyCenter
            className='gm-bg gm-padding-5 gm-text-desc'
          >
            {getLocale('没有数据')}
          </Flex>
        )}
        {!loading && filterData.length !== 0 && (
          <ListBase
            data={filterData}
            selected={_.map(selected, v => v.value)}
            multiple={multiple}
            isGroupList={isGroupList}
            className='gm-border-0'
            renderItem={renderListItem}
            onSelect={this.handleSelected}
            isScrollTo
            isAllInTheView
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
          ref={this.popoverRef}
          type={popoverType}
          animName
          popup={this.renderList()}
          disabled={disabled}
        >
          {children || (
            <Flex
              ref={this.selectedRef}
              tabIndex={0}
              wrap
              className='gm-more-select-selected'
            >
              {selected.length !== 0 ? (
                _.map(selected, item => (
                  <Flex
                    key={item.value}
                    className='gm-more-select-selected-item'
                  >
                    <Flex flex column>
                      {renderSelected(item)}
                    </Flex>
                    {multiple ? (
                      <SVGRemove
                        onClick={
                          disabled ? _.noop : this.handleClear.bind(this, item)
                        }
                        className='gm-cursor gm-more-select-clear-btn'
                      />
                    ) : (
                      <SVGCloseCircle
                        onClick={
                          disabled ? _.noop : this.handleClear.bind(this, item)
                        }
                        className='gm-cursor gm-more-select-clear-btn'
                      />
                    )}
                  </Flex>
                ))
              ) : (
                // 加多个 &nbsp; 避免对齐问题。 有文本才有对齐
                <div className='gm-text-desc'>{placeholder}&nbsp;</div>
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

  // 列表 搜索
  onSearch: PropTypes.func, // searchValue, data
  delay: PropTypes.number,
  searchPlaceholder: PropTypes.string,
  renderListFilter: PropTypes.func, // 过滤，提供 searchValue 和 data
  renderListFilterType: PropTypes.oneOf(['default', 'pinyin']), // 也可简单指定 默认的过滤类型

  // 展示
  placeholder: PropTypes.string,
  renderSelected: PropTypes.func, // 定制已选的区域，提供 selected
  renderListItem: PropTypes.func, // 定制列表

  // 样式
  listMaxHeight: PropTypes.string,

  // isGroupList
  isGroupList: PropTypes.bool,

  popoverType: PropTypes.oneOf(['focus', 'realFocus']),

  className: PropTypes.string,
  style: PropTypes.object,
  popupClassName: PropTypes.string,

  /** 目前为了 keyboard */
  onKeyDown: PropTypes.func
}

export default Base
