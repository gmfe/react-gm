import React from 'react'
import PropTypes from 'prop-types'
import {
  useTable,
  useSortBy,
  useResizeColumns,
  useAbsoluteLayout
} from 'react-table'
import {
  Empty,
  Loading,
  SortHeader,
  Resizer,
  getColumnStyle,
  afterScroll
} from '../util'
import classNames from 'classnames'

// 覆盖默认 按下 shift 多选
const handleIsMultiSortEvent = () => true

const defaultColumn = {
  minWidth: 50,
  // 不能动 useResizeColumns 貌似默认了 150
  // width: 150,
  maxWidth: 500
}

const Th = ({ column }) => {
  const hp = column.getHeaderProps()

  const thProps = {
    ...hp,
    className: classNames('gm-tablex-th', hp.className),
    style: {
      ...hp.style,
      ...getColumnStyle(column)
    }
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
  column: PropTypes.object.isRequired
}

const THead = ({ headers }) => {
  return (
    <div className='gm-tablex-thead'>
      <div className='gm-tablex-tr'>
        {headers.map(column => (
          <Th key={column.index} column={column} />
        ))}
      </div>
    </div>
  )
}

THead.propTypes = {
  headers: PropTypes.array.isRequired
}

const Td = ({ cell }) => {
  const cp = cell.getCellProps()
  const tdProps = {
    ...cp,
    className: 'gm-tablex-td',
    style: {
      ...cp.style,
      ...getColumnStyle(cell.column)
    }
  }

  return <div {...tdProps}>{cell.render('Cell')}</div>
}

Td.propTypes = {
  cell: PropTypes.object.isRequired
}

const Tr = ({ row }) => {
  const gp = row.getRowProps()
  const props = {
    ...gp,
    className: 'gm-tablex-tr'
  }

  return (
    <div {...props}>
      {row.cells.map((cell, cellIndex) => (
        <Td key={cellIndex} cell={cell} />
      ))}
    </div>
  )
}

Tr.propTypes = {
  row: PropTypes.object.isRequired
}

const TBody = ({
  data,
  loading,
  SubComponent,
  rows,
  prepareRow,
  getTableBodyProps
}) => {
  const gtbp = getTableBodyProps()
  const props = {
    ...gtbp,
    className: 'gm-tablex-tbody'
  }

  return (
    <div {...props}>
      {loading && <Loading />}
      {!loading && data.length === 0 && <Empty />}
      {!loading &&
        data.length > 0 &&
        rows.map(row => {
          prepareRow(row)
          return (
            <React.Fragment key={row.index}>
              <Tr row={row} />
              {SubComponent && (
                <div className='gm-tablex-sub'>{SubComponent(row)}</div>
              )}
            </React.Fragment>
          )
        })}
    </div>
  )
}

TBody.propTypes = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  SubComponent: PropTypes.func,
  rows: PropTypes.array.isRequired,
  prepareRow: PropTypes.func.isRequired,
  getTableBodyProps: PropTypes.func.isRequired
}

const TableX = ({
  columns,
  data,
  loading,
  disableSorting,
  disableMultiSort,
  SubComponent,
  className,
  style
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
      className={classNames('gm-tablex', className)}
      style={style}
      onScroll={handleScroll}
    >
      <div {...tableProps}>
        <THead headers={headers} />
        <TBody
          data={data}
          loading={loading}
          SubComponent={SubComponent}
          rows={rows}
          prepareRow={prepareRow}
          getTableBodyProps={getTableBodyProps}
        />
      </div>
    </div>
  )
}

TableX.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  disableSorting: PropTypes.bool,
  disableMultiSort: PropTypes.bool,
  SubComponent: PropTypes.func,
  className: PropTypes.string,

  style: PropTypes.object
}

TableX.defaultProps = {
  disableSorting: true
}

export default TableX
