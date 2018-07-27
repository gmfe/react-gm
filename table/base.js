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
      let Cell = v.Cell
      if (!Cell) {
        Cell = row => (row.value === undefined || row.value === null) ? '-' : row.value
      }

      return {
        ...v,
        Cell
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
