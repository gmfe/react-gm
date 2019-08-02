import React from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classNames from 'classnames'
import Flex from '../flex'
import Popover from '../popover'
import { pinYinFilter, pinyin } from 'gm-util'
import SVGCloseCircle from '../../../svg/close-circle.svg'
import SVGDownSmall from '../../../svg/down.svg'
import SVGUpSmall from '../../../svg/up.svg'

// 给list中每个元素添加_path
function mapPath(list, searchText, parentPath = []) {
  _.each(list, item => {
    if (item._path === undefined) {
      item._path = [...parentPath, item.value]
    }

    if (item.children) {
      mapPath(item.children, searchText, [...item._path])
    }
  })
}

// 找出list树下匹配searchText的最深元素的路径
function getMaxDeepPathOfMatchElement(list, searchText) {
  let maxLengthPath = []

  function findMaxLengthPath(list, searchText) {
    _.each(list, item => {
      // 匹配首字母
      const firstLetter = _.map(
        pinyin(item.name, 'first_letter'),
        value => value[0]
      ).join('')
      // 全拼集合
      const normal = _.map(pinyin(item.name), value => value[0]).join('')

      if (
        (item.name.indexOf(searchText) > -1 ||
          normal.indexOf(searchText) > -1 ||
          firstLetter.indexOf(searchText) > -1) &&
        maxLengthPath.length < item._path.length
      ) {
        maxLengthPath = item._path
      }

      if (item.children) {
        findMaxLengthPath(item.children, searchText)
      }
    })
  }

  findMaxLengthPath(list, searchText)

  return maxLengthPath
}

