import React from 'react'
import ReactTable from 'react-table'
import classNames from 'classnames'
import { getLocale } from '../src/locales'
import _ from 'lodash'
import { SortHeader } from './util'

class BaseTable extends React.Component {
  processItem = (item) => {
    let Cell = item.Cell
    if (!Cell) {
      Cell = row => {
        if (row.value === undefined || row.value === null || row.value === '') {
          return <span className='gm-text-desc'>-</span>
        }
        return row.value
      }
    }

    let Header = item.Header
    if (_.isString(Header) && item.sortable) {
      Header = <SortHeader>{Header}</SortHeader>
    }

    return {
      ...item,
      Header,
      sortable: !!item.sortable,
      // 有意义，如果是 undefined, 则赋值 undefined，覆盖默认值 100
      minWidth: item.minWidth,
      Cell
    }
  }

  render () {
    const {
      data, columns,
      defaultPageSize,
      showPagination,
      className,
      ...rest
    } = this.props

    const newColumns = _.map(columns, v => {
      // groups 的形式
      if (v.columns) {
        const columns = _.map(v.columns, vv => this.processItem(vv))

        return {
          ...v,
          columns
        }
      } else {
        return this.processItem(v)
      }
    })

    return (
      <ReactTable
        {...rest}
        columns={newColumns}
        data={data}
        defaultPageSize={defaultPageSize}
        pageSize={Math.min(defaultPageSize, Math.max(data.length, 1))}
        className={classNames('gm-react-table -striped -highlight', className)}
        showPagination={showPagination}
      />
    )
  }
}

BaseTable.defaultProps = {
  showPagination: false,
  keyField: 'value',
  defaultPageSize: 10,
  noDataText: getLocale('table', 'noDataText'),
  loadingText: getLocale('table', 'loadingText')
}

export default BaseTable
