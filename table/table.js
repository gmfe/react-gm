import React from 'react'
import PropTypes from 'prop-types'
import BaseTable from './base'
import diyTableHOC from './diy_table'

@diyTableHOC
class Table extends React.Component {
  render () {
    const {...rest} = this.props

    return <BaseTable {...rest}/>
  }
}

Table.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired
}

export default Table
