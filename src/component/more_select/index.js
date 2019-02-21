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
      renderItem,
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
            renderItem={renderItem}
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
  // item。 非 value，原因是想解耦 selected 和 data 的关系
  selected: PropTypes.object,
  onSelect: PropTypes.func.isRequired,

  // isGroupList

  // 状态
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,

  // 列表 搜索
  onSearch: PropTypes.func, // query, data
  delay: PropTypes.number,
  searchPlaceholder: PropTypes.string,
  disabledSearch: PropTypes.bool,
  renderListFilter: PropTypes.func,
  renderListFilterType: PropTypes.oneOf(['default', 'pinyin']),

  // 展示
  renderSelected: PropTypes.func,
  renderItem: PropTypes.func,

  // 样式
  listMaxHeight: PropTypes.string
}

MoreSelect.defaultProps = {
  renderSelected: item => item.text,

  delay: 500,
  renderItem: item => item.text,
  listMaxHeight: '250px',

  renderListFilterType: 'default'
}

export default MoreSelect
