import React from 'react'
import ReactTable from 'react-table'
import classNames from 'classnames'
import { getLocale } from '../src/locales'

class BaseTable extends React.Component {
  render () {
    const {
      data,
      defaultPageSize,
      showPagination,
      className,
      ...rest
    } = this.props

    return (
      <ReactTable
        {...rest}
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
