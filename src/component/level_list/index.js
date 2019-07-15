import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'
import Flex from '../flex'
import LevelItem from './level_item'
import { getLevel } from './util'

class LevelList extends React.Component {
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

    const level = getLevel(data, willActiveSelected)

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
  onlySelectLeaf: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
}

LevelList.defaultProps = {
  titles: []
}

export default LevelList
