import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classNames from 'classnames'
import Flex from '../flex'
import { getColumnKey } from '../../../table/util'

const Cell = props => {
  const { index, column, row, className, ...rest } = props

  let content = null
  if (column.Cell) {
    content = column.Cell({
      original: row,
      index
    })
  } else if (_.isFunction(column.accessor)) {
    content = column.accessor(row)
  } else if (_.isString(column.accessor)) {
    content = row[column.accessor]
  }

  if (content === null || content === undefined) {
    content = <div className='gm-text-desc'>-</div>
  }

  return (
    <div
      {...rest}
      className={classNames('gm-table-list-td gm-flex-flex', className)}
    >
      {content}
    </div>
  )
}

Cell.propTypes = {
  index: PropTypes.number.isRequired,
  column: PropTypes.object.isRequired,
  row: PropTypes.object.isRequired,
  className: PropTypes.string
}

/**
 * 功能类似 List，样式借鉴 react-table
 * */
const TableList = props => {
  const {
    data,
    columns,
    selected,
    onSelect,
    keyField,
    willActiveIndex,
    isScrollTo,
    className,
    ...rest
  } = props

  return (
    <div {...rest} className={classNames('gm-table-list', className)}>
      <Flex className='gm-table-list-head'>
        {_.map(columns, (column, i) => (
          <div
            key={`${i}_${getColumnKey(column)}`}
            className='gm-table-list-th gm-flex-flex'
          >
            {column.Header}
          </div>
        ))}
      </Flex>
      <div className='gm-table-list-body'>
        {_.map(data, (item, itemIndex) => (
          <Flex
            key={itemIndex}
            className={classNames('gm-table-list-tr', {
              active: selected.includes(item[keyField]),
              'will-active': willActiveIndex === itemIndex
            })}
          >
            {_.map(columns, (column, i) => (
              <Cell
                key={`${i}_${getColumnKey(column)}`}
                index={i}
                column={column}
                row={item}
                onClick={onSelect}
              />
            ))}
          </Flex>
        ))}
      </div>
    </div>
  )
}

TableList.propTypes = {
  /** [{value, text}] */
  data: PropTypes.array.isRequired,
  /** 类似 ReactTable  [{Header, accessor, Cell, width}] */
  columns: PropTypes.array.isRequired,
  selected: PropTypes.any,
  onSelect: PropTypes.func,
  keyField: PropTypes.string,

  willActiveIndex: PropTypes.number,

  // 滚动
  isScrollTo: PropTypes.bool,

  className: PropTypes.string,
  style: PropTypes.object
}

TableList.defaultProps = {
  onSelect: _.noop,
  keyField: 'value'
}

export default TableList
