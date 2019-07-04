import React from 'react'
import PropTypes from 'prop-types'
import LevelList from '../level_list'
import Popover from '../popover'
import classNames from 'classnames'
import _ from 'lodash'

// TODO search

class LevelSelect extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      willActiveSelected: props.selected,
      search: ''
    }
  }

  apiDoSelectWillActive = () => {
    // TODO
  }

  getLevel = () => {
    const { data } = this.props
    const { willActiveSelected } = this.state

    const result = [data]

    _.each(willActiveSelected, (item, i) => {
      const match = _.find(result[i], v => v.value === item)

      if (match) {
        if (match.children) {
          result.push(match.children)
        }
      }
    })

    return result
  }

  getSelectedItem = () => {
    const { data, selected } = this.props

    let items = []
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

  handleInputChange = () => {
    // TODO
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
    const level = this.getLevel()

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

  handleClear = () => {
    const { onSelect } = this.props
    onSelect([])
  }

  handleWillActiveSelect = willActiveSelected => {
    this.setState({
      willActiveSelected
    })
  }

  renderPopup = () => {
    const { titles, data, selected, onSelect } = this.props
    const { willActiveSelected } = this.state
    return (
      <LevelList
        titles={titles}
        data={data}
        selected={selected}
        onSelect={onSelect}
        willActiveSelected={willActiveSelected}
        onWillActiveSelect={this.handleWillActiveSelect}
        className='gm-border-0'
      />
    )
  }

  renderTarget = () => {
    const { disabled, inputProps } = this.props
    const inputValue = this.getSelectItemText()
    return (
      <div
        className={classNames('gm-level-select', {
          'gm-level-select-close': inputValue,
          disabled
        })}
      >
        <input
          disabled
          type='text'
          value={inputValue}
          onChange={this.handleInputChange}
          onKeyDown={this.handleKeyDown}
          className={classNames('form-control', inputProps.className)}
        />
        {inputValue && (
          <i
            onClick={!disabled && this.handleClear}
            className='xfont xfont-close-circle gm-cursor gm-level-select-close-icon'
          />
        )}
        <i className='gm-arrow-down' />
        <i className='gm-arrow-up' />
      </div>
    )
  }

  render() {
    const { disabled, children } = this.props

    return (
      <Popover animName disabled={disabled} popup={this.renderPopup()}>
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
  inputProps: PropTypes.object,

  // 仅仅能选择叶子
  onlySelectLeaf: PropTypes.bool,
  // 事件
  onKeyDown: PropTypes.func
}

LevelSelect.defaultProps = {
  inputProps: {},
  renderSelected: items => items.map(v => v.text).join(','),
  onKeyDown: _.noop
}

export default LevelSelect
