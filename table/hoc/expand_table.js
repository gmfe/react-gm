import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Table from '../table'
import { referOfWidth } from '../util'
import SVGExpand from '../../svg/expand.svg'
import SVGCloseup from '../../svg/closeup.svg'

const convertGMToRT = (data, expanded, keyField) => {
  const rtExpanded = {}
  _.forEach(data, (value, index) => {
    if (_.includes(expanded, value[keyField])) {
      rtExpanded[index] = true
    }
  })

  return rtExpanded
}

const convertRTToGM = (data, expanded, keyField) => {
  const gmExpanded = []
  _.forEach(expanded, (value, index) => {
    if (value) {
      gmExpanded.push(data[index][keyField])
    }
  })
  return gmExpanded
}

function expandTableHOC(Component) {
  class ExpandTable extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        hasExpandState: !!props.expanded, // 外部控制expanded
        innerExpanded: {}
      }
    }

    componentDidMount() {
      const { keyField, onExpand } = this.props
      if (this.state.hasExpandState && (!keyField || !onExpand)) {
        console.error('传了expanded，则必须传keyField和onExpand')
      }
    }

    handleExpandAll = () => {
      const { data, expanded, onExpand, keyField } = this.props
      const { innerExpanded, hasExpandState } = this.state

      if (hasExpandState) {
        // 注意此逻辑
        const isAllExpanded = expanded.length === data.length

        if (isAllExpanded) {
          onExpand([])
        } else {
          const newExpanded = []
          _.each(data, v => {
            newExpanded.push(v[keyField])
          })
          onExpand(newExpanded)
        }
        return
      }

      // 注意此逻辑
      const isAllExpanded =
        _.filter(innerExpanded, v => v).length === data.length

      if (isAllExpanded) {
        this.setState({
          innerExpanded: {}
        })
      } else {
        const newExpanded = {}
        _.each(data, (v, i) => {
          newExpanded[i] = {}
        })
        this.setState({
          innerExpanded: newExpanded
        })
      }
    }

    renderHeader = () => {
      const { data, expanded } = this.props
      const { innerExpanded, hasExpandState } = this.state

      // 注意此逻辑
      let isAllExpanded = false
      if (hasExpandState) {
        isAllExpanded = expanded.length === data.length
      } else {
        isAllExpanded = _.filter(innerExpanded, v => v).length === data.length
      }

      return (
        <div className='gm-cursor' onClick={this.handleExpandAll}>
          {isAllExpanded ? (
            <SVGCloseup className='react-table-closeup active' />
          ) : (
            <SVGExpand className='react-table-expand' />
          )}
        </div>
      )
    }

    renderExpander = ({ row, index }) => {
      const { expanded, keyField } = this.props
      const { hasExpandState, innerExpanded } = this.state

      // 注意此逻辑
      let isExpanded = false
      if (hasExpandState) {
        isExpanded = _.includes(expanded, row[keyField])
      } else {
        isExpanded = innerExpanded[index]
      }

      return (
        <div>
          {isExpanded ? (
            <SVGCloseup className='react-table-closeup active' />
          ) : (
            <SVGExpand className='react-table-expand' />
          )}
        </div>
      )
    }

    handleExpandedChange = expanded => {
      const { data, onExpand, keyField } = this.props

      if (this.state.hasExpandState) {
        onExpand(convertRTToGM(data, expanded, keyField))
        return
      }

      this.setState({
        innerExpanded: expanded
      })
    }

    render() {
      const { columns, expanded, data, keyField, ...rest } = this.props
      const { hasExpandState, innerExpanded } = this.state
      let rtExpanded = {}
      if (hasExpandState) {
        // react-table 的expanded只接受obj,需要转一下
        rtExpanded = convertGMToRT(data, expanded, keyField)
      } else {
        rtExpanded = innerExpanded
      }

      return (
        <Component
          {...rest}
          data={data}
          keyField={keyField}
          columns={[
            {
              id: '__expander', // 不要随便更改
              expander: true,
              Header: this.renderHeader,
              Expander: this.renderExpander,
              width: referOfWidth.noCell
            },
            ...columns
          ]}
          expanded={rtExpanded}
          onExpandedChange={this.handleExpandedChange}
        />
      )
    }
  }

  ExpandTable.propTypes = {
    ...Table.propTypes,
    /** 子Table */
    SubComponent: PropTypes.func.isRequired,
    /** 自定义展开项的id */
    keyField: PropTypes.string.isRequired,
    /** 展开项数组[keyField]，传了此值则必须传keyField和onExpand */
    expanded: PropTypes.array,
    onExpand: PropTypes.func
  }

  ExpandTable.defaultProps = {
    keyField: 'value',
    expanded: [],
    onExpand: _.noop()
  }

  return ExpandTable
}

export default expandTableHOC
