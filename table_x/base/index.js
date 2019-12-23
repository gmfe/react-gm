import React from 'react'
import PropTypes from 'prop-types'
import { useTable, useSortBy } from 'react-table'
import {
  Empty,
  Loading,
  SortHeader,
  getColumnStyle,
  afterScroll,
  __DEFAULT_COLUMN
} from '../util'
import classNames from 'classnames'
import _ from 'lodash'

// 覆盖默认 按下 shift 多选
const handleIsMultiSortEvent = () => true

// 给定初始值，交由getColumnStyle控制。width逻辑保持跟react-table（v6）的用法一致。
const defaultColumn = __DEFAULT_COLUMN

const Th = ({ column, totalWidth }) => {
  const hp = column.getHeaderProps()

  const thProps = {
    ...hp,
    className: classNames('gm-table-x-th', hp.className, {
      'gm-table-x-fixed-left': column.fixed === 'left',
      'gm-table-x-fixed-right': column.fixed === 'right'
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
    </div>
  )
}

Th.propTypes = {
  column: PropTypes.object.isRequired,
  totalWidth: PropTypes.number.isRequired
}

const THead = ({ headerGroups, totalWidth }) => {
  return (
    <div className='gm-table-x-thead'>
      {headerGroups.map((headerGroup, i) => (
        <div key={i} className='gm-table-x-tr'>
          {headerGroup.headers.map((column, i) => (
            <Th key={i} column={column} totalWidth={totalWidth} />
          ))}
        </div>
      ))}
    </div>
  )
}

THead.propTypes = {
  headerGroups: PropTypes.array.isRequired,
  totalWidth: PropTypes.number.isRequired
}

const Td = ({ cell, totalWidth }) => {
  const cp = cell.getCellProps()
  const tdProps = {
    ...cp,
    className: classNames('gm-table-x-td', {
      'gm-table-x-fixed-left': cell.column.fixed === 'left',
      'gm-table-x-fixed-right': cell.column.fixed === 'right'
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

const TableX = ({
  columns,
  data,
  loading,
  disableSortBy,
  disableMultiSort,
  SubComponent,
  ContainerComponent,
  keyField,
  className,
  tiled,
  onScroll,
  isTrDisable,
  ...rest
}) => {
  // diy fixed(最新rc12不支持column.show,自己实现)
  columns = React.useMemo(() => columns.filter(c => c.show !== false), [
    columns
  ])

  const {
    getTableProps,
    headerGroups,
    getTableBodyProps,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data,
      disableSortBy,
      disableMultiSort,
      isMultiSortEvent: handleIsMultiSortEvent,
      defaultColumn
    },
    useSortBy
  )

  const gtp = getTableProps()
  const tableProps = {
    ...gtp,
    className: classNames('gm-table-x-table', gtp.className)
  }

  const gtbp = getTableBodyProps()
  const tableBodyProps = {
    ...gtbp,
    className: 'gm-table-x-tbody'
  }

  let totalWidth = 0
  if (rows[0] && rows[0].cells.length > 0) {
    prepareRow(rows[0])
    const last = rows[0].cells[rows[0].cells.length - 1].column
    totalWidth = last.totalLeft + last.totalWidth
  }

  const handleScroll = e => {
    onScroll && onScroll(e)
    afterScroll()
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
        totalWidth={totalWidth}
        isTrDisable={isTrDisable}
      />
    )
  }

  const Wrap = React.forwardRef(({ children, ...rest }, ref) => (
    <div ref={ref} {...rest} {...tableProps}>
      <THead headerGroups={headerGroups} totalWidth={totalWidth} />
      <div {...tableBodyProps}>{children}</div>
    </div>
  ))

  return (
    <div
      {...rest}
      className={classNames(
        'gm-table-x',
        {
          'gm-table-x-empty': data.length === 0,
          'gm-table-x-tiled': tiled
        },
        className
      )}
      onScroll={handleScroll}
    >
      <ContainerComponent rows={rows} Wrap={Wrap} RenderRow={RenderRow} />
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
  disableSortBy: PropTypes.bool,
  disableMultiSort: PropTypes.bool,
  SubComponent: PropTypes.func,
  /** 为了接入虚拟列表，抽象 container 层 */
  ContainerComponent: PropTypes.func,
  /** 由其他 hoc 传下来 */
  keyField: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  /** table是否平铺 */
  tiled: PropTypes.bool,
  onScroll: PropTypes.func,
  /** 当前行是否disable */
  isTrDisable: PropTypes.func
}

// eslint-disable-next-line
const ContainerComponent = ({ rows, Wrap, RenderRow }) => (
  <Wrap>
    {_.map(rows, row =>
      RenderRow({
        index: row.index,
        style: {}
      })
    )}
  </Wrap>
)

TableX.defaultProps = {
  keyField: 'value',
  disableSortBy: true,
  tiled: false,
  isTrDisable: () => false,
  ContainerComponent
}

export default TableX
