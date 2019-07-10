import React from 'react'
import classNames from 'classnames'
import Table from '../table'

const EditTable = props => {
  const { className, ...rest } = props
  return (
    <Table {...rest} className={classNames('gm-react-edit-table', className)} />
  )
}

EditTable.propTypes = {
  ...Table.propTypes
}

export default EditTable
