import React from 'react'
import PropTypes from 'prop-types'
import { useTable, useSortBy, useResizeColumns } from 'react-table'
import {
  Empty,
  Loading,
  SortHeader,
  Resizer,
  getColumnStyle,
  afterScroll
} from '../util'
import classNames from 'classnames'
import _ from 'lodash'

// 覆盖默认 按下 shift 多选
const handleIsMultiSortEvent = () => true

const defaultColumn = {
  minWidth: 50,
  // 不能动 useResizeColumns 貌似默认了 150
  width: 150,
  maxWidth: 500
}

const Th = ({ column, totalWidth }) => {
  const hp = column.getHeaderProps()

  const thProps = {
    ...hp,
    className: classNames('gm-tablex-th', hp.className, {
      'gm-tablex-fixed-left': column.fixed === 'left',
      'gm-tablex-fixed-right': column.fixed === 'right'
    }),
    style: {
      ...hp.style,
      ...getColumnStyle(column)
    }
  }

  if (column.fixed === 'left') {
    thProps.style.left = column.totalLeft
  } else if (column.fixed === 'right') {
    thProps.style.right = totalWidth - column.totalLeft - column.totalWidth
  }

  return (
    <div {...thProps}>
      <div>
        {column.render('Header')}
        {column.canSort && (
          <SortHeader
            {...column.getSortByToggleProps()}
            type={
              column.isSorted ? (column.isSortedDesc ? 'desc' : 'asc') : null
            }
          />
        )}
      </div>
      <Resizer {...column.getResizerProps()} />
    </div>
  )
}

Th.propTypes = {
  column: PropTypes.object.isRequired,
  totalWidth: PropTypes.number.isRequired
}

const THead = ({ headers }) => {
  let totalWidth = 0
  if (headers.length > 0) {
    const last = headers[headers.length - 1]
    totalWidth = last.totalLeft + last.totalWidth
  }

  return (
    <div className='gm-tablex-thead'>
      <div className='gm-tablex-tr'>
        {headers.map(column => (
          <Th key={column.index} column={column} totalWidth={totalWidth} />
        ))}
      </div>
    </div>
  )
}

THead.propTypes = {
  headers: PropTypes.array.isRequired
}

const Td = ({ cell, totalWidth }) => {
  const cp = cell.getCellProps()
  const tdProps = {
    ...cp,
    className: classNames('gm-tablex-td', {
      'gm-tablex-fixed-left': cell.column.fixed === 'left',
      'gm-tablex-fixed-right': cell.column.fixed === 'right'
    }),
    style: {
      ...cp.style,
      ...getColumnStyle(cell.column)
    }
  }

  if (cell.column.fixed === 'left') {
    // 用到 fixed，可以利用 totalLeft
    tdProps.style.left = cell.column.totalLeft
  } else if (cell.column.fixed === 'right') {
    tdProps.style.right =
      totalWidth - cell.column.totalLeft - cell.column.totalWidth
  }

  return <div {...tdProps}>{cell.render('Cell')}</div>
}

Td.propTypes = {
  cell: PropTypes.object.isRequired,
  totalWidth: PropTypes.number.isRequired
}

const Tr = ({ row, SubComponent, keyField, style }) => {
  const gp = row.getRowProps()
  const props = {
    ...gp,
    className: 'gm-tablex-tr'
  }

  let totalWidth = 0
  if (row.cells.length > 0) {
    const last = row.cells[row.cells.length - 1].column
    totalWidth = last.totalLeft + last.totalWidth
  }

  // 目前视为了 srotable 用。值可能是 undefined，keyField 没作用的情况
  const dataId = row.original[keyField]

  return (
    <div className='gm-tablex-tr-group' data-id={dataId} style={style}>
      <div {...props}>
        {row.cells.map((cell, cellIndex) => (
          <Td key={cellIndex} cell={cell} totalWidth={totalWidth} />
        ))}
      </div>
      {SubComponent && <div className='gm-tablex-sub'>{SubComponent(row)}</div>}
    </div>
  )
}

Tr.propTypes = {
  row: PropTypes.object.isRequired,
  SubComponent: PropTypes.func,
  keyField: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired
}

const TBody = ({
  data,
  SubComponent,
  rows,
  prepareRow,
  getTableBodyProps,
  keyField,
  RowsContainerComponent
}) => {
  const gtbp = getTableBodyProps()
  const props = {
    ...gtbp,
    className: 'gm-tablex-tbody'
  }

  // eslint-disable-next-line
  const RenderRow = ({ index, style }) => {
    const row = rows[index]
    prepareRow(row)
    return (
      <Tr
        key={row.index}
        row={row}
        SubComponent={SubComponent}
        keyField={keyField}
        style={style}
      />
    )
  }

  return (
    <div {...props}>
      <RowsContainerComponent rows={rows}>{RenderRow}</RowsContainerComponent>
    </div>
  )
}

TBody.propTypes = {
  data: PropTypes.array.isRequired,
  SubComponent: PropTypes.func,
  rows: PropTypes.array.isRequired,
  prepareRow: PropTypes.func.isRequired,
  getTableBodyProps: PropTypes.func.isRequired,
  keyField: PropTypes.string.isRequired,
  RowsContainerComponent: PropTypes.func.isRequired
}

const TableX = ({
  columns,
  data,
  loading,
  disableSorting,
  disableMultiSort,
  SubComponent,
  RowsContainerComponent,
  keyField,
  className,
  ...rest
}) => {
  const {
    getTableProps,
    headers,
    getTableBodyProps,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data,
      disableSorting,
      disableMultiSort,
      isMultiSortEvent: handleIsMultiSortEvent,
      defaultColumn
    },
    useSortBy,
    useResizeColumns
  )

  const rtp = getTableProps()
  const tableProps = {
    ...rtp,
    className: classNames('gm-tablex-table', rtp.className)
  }

  const handleScroll = () => {
    afterScroll()
  }

  return (
    <div
      {...rest}
      className={classNames(
        'gm-tablex',
        {
          'gm-tablex-empty': data.length === 0
        },
        className
      )}
      onScroll={handleScroll}
    >
      <div {...tableProps}>
        <THead headers={headers} />
        <TBody
          data={data}
          SubComponent={SubComponent}
          rows={rows}
          prepareRow={prepareRow}
          getTableBodyProps={getTableBodyProps}
          keyField={keyField}
          RowsContainerComponent={RowsContainerComponent}
        />
      </div>
      {loading && <Loading />}
      {!loading && data.length === 0 && <Empty />}
    </div>
  )
}

TableX.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  /** 默认禁用，如需提供 false， */
  disableSorting: PropTypes.bool,
  disableMultiSort: PropTypes.bool,
  SubComponent: PropTypes.func,
  /** 为了接入虚拟列表 */
  RowsContainerComponent: PropTypes.func,
  /* 由其他 hoc 传下来 */
  keyField: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
}

TableX.defaultProps = {
  keyField: 'value',
  disableSorting: true,
  // eslint-disable-next-line
  RowsContainerComponent: ({ rows, children }) => (
    <>
      {_.map(rows, (row, index) =>
        children({
          index,
          style: {}
        })
      )}
    </>
  )
}

export default TableX
