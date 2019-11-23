import React from 'react'
import classNames from 'classnames'
import TableX from '../base'

const editTableXHOC = Component => {
  const EditTable = ({ className, ...rest }) => (
    <Component
      {...rest}
      className={classNames('gm-table-x-edit-table', className)}
    />
  )

  EditTable.propTypes = {
    ...TableX.propTypes
  }

  return EditTable
}

export default editTableXHOC
