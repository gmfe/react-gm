import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from '../checkbox'
import Flex from '../flex'

const LeafItem = (props) => {
  const {
    leaf,
    checked,
    onChange,
    onClickName
  } = props

  const handleChange = () => {
    onChange(leaf, !checked)
  }

  const handleName = () => {
    if (onClickName) {
      onClickName(leaf, checked)
    } else {
      handleChange()
    }
  }

  return (
    <Flex
      alignCenter
      className='gm-hover-bg gm-tree-group-list-item gm-cursor'
    >
      <Checkbox
        value={leaf.value}
        checked={checked}
        onChange={handleChange}
      />
      <Flex flex onClick={handleName}>
        {leaf.name}
      </Flex>
    </Flex>
  )
}

LeafItem.propTypes = {
  leaf: PropTypes.object.isRequired,
  checked: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  onClickName: PropTypes.func
}

const GroupItem = (props) => {
  const {
    group,
    isOpen,
    hasCheckbox,
    checked,
    onChange,
    onGroup,
    children
  } = props

  const handleChange = () => {
    onChange(group, !checked)
  }

  const handleGroup = () => {
    onGroup(group)
  }

  return (
    <React.Fragment>
      <Flex className='gm-tree-group-name gm-cursor gm-hover-bg'>
        {hasCheckbox && (
          <Checkbox
            value
            checked={checked}
            className='gm-padding-0'
            onChange={handleChange}
          />
        )}
        <Flex flex alignCenter onClick={handleGroup}>
          <span style={{ width: '1em' }}>{isOpen ? '-' : '+'}</span>&nbsp;{group.name}
        </Flex>
      </Flex>
      {isOpen && (
        <div className='gm-tree-group-list'>
          {children}
        </div>
      )}
    </React.Fragment>
  )
}

GroupItem.propTypes = {
  group: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  hasCheckbox: PropTypes.bool.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onGroup: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
}

export {
  LeafItem,
  GroupItem
}
