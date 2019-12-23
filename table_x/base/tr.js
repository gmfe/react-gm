import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import Td from './td'

const Tr = ({
  row,
  SubComponent,
  keyField,
  style,
  totalWidth,
  isTrDisable
}) => {
  const gp = row.getRowProps()

  const props = {
    ...gp,
    className: classNames('gm-table-x-tr', {
      'gm-table-x-tr-disable': isTrDisable(row.original, row.index),
      'gm-table-x-tr-odd': row.index % 2 === 0,
      'gm-table-x-tr-even': row.index % 2 !== 0
    })
  }

  // 目前视为了 srotable 用。值可能是 undefined，keyField 没作用的情况
  const dataId = row.original[keyField]

  return (
    <div className='gm-table-x-tr-group' data-id={dataId} style={style}>
      <div {...props}>
        {row.cells.map((cell, cellIndex) => (
          <Td key={cellIndex} cell={cell} totalWidth={totalWidth} />
        ))}
      </div>
      {SubComponent && (
        <div className='gm-table-x-sub'>{SubComponent(row)}</div>
      )}
    </div>
  )
}

Tr.propTypes = {
  row: PropTypes.object.isRequired,
  SubComponent: PropTypes.func,
  keyField: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  totalWidth: PropTypes.number.isRequired,
  isTrDisable: PropTypes.func
}

export default Tr
