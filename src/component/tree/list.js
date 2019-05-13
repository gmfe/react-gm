import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { getLeaf } from './util'
import { GroupItem, LeafItem } from './item'

class List extends React.Component {
  handleClickLeafName = (leaf, checked) => {
    this.props.onClickLeafName(leaf, checked)
  }

  handleChange = (leaf, checked) => {
    const { onSelectValues, selectedValues, onClickCheckbox } = this.props
    onSelectValues(_.xor([leaf.value], selectedValues))

    if (onClickCheckbox) {
      onClickCheckbox(leaf, checked)
    }
  }

  handleSelectGroup = (group, isSelectGroup) => {
    const { onClickCheckbox, selectedValues, onSelectValues } = this.props

    const leafValues = _.map(getLeaf(group.children), item => item.value)
    onSelectValues(isSelectGroup ? _.union(selectedValues, leafValues) : _.difference(selectedValues, leafValues))

    if (onClickCheckbox) {
      onClickCheckbox(group, isSelectGroup)
    }
  }

  handleGroup = (group) => {
    const { groupSelected, onGroupSelect } = this.props

    onGroupSelect(_.xor(groupSelected, [group.value]))
  }

  render () {
    const { groupSelected, list, selectedValues, showGroupCheckbox, onClickLeafName } = this.props

    if (list.length === 0) {
      return null
    }

    const isGroupData = !!list[0].children

    if (isGroupData) {
      return (
        <div className='gm-tree-group'>
          {_.map(list, group => {
            const isOpen = _.includes(groupSelected, group.value)

            const leafValues = _.map(getLeaf(group.children), item => item.value)
            const isSelectGroup = _.filter(leafValues, value => _.includes(selectedValues, value)).length === leafValues.length

            return (
              <GroupItem
                key={group.value}
                group={group}
                isOpen={isOpen}
                hasCheckbox={showGroupCheckbox(group)}
                checked={isSelectGroup}
                onChange={this.handleSelectGroup}
                onGroup={this.handleGroup}
              >
                <List
                  {...this.props}
                  list={group.children}
                />
              </GroupItem>
            )
          })}
        </div>
      )
    }

    return (
      <React.Fragment>
        {_.map(list, v => (
          <LeafItem
            key={v.value}
            leaf={v}
            checked={_.includes(selectedValues, v.value)}
            onChange={this.handleChange}
            onClickName={onClickLeafName ? this.handleClickLeafName : undefined}
          />
        ))}
      </React.Fragment>
    )
  }
}

List.propTypes = {
  groupSelected: PropTypes.array.isRequired,
  onGroupSelect: PropTypes.func.isRequired,

  list: PropTypes.array.isRequired,
  selectedValues: PropTypes.array.isRequired,
  onSelectValues: PropTypes.func.isRequired,
  showGroupCheckbox: PropTypes.func.isRequired,

  onClickLeafName: PropTypes.func,
  onClickCheckbox: PropTypes.func
}

export default List
