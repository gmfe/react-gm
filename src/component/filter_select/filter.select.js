import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Flex from '../flex'
import Loading from '../loading'
import classNames from 'classnames'
import Popover from '../popover'
import SVGCloseCircle from '../../../svg/close-circle.svg'

class FilterSelect extends React.Component {
  constructor(props) {
    super(props)
    this.timer = null
    this.scrollTimer = null

    // 单选版本才设置query
    this.state = {
      query: '',
      loading: false,
      activeIndex: null // 键盘上下键选中的index
    }

    this.filterSelect = null
    this.filterSelectList = null
    this.______isMounted = false

    this.handleFocus = ::this.handleFocus
    this.handleClear = ::this.handleClear
    this.handleChange = ::this.handleChange
    this.getListItemCount = ::this.getListItemCount
    this.handleKeyDown = ::this.handleKeyDown
    this.doChange = ::this.doChange

    if (!this.props.id) {
      console.warn('请提供id')
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // if (this.state.activeIndex !== prevState.activeIndex && this.filterSelectList) {
    //   const dom = this.filterSelectList.querySelector('.list-group-item.line-selected')
    //   dom && dom.scrollIntoViewIfNeeded()
    // }
  }

  componentWillUnmount() {
    this.______isMounted = true
  }

  doScroll() {
    // 滚动到选择的地方。 不知道会发生什么，尽量来做容错
    if (this.filterSelectList) {
      // 选第一个
      const activeDOM = this.filterSelectList.querySelectorAll(
        '.list-group-item.active'
      )[0]
      if (activeDOM) {
        this.filterSelectList.scrollTop = activeDOM.offsetTop
      }
    }
  }

  handleFocus(event) {
    event.target.select()

    this.props.onInputFocus()

    if (this.props.isScrollToSelected) {
      // focus 先触发，此时浮层未出来。等个500毫秒？
      clearTimeout(this.scrollTimer)
      this.scrollTimer = setTimeout(() => {
        this.doScroll()
      }, 500)
    }
  }

  doSetActiveIndex(activeIndex) {
    this.setState({
      activeIndex
    })
    // TODO 上下键滚动到可视区先去掉吧,有bug导致无法选中某一项.   日后优化
  }

  handleKeyDown(size, event) {
    const { keyCode } = event

    if (keyCode === 13) {
      // 键盘 回车
      const dom = this.filterSelectList.querySelector(
        '.list-group-item.line-selected'
      )
      if (dom) {
        dom.click()
      }
      return
    }

    if (keyCode === 38 || keyCode === 40) {
      let { activeIndex } = this.state
      let diff = 1
      if (keyCode === 38) {
        // 键盘 上键
        diff = -1
      }
      activeIndex = activeIndex === null ? 0 : activeIndex + diff
      if (activeIndex < 0) {
        activeIndex = size - 1
      } else if (activeIndex > size - 1) {
        activeIndex = 0
      }

      this.doSetActiveIndex(activeIndex)
      // this.setState({
      //   activeIndex
      // })
    }
  }

  handleItemMouseEnter(activeIndex) {
    this.doSetActiveIndex(activeIndex)
    // this.setState({
    //   activeIndex
    // })
  }

  handleSelect = (value, event) => {
    event.preventDefault()

    this.props.onSelect(value)

    // 置空
    this.setState({
      query: ''
    })

    // 单选选后关闭
    // 要异步
    setTimeout(() => {
      if (!this.______isMounted) {
        this.filterSelect.click()
      }
    }, 0)

    // 并且要出发onChange
    this.doChange('')
  }

  handleChange(event) {
    const query = event.target.value
    clearTimeout(this.timer)
    this.setState({
      query
    })

    this.timer = setTimeout(() => {
      if (!this.______isMounted) {
        this.doChange(query)
      }
    }, this.props.delay)
  }

  doChange(query) {
    if (!this.______isMounted) {
      const result = this.props.onSearch(query)

      if (!result) {
        return
      }

      this.setState({
        loading: true
      })

      Promise.resolve(result)
        .then(() => {
          this.setState({
            loading: false
          })
        })
        .catch(() => {
          this.setState({
            isLoading: false
          })
        })
    }
  }

  getListItemCount(list) {
    const { isGroupList } = this.props

    if (isGroupList) {
      return _.reduce(
        list,
        (count, group) => {
          return count + ((group.children && group.children.length) || 0)
        },
        0
      )
    }

    return list.length
  }

  handleClear(event) {
    event.preventDefault()
    this.props.onSelect(null)
  }

  renderGroupList(list) {
    const {
      listMaxHeight,
      inputClassName,
      selected,
      renderItemName
    } = this.props

    const usefulList = _.filter(list, v => (v.children || []).length > 0)

    let itemSequence = -1

    return (
      <div
        className='list-group'
        style={{ maxHeight: listMaxHeight }}
        ref={ref => (this.filterSelectList = ref)}
      >
        {_.map(usefulList, (groupList, i) => {
          return (
            <div key={i} className='list-group-label'>
              <div className='list-group-label-item gm-text-desc'>
                {groupList.label}
              </div>
              {_.map(groupList.children, (value, j) => {
                itemSequence++
                return (
                  <Flex
                    key={i + '_' + j}
                    alignCenter
                    className={classNames('list-group-item', inputClassName, {
                      active: selected === value,
                      'line-selected': this.state.activeIndex === itemSequence
                    })}
                    onClick={this.handleSelect.bind(this, value)}
                    onMouseEnter={this.handleItemMouseEnter.bind(
                      this,
                      itemSequence
                    )}
                  >
                    <Flex flex>{renderItemName(value)}</Flex>
                  </Flex>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }

  renderList(list) {
    const {
      listMaxHeight,
      inputClassName,
      selected,
      renderItemName
    } = this.props

    return (
      <div
        className='list-group'
        style={{ maxHeight: listMaxHeight }}
        ref={ref => (this.filterSelectList = ref)}
      >
        {_.map(list, (value, i) => {
          return (
            <Flex
              key={i}
              alignCenter
              className={classNames('list-group-item', inputClassName, {
                active: selected === value,
                'line-selected': this.state.activeIndex === i
              })}
              onClick={this.handleSelect.bind(this, value)}
              onMouseEnter={this.handleItemMouseEnter.bind(this, i)}
            >
              {renderItemName(value)}
            </Flex>
          )
        })}
      </div>
    )
  }

  renderOverlay(filterList) {
    const { isGroupList, disableSearch } = this.props
    const { query, loading } = this.state

    return (
      <div className='gm-filter-select-popup'>
        {!disableSearch && (
          <div className='gm-filter-select-popup-input'>
            <input
              autoFocus
              className='form-control'
              type='text'
              value={query}
              onFocus={this.handleFocus}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown.bind(
                this,
                this.getListItemCount(filterList)
              )}
              placeholder={this.props.placeholder}
            />
          </div>
        )}
        {loading && (
          <Flex alignCenter justifyCenter className='gm-bg gm-padding-5'>
            <Loading size={20} />
          </Flex>
        )}
        {!loading &&
          (isGroupList
            ? this.renderGroupList(filterList)
            : this.renderList(filterList))}
      </div>
    )
  }

  render() {
    const {
      id,
      list,
      withFilter,
      selected,
      placeholder,
      disabled,
      showClear
    } = this.props
    const { query } = this.state
    let filterList = list
    if (query) {
      filterList = withFilter(filterList, query)
    }

    return (
      <div
        key={id}
        ref={ref => (this.filterSelect = ref)}
        className={classNames('gm-filter-select', this.props.className, {
          'gm-filter-select-disabled': this.props.disabled
        })}
      >
        <Flex wrap className='gm-filter-select-target-box'>
          <Popover
            animName
            popup={this.renderOverlay(filterList)}
            disabled={disabled}
          >
            <Flex flex className='gm-filter-select-target gm-position-relative'>
              {selected ? (
                <Flex>
                  {selected.name}
                  {showClear && (
                    <SVGCloseCircle
                      onClick={this.handleClear}
                      className='gm-filter-select-clear-btn'
                    />
                  )}
                </Flex>
              ) : (
                <Flex className='gm-text-desc'>{placeholder}</Flex>
              )}
            </Flex>
          </Popover>
        </Flex>
      </div>
    )
  }
}

FilterSelect.propTypes = {
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  list: PropTypes.array.isRequired,
  isGroupList: PropTypes.bool,
  selected: PropTypes.any,
  onSearch: PropTypes.func,
  withFilter: PropTypes.func,
  onSelect: PropTypes.func.isRequired,
  delay: PropTypes.number,
  listMaxHeight: PropTypes.string,
  placeholder: PropTypes.string,
  isScrollToSelected: PropTypes.bool,
  onInputFocus: PropTypes.func,
  disableSearch: PropTypes.bool,
  renderItemName: PropTypes.func,
  showClear: PropTypes.bool,
  className: PropTypes.string,
  inputClassName: PropTypes.string
}

FilterSelect.defaultProps = {
  disabled: false,
  isGroupList: false,
  listMaxHeight: '250px',
  delay: 500,
  placeholder: '',
  onSearch: _.noop,
  withFilter: v => v,
  onInputFocus: _.noop,
  disableSearch: false,
  renderItemName: v => v.name
}

export default FilterSelect
