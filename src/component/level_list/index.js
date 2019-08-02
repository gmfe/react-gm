import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'
import Flex from '../flex'
import LevelItem from './level_item'
import { getLevel } from './util'

class LevelList extends React.Component {
  handleListItemMouseEnter = (index, listItem) => {
    const { willActiveSelected, onWillActiveSelect } = this.props

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
    const { selected, onWillActiveSelect } = this.props

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
      isReverse,
      className,
      isForFunctionSet,
      ...rest
    } = this.props

    const level = getLevel(data, willActiveSelected)

    let gaps = []
    if (isForFunctionSet) {
      let indexs = _.map(willActiveSelected, (v, i) =>
        _.findIndex(level[i], vv => vv.value === v)
      )
      indexs = [0, ...indexs]
      let top = 0
      gaps = _.map(indexs, v => {
        top = v + top
        return top
      })
    }

    let items = _.map(level, (item, i) => (
      <LevelItem
        key={i}
        title={titles[i]}
        data={item}
        selected={selected[i]}
        onSelect={this.handleSelect}
        willActiveSelected={willActiveSelected[i]}
        onListItemMouseEnter={this.handleListItemMouseEnter.bind(this, i)}
        style={{
          paddingTop: gaps[i] ? gaps[i] * 25 : 0
        }}
      />
    ))

    if (isReverse) {
      items = items.reverse()
    }

    return (
      <Flex
        {...rest}
        className={classNames(
          'gm-level-list',
          {
            'gm-level-list-for-function-set': isForFunctionSet
          },
          className
        )}
        onMouseLeave={this.handleMouseLeave}
      >
        {items}
      </Flex>
    )
  }
}

LevelList.propTypes = {
  data: PropTypes.array.isRequired, // [{value, text, children}]
  selected: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  // 没和
  willActiveSelected: PropTypes.array.isRequired,
  onWillActiveSelect: PropTypes.func.isRequired,
  titles: PropTypes.array,
  onlySelectLeaf: PropTypes.bool, // TODO
  isReverse: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,

  /** 内部用，暂时这么处理 */
  isForFunctionSet: PropTypes.bool
}

LevelList.defaultProps = {
  titles: []
}

export default LevelList
