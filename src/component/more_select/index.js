import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classNames from 'classnames'
import Popover from '../popover'
import Flex from '../flex'
import { List } from '../list'
import Loading from '../loading'
import { pinYinFilter } from 'gm-util'

class MoreSelect extends React.Component {
  constructor (props) {
    super(props)

    this.ref = React.createRef()

    this.state = {
      searchValue: '',
      loading: false
    }

    this._isMounted = false

    this.debounceDoSearch = _.debounce(this.doSearch, props.delay)
  }

  componentWillUnmount () {
    this._isMounted = true
  }

  handleClear = () => {
    const { onSelect } = this.props

    onSelect(null)
  }

  handleChange = (e) => {
    const searchValue = e.target.value

    this.setState({
      searchValue
    })

    this.debounceDoSearch(searchValue)
  }

  handleSelected = (value) => {
    const { onSelect, data } = this.props

    const item = _.find(data, item => item.value === value)
    onSelect(item)

    // 单选选后关闭
    // 要异步
    setTimeout(() => {
      if (!this._isMounted) {
        this.ref.current.click()
      }
    }, 0)
  }

  doSearch = (query) => {
    const { onSearch, data } = this.props

    if (!this._isMounted && onSearch) {
      const result = onSearch(query, data)

      if (!result) {
        return
      }

      this.setState({
        loading: true
      })

      Promise.resolve(result).then(() => {
        if (!this._isMounted) {
          this.setState({
            loading: false
          })
        }
      }).catch(() => {
        if (!this._isMounted) {
          this.setState({
            isLoading: false
          })
        }
      })
    }
  }

  renderList () {
    const {
      data,
      selected,
      renderListItem,
      renderListFilter,
      renderListFilterType,
      searchPlaceholder,
      disabledSearch,
      listMaxHeight
    } = this.props

    const { loading, searchValue } = this.state

    let filterData = data
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
        {loading && <Flex alignCenter justifyCenter className='gm-bg gm-padding-5'>
          <Loading size={20}/>
        </Flex>}
        {!loading && (
          <List
            data={filterData}
            selected={selected.value}
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

  render () {
    const {
      disabled,
      selected,

      placeholder,

      renderSelected
    } = this.props

    return (
      <div
        ref={this.ref}
        className={classNames('gm-more-select', {
          'gm-more-select-disabled': disabled
        })}
      >
        <Popover
          animName
          popup={this.renderList()}
          disabled={disabled}
        >
          <div className='gm-more-select-selected'>
            {selected ? (
              <Flex>
                <Flex flex column>
                  {renderSelected(selected)}
                </Flex>
                <i
                  onClick={disabled ? _.noop : this.handleClear}
                  className='xfont xfont-close-circle gm-cursor gm-more-select-clear-btn'
                />
              </Flex>
            ) : (
              <div className='gm-text-desc'>{placeholder}</div>
            )}
          </div>
        </Popover>
      </div>
    )
  }
}

function renderListFilterDefault (data, query) {
  return _.filter(data, item => item.text.includes(query))
}

function renderListFilterPinYin (data, query) {
  return pinYinFilter(data, query, item => item.text)
}

MoreSelect.renderListFilterDefault = renderListFilterDefault
MoreSelect.renderListFilterPinYin = renderListFilterPinYin

MoreSelect.propTypes = {
  // 基本属性
  data: PropTypes.array.isRequired, // [{value, text}]
  selected: PropTypes.object, // item。 非 value，也非引用，原因是想解耦 selected 和 data 的关系。这样当
  onSelect: PropTypes.func.isRequired, // 返回 item

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
  isGroupList: PropTypes.bool
}

MoreSelect.defaultProps = {
  renderSelected: item => item.text,

  delay: 500,
  renderListItem: item => item.text,
  listMaxHeight: '250px',

  renderListFilterType: 'default'
}

// 介绍 selected
// 假设 selected 是 value，那么在搜索的时候 data 是一份新的数据，这份数据内不存在 已选的 values，那么 selected 怎么显示就束手无策了
// 估用了 item
// 由于引用方式诟病比较多，所以也改成了非引用方式。

export default MoreSelect
