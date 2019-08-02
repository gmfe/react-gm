import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import MoreSelect from '../more_select'
import Flex from '../flex'
import _ from 'lodash'
import { getColumnKey } from '../../../table/util'
import classNames from 'classnames'

/** 和 MoreSelect 类似。多了 columns，和不能多选 */
const TableSelect = React.forwardRef((props, ref) => {
  const { data, columns, className, ...rest } = props

  // 检测
  if (process.env.NODE_ENV !== 'production') {
    useEffect(() => {
      _.each(columns, column => {
        if (!column.width) {
          console.warn('column need width', column)
        }
      })
    }, [])
  }

  const Title = (
    <Flex>
      {_.map(columns, (column, i) => (
        <div
          key={`${i}_${getColumnKey(column)}`}
          className={classNames('gm-flex-flex', {
            'gm-flex-none': column.width
          })}
          style={{
            width: `${column.width}px`
          }}
        >
          {column.Header}
        </div>
      ))}
    </Flex>
  )

  const newData =
    data.length !== 0
      ? [
          {
            label: Title,
            children: data
          }
        ]
      : []

  const renderListItem = (item, index) => {
    return (
      <Flex key={item.value}>
        {_.map(columns, (column, i) => {
          let content = null
          if (column.Cell) {
            content = column.Cell({
              item,
              index
            })
          } else if (_.isFunction(column.accessor)) {
            content = column.accessor(item)
          } else if (_.isString(column.accessor)) {
            content = _.get(item, column.accessor)
          }

          if (content === null || content === undefined) {
            content = <div className='gm-text-desc'>-</div>
          }
          return (
            <div
              key={`${i}_${getColumnKey(column)}`}
              className={classNames('gm-flex-flex', {
                'gm-flex-none': column.width
              })}
              style={{
                width: `${column.width}px`
              }}
            >
              {content}
            </div>
          )
        })}
      </Flex>
    )
  }

  return (
    <MoreSelect
      ref={ref}
      {...rest}
      isGroupList
      data={newData}
      renderListItem={renderListItem}
      className={classNames('gm-table-select', className)}
      popupClassName='gm-table-select-popup'
    />
  )
})

TableSelect.propTypes = {
  /** 全部展示，没有过滤 */
  data: PropTypes.array.isRequired,
  selected: PropTypes.any,
  onSelect: PropTypes.func.isRequired,
  /** 类似 ReactTable  [{Header, accessor, Cell, width}] */
  columns: PropTypes.array.isRequired,

  // 状态
  disabled: PropTypes.bool,

  // 列表 搜索
  onSearch: PropTypes.func, // searchValue, data
  delay: PropTypes.number,
  searchPlaceholder: PropTypes.string,
  renderListFilter: PropTypes.func, // 过滤，提供 searchValue 和 data
  renderListFilterType: PropTypes.oneOf(['default', 'pinyin']), // 也可简单指定 默认的过滤类型

  // 展示
  placeholder: PropTypes.string,
  renderSelected: PropTypes.func, // 定制已选的区域，提供 selected

  // 样式
  listMaxHeight: PropTypes.string,

  popoverType: PropTypes.oneOf(['focus', 'realFocus']),

  className: PropTypes.string,
  style: PropTypes.object,
  popupClassName: PropTypes.string,

  /** 目前为了 keyboard */
  onKeyDown: PropTypes.func
}

export default TableSelect
