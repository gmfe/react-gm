import React from 'react'
import _ from 'lodash'
import classNames from 'classnames'
import Table from '../table'
import { devWarn } from '../../src/util'

const isLeftFixed = column => _.includes([true, 'left'], column.fixed)
const isRightFixed = column => column.fixed === 'right'
const isNotFixed = column => !column.fixed

const sortColumns = columns => [
  ...columns.filter(isLeftFixed),
  ...columns.filter(isNotFixed),
  ...columns.filter(isRightFixed)
]

function fixedColumnsTableHOC(Component) {
  class FixedColumnsTable extends React.Component {
    constructor(props) {
      super(props)

      // 检测
      devWarn(() => {
        _.each(props.columns, column => {
          if (column.fixed && !column.width) {
            console.error('column with fixed need width')
          } else if (!column.width && !column.minWidth) {
            // 这个警告即可
            console.warn('other column need width or minWidth', column)
          }
        })
      })
    }

    getLeftOffsetColumns(columns, index) {
      let offset = 0
      for (let i = 0; i < index; i += 1) {
        const column = columns[i]
        if (column.show !== false) {
          const width = column.width
          offset += width
        }
      }

      return offset
    }

    getRightOffsetColumns(columns, index) {
      let offset = 0
      for (let i = index + 1; i < columns.length; i += 1) {
        const column = columns[i]
        if (column.show !== false) {
          const width = column.width
          offset += width
        }
      }

      return offset
    }

    getColumnsWithFixed(columns, parentIsfixed) {
      return columns.map((column, index) => {
        const fixed = column.fixed || parentIsfixed || false

        const columnIsLeftFixed = isLeftFixed({ fixed })
        const columnIsRightFixed = isRightFixed({ fixed })

        const left =
          columnIsLeftFixed && this.getLeftOffsetColumns(columns, index)
        const right =
          columnIsRightFixed && this.getRightOffsetColumns(columns, index)

        const output = {
          ...column,
          fixed,
          className: classNames(
            fixed && 'gm-react-table-sticky-td-fixed',
            columnIsLeftFixed && 'gm-react-table-sticky-td-fixed-left',
            columnIsRightFixed && 'gm-react-table-sticky-td-fixed-right',
            column.className
          ),
          style: {
            left,
            right,
            ...column.style
          },
          headerClassName: classNames(
            fixed && 'gm-react-table-sticky-th-fixed',
            columnIsLeftFixed && 'gm-react-table-sticky-th-fixed-left',
            columnIsRightFixed && 'gm-react-table-sticky-th-fixed-right',
            column.headerClassName
          ),
          headerStyle: {
            left,
            right,
            ...column.headerStyle
          }
        }

        if (column.columns) {
          output.columns = this.getColumnsWithFixed(column.columns, fixed)
        }

        return output
      })
    }

    getColumns() {
      const { columns } = this.props
      const sortedColumns = sortColumns(columns)
      return this.getColumnsWithFixed(sortedColumns)
    }

    render() {
      const { columns, className, ...props } = this.props

      return (
        <Component
          {...props}
          className={classNames('gm-react-table-sticky', className)}
          columns={this.getColumns()}
        />
      )
    }
  }

  FixedColumnsTable.propTypes = {
    ...Table.propTypes
  }

  return FixedColumnsTable
}

export default fixedColumnsTableHOC
