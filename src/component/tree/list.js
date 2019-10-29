import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { getLeaf } from './util'
import { GroupItem, LeafItem } from './item'

class List extends React.Component {
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
    onSelectValues(
      isSelectGroup
        ? _.union(selectedValues, leafValues)
        : _.difference(selectedValues, leafValues)
    )

    if (onClickCheckbox) {
      onClickCheckbox(group, isSelectGroup)
    }
  }

  handleGroup = group => {
    const { groupSelected, onGroupSelect, onClickExpand } = this.props

    onGroupSelect(_.xor(groupSelected, [group.value]))

    if (onClickExpand) {
      onClickExpand(group, !groupSelected.includes(group.value))
    }
  }

  render() {
    const {
      disabled,
      groupSelected,
      list,
      selectedValues,
      showGroupCheckbox,
      onClickLeafName,
      onClickGroupName,
      renderLeafItem,
      renderGroupItem,

      _level
    } = this.props

    if (list.length === 0) {
      return null
    }

    const isGroupData = !!list[0].children

    if (isGroupData) {
      return (
        <div className='gm-tree-group'>
          {_.map(list, group => {
            const isOpen = _.includes(groupSelected, group.value)

            const leafValues = _.map(
              getLeaf(group.children),
              item => item.value
            )
            let isSelectGroup = false
            if (leafValues.length > 0) {
              isSelectGroup =
                _.filter(leafValues, value => _.includes(selectedValues, value))
                  .length === leafValues.length
            }

            return (
              <GroupItem
                key={group.value}
                group={group}
                isOpen={isOpen}
                hasCheckbox={showGroupCheckbox(group)}
                checked={isSelectGroup}
                onChange={this.handleSelectGroup}
                onGroup={this.handleGroup}
                onClickName={onClickGroupName}
                renderGroupItem={renderGroupItem}
                disabled={disabled}
                _level={_level}
              >
                <List
                  {...this.props}
                  list={group.children}
                  _level={_level + 1}
                />
              </GroupItem>
            )
          })}
        </div>
      )
    }

    return (
      <>
        {_.map(list, v => (
          <LeafItem
            key={v.value}
            leaf={v}
            checked={_.includes(selectedValues, v.value)}
            onChange={this.handleChange}
            onClickName={onClickLeafName}
            renderLeafItem={renderLeafItem}
            disabled={disabled}
            _level={_level}
          />
        ))}
      </>
    )
  }
}

List.propTypes = {
  disabled: PropTypes.bool,
  groupSelected: PropTypes.array.isRequired,
  onGroupSelect: PropTypes.func.isRequired,

  list: PropTypes.array.isRequired,
  selectedValues: PropTypes.array.isRequired,
  onSelectValues: PropTypes.func.isRequired,
  showGroupCheckbox: PropTypes.func.isRequired,

  onClickLeafName: PropTypes.func,
  onClickGroupName: PropTypes.func,
  onClickCheckbox: PropTypes.func,
  onClickExpand: PropTypes.func,

  // 自定义 leaf 渲染格式
  renderLeafItem: PropTypes.func,
  renderGroupItem: PropTypes.func,

  _level: PropTypes.number
}

List.defaultProps = {
  _level: 0
}

export default List
