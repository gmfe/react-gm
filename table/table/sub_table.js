import React from 'react'
import classNames from 'classnames'
import Table from './base'
import { referOfWidth } from '../util'

const SubTable = props => {
  const { columns, className, ...rest } = props
  return (
    <Table
      {...rest}
      columns={[
        {
          Header: '',
          maxWidth: referOfWidth.noCell,
          accessor: '__null', // 不重要,随便写
          Cell: () => null, // 只是用来占据空间
          filterable: false,
          sortable: false,
          resizable: false
        },
        ...columns
      ]}
      className={classNames('gm-react-sub-table', className)}
    />
  )
}

SubTable.propTypes = Table.propTypes

export default SubTable
