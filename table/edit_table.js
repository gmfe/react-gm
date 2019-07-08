import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Table from './table'
import FixedColumnsTableHOC from './fixed_columns_table'

const FixedColumnsTable = FixedColumnsTableHOC(Table)

const EditTable = props => {
  const { className, ...rest } = props
  return (
    <FixedColumnsTable
      {...rest}
      className={classNames(className, 'gm-react-edit-table')}
    />
  )
}

EditTable.propTypes = {
  className: PropTypes.string
}

export default EditTable
