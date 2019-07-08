import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classNames from 'classnames'

const isLeftFixed = column => _.includes([true, 'left'], column.fixed)
const isRightFixed = column => column.fixed === 'right'
const isNotFixed = column => !column.fixed

const getColumnId = column => {
  if (column.id) return column.id
  if (typeof column.accessor === 'string') return column.accessor
  return null
}
const sortColumns = columns => [
  ...columns.filter(isLeftFixed),
  ...columns.filter(isNotFixed),
  ...columns.filter(isRightFixed)
]

function FixedColumnsTableHOC (Component) {
  class FixedColumnsTable extends React.Component {
    static propTypes = {
      columns: PropTypes.array.isRequired,
      className: PropTypes.string
    }

    static defaultProps = {
      className: null
    }

    constructor (props) {
      super(props)
      this.columnsWidth = {}
    }

    getLeftOffsetColumns (columns, index) {
      let offset = 0
      for (let i = 0; i < index; i += 1) {
        const column = columns[i]
        if (column.show !== false) {
          const id = getColumnId(column)
          const width =
            this.columnsWidth[id] || column.width || column.minWidth || 100
          offset += width
        }
      }

      return offset
    }

    getRightOffsetColumns (columns, index) {
      let offset = 0
      for (let i = index + 1; i < columns.length; i += 1) {
        const column = columns[i]
        if (column.show !== false) {
          const id = getColumnId(column)
          const width =
            this.columnsWidth[id] || column.width || column.minWidth || 100
          offset += width
        }
      }

      return offset
    }

    getColumnsWithFixed (columns, parentIsfixed) {
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

    getColumns () {
      const { columns } = this.props
      const sortedColumns = sortColumns(columns)
      return this.getColumnsWithFixed(sortedColumns)
    }

    render () {
      const { className, ...props } = this.props

      return (
        <Component
          {...props}
          className={classNames(className, 'gm-react-table-sticky')}
          columns={this.getColumns()}
        />
      )
    }
  }
  return FixedColumnsTable
}

export default FixedColumnsTableHOC
