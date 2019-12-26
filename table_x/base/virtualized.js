import React from 'react'
import PropTypes from 'prop-types'
import { useTable } from 'react-table'
import { Empty, Loading, afterScroll, __DEFAULT_COLUMN, TABLE_X } from '../util'
import classNames from 'classnames'
import _ from 'lodash'
import THead from './thead'
import Tr from './tr'
import { VariableSizeList, areEqual } from 'react-window'

// 见
// https://react-window.now.sh/#/api/FixedSizeList innerElementType
// https://react-window.now.sh/#/examples/list/memoized-list-items

const RenderRow = React.memo(({ data, index, style }) => {
  if (index === 0) {
    return <div style={style} />
  }

  index = index - 1

  const {
    prepareRow,
    rows,
    SubComponent,
    keyField,
    totalWidth,
    isTrDisable
  } = data

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
}, areEqual)

RenderRow.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired
}

// 给定初始值，交由getColumnStyle控制。width逻辑保持跟react-table（v6）的用法一致。
const defaultColumn = __DEFAULT_COLUMN

const TableXVirtualized = ({
  columns,
  data,
  loading,
  SubComponent,
  keyField,
  className,
  tiled,
  onScroll,
  isTrDisable,

  virtualizedHeight,
  virtualizedItemSize,
  refVirtualized,
  initialScrollOffset,

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
  } = useTable({
    columns,
    data,
    defaultColumn
  })

  let totalWidth = 0
  if (rows[0] && rows[0].cells.length > 0) {
    prepareRow(rows[0])
    const last = rows[0].cells[rows[0].cells.length - 1].column
    totalWidth = last.totalLeft + last.totalWidth
  }

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

  const handleScroll = e => {
    onScroll && onScroll(e)
    afterScroll()
  }

  // 响应 columns 变化应该够了
  const Container = React.useMemo(() => {
    return React.forwardRef(({ children, style, ...rest }, ref) => {
      return (
        <div
          ref={ref}
          {...rest}
          {...tableProps}
          style={{ ...style, minWidth: totalWidth + 'px' }}
        >
          <THead headerGroups={headerGroups} totalWidth={totalWidth} />
          <div {...tableBodyProps}>{children}</div>
        </div>
      )
    })
  }, [columns])

  const itemSize = index => {
    if (index === 0) {
      return TABLE_X.HEIGHT_HEAD_TR
    }

    if (_.isFunction(virtualizedItemSize)) {
      return virtualizedItemSize(index - 1)
    }

    return virtualizedItemSize
  }

  const itemData = {
    rows,
    prepareRow,
    SubComponent,
    keyField,
    totalWidth,
    isTrDisable
  }

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
      <VariableSizeList
        ref={refVirtualized}
        height={virtualizedHeight}
        itemCount={rows.length + 1}
        itemData={itemData}
        itemSize={itemSize}
        innerElementType={Container}
        initialScrollOffset={initialScrollOffset}
        className='gm-table-x-virtualized'
      >
        {RenderRow}
      </VariableSizeList>
      {loading && <Loading />}
      {!loading && data.length === 0 && <Empty />}
    </div>
  )
}

TableXVirtualized.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  SubComponent: PropTypes.func,
  /** 由其他 hoc 传下来 */
  keyField: PropTypes.string,
  /** table是否平铺 */
  tiled: PropTypes.bool,
  /** 当前行是否disable */
  isTrDisable: PropTypes.func,
  onScroll: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,

  // 虚拟列表相关
  /** 需要提供 table 的高度 */
  virtualizedHeight: PropTypes.number.isRequired,
  /** 行的高度 */
  virtualizedItemSize: PropTypes.oneOfType([PropTypes.number, PropTypes.func])
    .isRequired,
  refVirtualized: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  initialScrollOffset: PropTypes.number
}

TableXVirtualized.defaultProps = {
  keyField: 'value',
  tiled: false,
  isTrDisable: () => false
}

export default TableXVirtualized
