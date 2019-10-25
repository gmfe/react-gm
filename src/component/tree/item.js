import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from '../checkbox'
import Flex from '../flex'
import classNames from 'classnames'
import SVGPlus from '../../../svg/plus.svg'
import SVGMinus from '../../../svg/minus.svg'

const LeafItem = props => {
  const {
    leaf,
    checked,
    onChange,
    onClickName,
    renderLeafItem,
    disabled,
    _level
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
      className={classNames(
        'gm-hover-bg gm-tree-list-item gm-cursor ',
        `gm-level-${_level}`,
        {
          disabled
        }
      )}
      data-level={_level}
    >
      <Checkbox
        value={leaf.value}
        checked={checked}
        onChange={handleChange}
        className='gm-padding-0'
        disabled={disabled}
      />
      <Flex flex column onClick={handleName}>
        {renderLeafItem(leaf, handleChange)}
      </Flex>
    </Flex>
  )
}

LeafItem.propTypes = {
  leaf: PropTypes.object.isRequired,
  checked: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  onClickName: PropTypes.func,
  disabled: PropTypes.bool,
  // 自定义 leaf 渲染格式
  renderLeafItem: PropTypes.func,
  _level: PropTypes.number
}

LeafItem.defaultProps = {
  renderLeafItem: leaf => leaf.name
}

const GroupItem = props => {
  const {
    group,
    isOpen,
    hasCheckbox,
    checked,
    onChange,
    onGroup,
    renderGroupItem,
    onClickName,
    children,
    disabled,
    _level
  } = props

  const handleChange = () => {
    onChange(group, !checked)
  }

  const handleGroup = () => {
    onGroup(group)
  }

  const handleName = () => {
    if (onClickName) {
      onClickName(group)
    } else {
      handleGroup()
    }
  }

  return (
    <>
      <Flex
        className={classNames(
          'gm-tree-group-item gm-cursor gm-hover-bg',
          `gm-level-${_level}`,
          {
            disabled
          }
        )}
        data-level={_level}
      >
        <div className='gm-tree-group-item-expand' onClick={handleGroup}>
          {isOpen ? <SVGMinus /> : <SVGPlus />}
        </div>
        {hasCheckbox && (
          <Checkbox
            value
            checked={checked}
            className='gm-padding-0'
            onChange={handleChange}
            disabled={disabled}
          />
        )}
        <Flex flex column onClick={handleName}>
          {renderGroupItem(group, handleGroup)}
        </Flex>
      </Flex>
      {isOpen && <div className='gm-tree-group-list'>{children}</div>}
    </>
  )
}

GroupItem.propTypes = {
  group: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  hasCheckbox: PropTypes.bool.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onGroup: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  renderGroupItem: PropTypes.func,
  onClickName: PropTypes.func,
  disabled: PropTypes.bool,
  _level: PropTypes.number
}

GroupItem.defaultProps = {
  renderGroupItem: item => item.name
}

export { LeafItem, GroupItem }
