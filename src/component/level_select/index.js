import React from 'react'
import PropTypes from 'prop-types'
import LevelList from '../level_list'
import Popover from '../popover'
import _ from 'lodash'
import { getLevel } from '../level_list/util'
import Selection from '../selection'
import Flex from '../flex'

// TODO
// onlySelectLeaf

class LevelSelect extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      willActiveSelected: props.selected,
      search: ''
    }

    this.refSelection = React.createRef()
    this.popoverRef = React.createRef()
  }

  apiDoFocus = () => {
    this.refSelection.current.apiDoFocus()
  }

  apiDoSelectWillActive = () => {
    const { onSelect } = this.props
    const { willActiveSelected } = this.state

    onSelect(willActiveSelected)
  }

  getSelectedItem = () => {
    const { data, selected } = this.props

    const items = []
    _.each(selected, (v, i) => {
      const match = _.find(
        i === 0 ? data : items[i - 1].children,
        item => item.value === v
      )
      items.push(match)
    })

    return items
  }

  getSelectItemText = () => {
    const { renderSelected } = this.props
    const items = this.getSelectedItem()
    return renderSelected(items)
  }

  handleKeyDown = event => {
    const { data, onKeyDown } = this.props
    const { willActiveSelected } = this.state

    // 不是方向键，不用拦截
    if (
      event.key !== 'ArrowDown' &&
      event.key !== 'ArrowUp' &&
      event.key !== 'ArrowLeft' &&
      event.key !== 'ArrowRight'
    ) {
      onKeyDown(event)
      return
    }

    // 没有数据，不拦截
    if (data.length === 0) {
      onKeyDown(event)
      return
    }

    // 避免引用
    let newWill = willActiveSelected.slice()
    const level = getLevel(data, willActiveSelected)

    // 如果没法左和右了，则不拦截，抛出去
    if (
      (event.key === 'ArrowLeft' && newWill.length === 0) ||
      (event.key === 'ArrowRight' && newWill.length >= level.length)
    ) {
      onKeyDown(event)
      return
    }

    // 以下要拦截拉

    // 阻止默认行为
    event.preventDefault()

    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      // 如果没有选择，则默认到第一个
      if (newWill.length === 0) {
        newWill = [level[0][0].value]
      } else {
        const arr = level[newWill.length - 1]
        let index = _.findIndex(
          arr,
          v => v.value === newWill[newWill.length - 1]
        )

        if (event.key === 'ArrowDown') {
          index++
        } else {
          index--
        }

        // fix index
        if (index > arr.length - 1) {
          index = 0
        } else if (index < 0) {
          index = arr.length - 1
        }

        newWill[newWill.length - 1] = arr[index].value
      }
    } else if (event.key === 'ArrowLeft') {
      newWill.pop()
    } else if (event.key === 'ArrowRight') {
      newWill.push(level[newWill.length][0].value)
    }

    this.setState({
      willActiveSelected: newWill
    })
  }

  handleWillActiveSelect = willActiveSelected => {
    this.setState({
      willActiveSelected
    })
  }

  handleSelect = selected => {
    const { onSelect } = this.props

    this.popoverRef.current.apiDoSetActive(false)

    onSelect(selected)
  }

  renderPopup = () => {
    const { titles, data, selected, right } = this.props
    const { willActiveSelected } = this.state
    return (
      <Flex justifyEnd={right}>
        <LevelList
          isReverse={right}
          titles={titles}
          data={data}
          selected={selected}
          onSelect={this.handleSelect}
          willActiveSelected={willActiveSelected}
          onWillActiveSelect={this.handleWillActiveSelect}
          className='gm-border-0'
        />
      </Flex>
    )
  }

  handleSelectionSelect = selected => {
    const { onSelect } = this.props
    onSelect(selected === null ? [] : selected)
  }

  renderTarget = () => {
    const {
      titles,
      data,
      selected,
      disabled,
      popoverType,
      ...rest
    } = this.props

    // 注意转换 selected onSelect renderSelected
    return (
      <Selection
        {...rest}
        ref={this.refSelection}
        selected={selected.length === 0 ? null : selected}
        onSelect={this.handleSelectionSelect}
        renderSelected={() => this.getSelectItemText()}
        onKeyDown={this.handleKeyDown}
        disabled={disabled}
      />
    )
  }

  render() {
    const { disabled, children, popoverType, right } = this.props

    return (
      <Popover
        ref={this.popoverRef}
        animName
        right={right}
        disabled={disabled}
        popup={this.renderPopup()}
        type={popoverType}
        pureContainer
      >
        {children !== undefined ? children : this.renderTarget()}
      </Popover>
    )
  }
}

LevelSelect.propTypes = {
  titles: PropTypes.array,
  data: PropTypes.array.isRequired, // [{value, text, children}]
  selected: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,

  disabled: PropTypes.bool,

  renderSelected: PropTypes.func,

  // 仅仅能选择叶子
  onlySelectLeaf: PropTypes.bool,

  popoverType: PropTypes.oneOf(['focus', 'realFocus']),
  right: PropTypes.bool,
  // 事件
  onKeyDown: PropTypes.func
}

LevelSelect.defaultProps = {
  renderSelected: item => item.map(v => v.text).join(','),
  onKeyDown: _.noop
}

export default LevelSelect
