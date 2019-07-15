import React from 'react'
import PropTypes from 'prop-types'
import Table from '../table'

// 固定第一列，默认用来固定 select table 第一列
function fixedFirstColumnsTableHOC(Component) {
  const FixedFirstColumnsTable = props => {
    const { columns, firstColumnWidth, ...rest } = props

    const newColumns = [
      { ...columns[0], fixed: 'left', width: firstColumnWidth },
      ...columns.slice(1)
    ]

    return <Component {...rest} columns={newColumns} />
  }

  FixedFirstColumnsTable.propTypes = {
    ...Table.propTypes,
    columns: PropTypes.array.isRequired,
    firstColumnWidth: PropTypes.number
  }

  FixedFirstColumnsTable.defaultProps = {
    firstColumnWidth: 40
  }

  return FixedFirstColumnsTable
}

export default fixedFirstColumnsTableHOC
