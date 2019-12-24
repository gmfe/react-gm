import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import TableX from '../base'
import { TABLE_X, TABLE_X_SUB_TABLE_ID } from '../util'

const subTableXHOC = Component => {
  const SubTable = ({ subTableIndent, columns, className, ...rest }) => {
    const _columns = React.useMemo(
      () =>
        [
          {
            id: TABLE_X_SUB_TABLE_ID,
            width: subTableIndent,
            maxWidth: subTableIndent,
            Header: ''
          }
        ].concat(columns),
      [columns, subTableIndent]
    )

    return (
      <Component
        {...rest}
        columns={_columns}
        className={classNames('gm-table-x-sub-table', className)}
      />
    )
  }

  SubTable.propTypes = {
    ...TableX.propTypes,
    /** 默认功能区的宽度 */
    subTableIndent: PropTypes.number
  }

  SubTable.defaultProps = {
    subTableIndent: TABLE_X.WIDTH_FUN
  }

  return SubTable
}

export default subTableXHOC
