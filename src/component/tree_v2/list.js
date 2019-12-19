import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Flex from '../flex'
import { Checkbox } from '../checkbox'
import SVGPlus from '../../../svg/plus.svg'
import SVGMinus from '../../../svg/minus.svg'
import { listToFlatFilterWithGroup, getValues, unSelectAll } from './util'
import { FixedSizeList } from 'react-window'

const Item = ({
  isGroup,
  onGroup,
  isSelected,
  onSelect,
  flatData: { isLeaf, level, data },
  style
}) => {
  const handleGroup = e => {
    e.stopPropagation()
    onGroup(data, !isGroup)
  }

  const handleRadio = e => {
    onSelect(data, !isSelected)
  }

  const handleName = () => {
    if (isLeaf) {
      onSelect(data, !isSelected)
    } else {
      onGroup(data, !isGroup)
    }
  }

  const nStyle = { ...style }

  if (isLeaf) {
    if (level !== 0) {
      nStyle.paddingLeft = `${level + 2}em`
    }
  } else {
    nStyle.paddingLeft = `${level}em`
  }

  return (
    <Flex alignCenter className='gm-tree-v2-list-item' style={nStyle}>
      {!isLeaf && (
        <div className='gm-padding-5' onClick={handleGroup}>
          {isGroup ? <SVGMinus /> : <SVGPlus />}
        </div>
      )}
      <Checkbox checked={isSelected} onChange={handleRadio} />
      <Flex flex column block onClick={handleName}>
        {data.text}
      </Flex>
    </Flex>
  )
}

Item.propTypes = {
  isGroup: PropTypes.bool.isRequired,
  onGroup: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  flatData: PropTypes.shape({
    isLeaf: PropTypes.bool.isRequired,
    level: PropTypes.number.isRequired,
    data: PropTypes.object.isRequired
  }),
  style: PropTypes.object.isRequired
}

const List = ({
  list,
  groupSelected,
  onGroupSelect,
  selectedValues,
  onSelectValues,
  listHeight
}) => {
  const flatList = useMemo(() => {
    return listToFlatFilterWithGroup(list, groupSelected)
  }, [list, groupSelected])

  const handleGroup = data => {
    onGroupSelect(_.xor(groupSelected, [data.value]))
  }

  const handleSelect = (data, isSelected) => {
    const values = getValues([data])

    if (isSelected) {
      onSelectValues(_.uniq(selectedValues.concat(values)))
    } else {
      onSelectValues(_.difference(selectedValues, values))
    }
  }

  // eslint-disable-next-line
  const Row = ({ index, style }) => {
    const item = flatList[index]
    const isGroup = groupSelected.includes(item.data.value)
    const isSelected = !unSelectAll([item.data], selectedValues)

    return (
      <Item
        key={item.data.value}
        isGroup={isGroup}
        onGroup={handleGroup}
        onSelect={handleSelect}
        isSelected={isSelected}
        flatData={item}
        style={style}
      />
    )
  }

  return (
    <FixedSizeList
      height={listHeight}
      itemCount={flatList.length}
      itemSize={28}
    >
      {Row}
    </FixedSizeList>
  )
}

List.propTypes = {
  list: PropTypes.array.isRequired,
  groupSelected: PropTypes.array.isRequired,
  onGroupSelect: PropTypes.func.isRequired,
  selectedValues: PropTypes.array.isRequired,
  onSelectValues: PropTypes.func.isRequired,
  listHeight: PropTypes.number.isRequired
}

export default List
