import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'
import Flex from '../flex'
import LevelItem from './level_item'

class LevelList extends React.Component {
  getLevel = () => {
    const { data, willActiveSelected } = this.props
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

  handleListItemMouseEnter = (index, listItem) => {
    let { willActiveSelected, onWillActiveSelect } = this.props

    // 重要 slice 避免引用
    const newWill = willActiveSelected.slice(0, index + 1)
    newWill[index] = listItem.value
    onWillActiveSelect(newWill)
  }

  handleSelect = () => {
    const { onSelect, willActiveSelected } = this.props

    onSelect(willActiveSelected)
  }

  handleMouseLeave = () => {
    // 离开的时候要重置下 willActiveSelected 为 selected
    let { selected, onWillActiveSelect } = this.props

    // slice 避免引用
    onWillActiveSelect(selected.slice())
  }

  render() {
    const {
      titles,
      data,
      selected,
      onSelect,
      willActiveSelected,
      onWillActiveSelect,
      className,
      ...rest
    } = this.props

    const level = this.getLevel(data)

    return (
      <Flex
        {...rest}
        className={classNames('gm-level-list gm-bg gm-border', className)}
        onMouseLeave={this.handleMouseLeave}
      >
        {_.map(level, (item, i) => (
          <LevelItem
            key={i}
            title={titles[i]}
            data={item}
            selected={selected[i]}
            onSelect={this.handleSelect}
            willActiveSelected={willActiveSelected[i]}
            onListItemMouseEnter={this.handleListItemMouseEnter.bind(this, i)}
            className={i === 0 ? '' : 'gm-border-left'}
          />
        ))}
      </Flex>
    )
  }
}

LevelList.propTypes = {
  titles: PropTypes.array,
  data: PropTypes.array.isRequired, // [{value, text, children}]
  selected: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  // 没和
  willActiveSelected: PropTypes.array.isRequired,
  onWillActiveSelect: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
}

LevelList.defaultProps = {
  titles: []
}

export default LevelList
