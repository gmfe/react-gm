import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Table from '../table'
import SVGPlus from '../../svg/plus.svg'
import SVGMinus from '../../svg/minus.svg'

function expandTableHOC(Component) {
  class ExpandTable extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        expanded: {}
      }
    }

    handleExpandAll = () => {
      const { data } = this.props
      const { expanded } = this.state

      // 注意此逻辑
      const isAllExpanded = _.filter(expanded, v => v).length === data.length

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
        <div className='gm-cursor' onClick={this.handleExpandAll}>
          {isAllExpanded ? <SVGMinus /> : <SVGPlus />}
        </div>
      )
    }

    renderExpander = ({ index }) => {
      const { expanded } = this.state

      return <div>{expanded[index] ? <SVGMinus /> : <SVGPlus />}</div>
    }

    handleExpandedChange = expanded => {
      this.setState({
        expanded
      })
    }

    render() {
      const { columns, ...rest } = this.props
      const { expanded } = this.state

      return (
        <Component
          {...rest}
          columns={[
            {
              expander: true,
              Header: this.renderHeader,
              Expander: this.renderExpander
            },
            ...columns
          ]}
          expanded={expanded}
          onExpandedChange={this.handleExpandedChange}
        />
      )
    }
  }

  ExpandTable.propTypes = {
    ...Table.propTypes,
    SubComponent: PropTypes.func.isRequired
  }

  return ExpandTable
}

export default expandTableHOC