class Cascader extends React.Component {
  constructor(props) {
    super(props)

    // deep clone data,然后给data生成_path数据
    const data = _.cloneDeep(props.data)
    mapPath(data)

    this.state = {
      selected: props.value ? [...props.value] : [], // 选中状态
      filterInput: null, // filtrable为true时，输入框的内容
      data: data
    }

    this.listActiveRef = []

    this.handleSelect = ::this.handleSelect
    this.handleClear = ::this.handleClear
    this.handleInputChange = ::this.handleInputChange
    this.handleKeyDown = ::this.handleKeyDown
    this.inputValueRender = ::this.inputValueRender
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        selected: nextProps.value ? [...nextProps.value] : []
      })
    }

    if (nextProps.data !== this.props.data) {
      const data = _.cloneDeep(nextProps.data)
      mapPath(data) // 给data生成_path数据

      this.setState({ data })
    }
  }

  componentDidUpdate() {
    _.each(this.listActiveRef, ref => {
      ref && ReactDom.findDOMNode(ref).scrollIntoViewIfNeeded() // eslint-disable-line
    })
  }

  getList() {
    const selected = this.state.selected
    const result = [this.state.data]

    _.each(selected, (value, i) => {
      const match = _.find(result[i], v => v.value === value)
      if (match) {
        if (match.children) {
          result.push(match.children)
        }
      }
    })

    return result
  }

  getFilterList(list, searchText) {
    return _.filter(list, item => {
      if (item.children) {
        item.children = this.getFilterList(item.children, searchText)

        if (item.children.length) {
          return true
        }
      }

      if (pinYinFilter([item], searchText, v => v.name).length) {
        return true
      }

      return false
    })
  }

  handleClear(e) {
    e.stopPropagation()

    this.setState({ selected: [] }, () => {
      this.handleSelect()
    })
  }

  handleSelect() {
    const { onlyChildSelectable } = this.props
    const { selected, data } = this.state

    const value = []
    if (selected.length > 0) {
      _.each(selected, (v, i) => {
        const match = _.find(i === 0 ? data : value[i - 1].children, val => {
          return v === val.value
        })
        value.push(match)
      })
    }

    // 如果选择有children的，则清空输入框
    if (
      onlyChildSelectable &&
      value.length &&
      value[value.length - 1].children
    ) {
      this.setState({ filterInput: '' })
      this.props.onChange([])
    } else {
      this.setState({ filterInput: null })
      this.props.onChange(selected)
    }

    // 选中后关闭cascader
    setTimeout(() => {
      window.document.body.click()
    }, 0)

    window.document.activeElement.blur() // blur input
  }

  handleMouseEnter(selected) {
    this.setState({ selected })
  }

  handleInputChange(e) {
    const filterInput = e.target.value

    if (this.props.filtrable) {
      this.setState({
        filterInput,
        selected: getMaxDeepPathOfMatchElement(this.state.data, filterInput)
      })
    }
  }

  handleKeyDown(event) {
    const { keyCode } = event

    // 键盘上下键控制最当前选中列
    if (keyCode === 38 || keyCode === 40) {
      const listArr = this.getList()
      const selected = [...this.state.selected]
      const len = selected.length

      if (!len) {
        this.setState({
          selected: [listArr[0][0].value],
          filterInput: ''
        })
        return
      }

      const lastList = listArr[len - 1]
      const currentIndex = _.findIndex(
        lastList,
        item => item.value === selected[len - 1]
      )

      let lastValue = selected[len - 1]

      if (keyCode === 38 && currentIndex > 0) {
        lastValue = lastList[currentIndex - 1].value
      } else if (keyCode === 40 && currentIndex < lastList.length - 1) {
        lastValue = lastList[currentIndex + 1].value
      }

      selected[len - 1] = lastValue

      this.setState({
        selected
      })
    } else if (keyCode === 13) {
      // 键盘 回车
      this.handleSelect()
    }
  }

  inputValueRender() {
    const { filterInput, data } = this.state
    const { valueRender, filtrable } = this.props
    const selected = this.props.value || this.state.selected

    const value = []
    if (selected.length > 0) {
      _.each(selected, (v, i) => {
        const match = _.find(i === 0 ? data : value[i - 1].children, val => {
          return v === val.value
        })
        value.push(match)
      })
    }

    if (!filtrable) {
      return valueRender
        ? valueRender(value)
        : _.map(value, v => v.name).join(',')
    }

    return filterInput === null
      ? valueRender
        ? valueRender(value)
        : _.map(value, v => v.name).join(',')
      : filterInput
  }

  renderOverlay() {
    const selected = this.state.selected

    this.listActiveRef = []

    const list = this.getList()

    return (
      <Flex
        className={classNames('gm-cascader-list gm-bg', this.props.className)}
        style={this.props.style}
      >
        {_.map(list, (value, i) => (
          <Flex
            column
            key={i}
            className={classNames(
              'list-group gm-block gm-margin-0 gm-border-0 gm-overflow-y',
              {
                'gm-border-right': i !== list.length - 1
              }
            )}
          >
            {_.map(value, v => (
              <Flex
                key={v.value}
                title={v.name}
                justifyBetween
                onClick={this.handleSelect}
                onMouseEnter={this.handleMouseEnter.bind(this, v._path)}
                className={classNames('list-group-item', {
                  active: v.value === selected[i]
                })}
                ref={ref => {
                  if (v.value === selected[i]) this.listActiveRef[i] = ref
                }}
              >
                {v.name}&nbsp;
                {v.children && v.children.length && (
                  <i className={classNames('gm-arrow-right')} />
                )}
              </Flex>
            ))}
          </Flex>
        ))}
      </Flex>
    )
  }

  renderChildren() {
    const { disabled } = this.props
    const { data } = this.state
    const inputValue = this.inputValueRender()
    let { inputProps } = this.props

    const selected = this.props.value || this.state.selected
    const value = []
    if (selected.length > 0) {
      _.each(selected, (v, i) => {
        const match = _.find(i === 0 ? data : value[i - 1].children, val => {
          return v === val.value
        })
        value.push(match)
      })
    }

    // disabled 的优先级比 inputProps的优先级高
    if (disabled) {
      inputProps = Object.assign({}, inputProps, { disabled })
    }

    return (
      <div
        className={classNames('gm-cascader', {
          'gm-cascader-close': inputValue
        })}
      >
        <input
          {...inputProps}
          type='text'
          onChange={this.handleInputChange}
          onKeyDown={this.handleKeyDown}
          value={inputValue}
          className={classNames('form-control', inputProps.className)}
        />
        {inputValue && (
          <SVGCloseCircle
            onClick={this.handleClear}
            className='gm-cascader-icon gm-cascader-close-icon'
          />
        )}
        <SVGDownSmall className='gm-cascader-icon gm-cascader-down-small' />
        <SVGUpSmall className='gm-cascader-icon gm-cascader-up-small' />
      </div>
    )
  }

  render() {
    const { disabled, popoverStyle } = this.props

    return (
      <Popover
        animName
        style={popoverStyle}
        disabled={disabled}
        popup={this.renderOverlay()}
      >
        {this.props.children ? this.props.children : this.renderChildren()}
      </Popover>
    )
  }
}

Cascader.propTypes = {
  // 格式 [{value: 1, name: '深圳', children: [{...}]}]
  data: PropTypes.array.isRequired,
  // [1,2,...]
  value: PropTypes.array,
  // 同上
  defaultValue: PropTypes.array,
  // 会提供整个value回去
  onChange: PropTypes.func,
  // 没有this.props.children时有效
  inputProps: PropTypes.object,
  valueRender: PropTypes.func,
  children: PropTypes.any,
  disabled: PropTypes.bool,
  // 是否可搜索
  filtrable: PropTypes.bool,
  // 只允许选择子节点，有children则清空输入框
  onlyChildSelectable: PropTypes.bool,
  popoverStyle: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object
}

Cascader.defaultProps = {
  onChange: _.noop,
  inputProps: {},
  disabled: false,
  onlyChildSelectable: false
}

export default Cascader
