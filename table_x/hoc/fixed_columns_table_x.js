import React from 'react'
import TableX from '../base'
import _ from 'lodash'

function fixedColumnsTableXHOC(Component) {
  const FixedColumnTableX = ({ columns, ...rest }) => {
    return <Component {...rest} columns={columns} />
  }

  FixedColumnTableX.propTypes = {
    ...TableX.propTypes,
    /** 需要固定的 column 有 fixed 字段 */
    columns: props => {
      const { columns } = props

      _.each(columns, column => {
        if (column.fixed) {
          if (column.fixed !== 'left' && column.fixed !== 'right') {
            console.error('column fixed need to be left or right', column)
          }
        }
      })
    }
  }

  return FixedColumnTableX
}

export default fixedColumnsTableXHOC
