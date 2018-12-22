import React from 'react'
import PropTypes from 'prop-types'
import BaseTable from './base'
import _ from 'lodash'

class ExpandTable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      expanded: {}
    }
  }

  handleExpandAll = (isAllExpanded) => {
    const { data } = this.props

    if (isAllExpanded) {
      this.setState({
        expanded: {}
      })
    } else {
      const newExpanded = {}
      _.each(data, (v, i) => {
        newExpanded[i] = {}
      })
      this.setState({
        expanded: newExpanded
      })
    }
  }

  renderHeader = () => {
    const { data } = this.props
    const { expanded } = this.state

    // 注意此逻辑
    const isAllExpanded = _.filter(expanded, v => v).length === data.length

    return (
      <div className='gm-cursor' onClick={this.handleExpandAll.bind(this, isAllExpanded)}>
        {isAllExpanded ? <i className='xfont xfont-minus'/> : <i
          className='xfont xfont-plus'/>}
      </div>
    )
  }

  renderExpander = ({ index }) => {
    const { expanded } = this.state

    return (
      <div>
        {expanded[index] ? <i className='xfont xfont-minus'/> : <i className='xfont xfont-plus'/>}
      </div>
    )
  }

  handleExpandedChange = (expanded) => {
    this.setState({
      expanded
    })
  }

  render () {
    const {
      columns,
      ...rest
    } = this.props
    const { expanded } = this.state

    return (
      <BaseTable
        {...rest}
        columns={[{
          expander: true,
          Header: this.renderHeader,
          Expander: this.renderExpander
        }, ...columns]}
        expanded={expanded}
        onExpandedChange={this.handleExpandedChange}
      />
    )
  }
}

ExpandTable.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  SubComponent: PropTypes.func.isRequired
}

export default ExpandTable
