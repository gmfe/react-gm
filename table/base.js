import React from 'react'
import ReactTable from 'react-table'
import classNames from 'classnames'
import { getLocale } from '../src/locales'
import _ from 'lodash'

class BaseTable extends React.Component {
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
        v.columns = _.map(v.columns, vv => {
          let Cell = vv.Cell
          if (Cell) {
            Cell = row => (row.value === undefined || row.value === null) ? <span
              className='gm-text-desc'>-</span> : row.value
          }
          return {
            ...vv,
            minWidth: vv.minWidth && undefined,
            Cell
          }
        })
      } else {
        let Cell = v.Cell
        if (!Cell) {
          Cell = row => (row.value === undefined || row.value === null) ? <span
            className='gm-text-desc'>-</span> : row.value
        }

        return {
          ...v,
          minWidth: v.minWidth && undefined,
          Cell
        }
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
