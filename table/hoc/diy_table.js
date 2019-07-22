import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { Checkbox, Storage, Flex } from '../../src'
import { contains } from 'gm-util'
import { findDOMNode } from 'react-dom'
import { getColumnKey } from '../util'
import Table from '../table'

function generateDiyColumns(propsColumns, mixColumns) {
  return _.map(propsColumns, column => {
    const key = getColumnKey(column)
    // 能获取 key 才可能使用 diy
    if (key === null) {
      return column
    }

    // 默认显示和打开 diyEnable
    const { show = true, diyEnable = true } = column

    const mixItem = _.find(mixColumns, v => {
      const localKey = getColumnKey(v)
      return localKey === key
    })

    let newColumn = {
      ...column,
      show,
      diyEnable
    }

    // 只有启用diy的列才使用本地存储的show值
    if (diyEnable && mixItem) {
      newColumn.show = mixItem.show
    }
    return newColumn
  })
}

function filterStorageColumns(columns) {
  // 过滤多余数据，避免复杂数据出现JSON循环引用报错问题
  return _.map(columns, col => {
    const { id, accessor, show, diyEnable } = col
    return { id, accessor, show, diyEnable }
  })
}

class Selector extends React.Component {
  handleCheck(index) {
    const { onColumnsChange, columns } = this.props

    const newColumns = columns.slice()
    const { show } = newColumns[index]
    newColumns[index].show = !show

    onColumnsChange(newColumns)
  }

  render() {
    const { show, columns } = this.props
    if (!show) {
      return null
    }
    return (
      <Flex className='gm-react-table-diy-selector gm-box-shadow-bottom' wrap>
        {_.map(columns, (item, index) => {
          const { show: checked, Header, diyItemText, diyEnable } = item
          const key = getColumnKey(item)
          const text = diyItemText || Header

          // Header是字符串才展示自定义选择项
          return _.isString(text) && diyEnable ? (
            <div style={{ width: '50%' }} key={key}>
              <Checkbox
                value={key}
                checked={checked}
                onChange={this.handleCheck.bind(this, index)}
              >
                {text}
              </Checkbox>
            </div>
          ) : null
        })}
      </Flex>
    )
  }
}

Selector.propTypes = {
  show: PropTypes.bool,
  columns: PropTypes.array.isRequired,
  onColumnsChange: PropTypes.func.isRequired
}

function diyTableHOC(Component) {
  class DiyTable extends React.Component {
    constructor(props) {
      super(props)
      // 从localStorage拿到columns
      const localColumns = Storage.get(props.id) || []

      this.state = {
        columns: generateDiyColumns(props.columns, localColumns),
        show: false
      }

      this.diySelectorRef = React.createRef()

      // 检测
      if (process.env.NODE_ENV !== 'production') {
        _.each(props.columns, column => {
          const key = getColumnKey(column)
          if (key && column.diyEnable !== false) {
            if (!_.isString(column.Header) && !column.diyItemText) {
              console.error('column need diyItemText', column)
            }
          }
        })
      }
    }

    // 显示diy选择框  注:暴露给外部使用
    apiToggleDiySelector = () => {
      if (!this.__isUnmounted) {
        const { show } = this.state
        this.setState({ show: !show })
      }
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        columns: generateDiyColumns(nextProps.columns, this.state.columns)
      })
    }

    componentDidMount() {
      window.document.body.addEventListener(
        'click',
        this.handleCloseDiySelector
      )
    }

    componentWillUnmount() {
      window.document.body.removeEventListener(
        'click',
        this.handleCloseDiySelector
      )
      this.__isUnmounted = true
    }

    handleCloseDiySelector = ({ target }) => {
      const { show } = this.state

      if (
        show &&
        this.diySelectorRef.current &&
        !contains(findDOMNode(this.diySelectorRef.current), target)
      ) {
        // 延后执行,使得再次点击按钮关闭diy
        setTimeout(() => this.setState({ show: false }), 0)
      }
    }

    handleColumnsChange = columns => {
      const { id } = this.props
      // 记录当前columns的数据到localStorage
      Storage.set(id, filterStorageColumns(columns))

      this.setState({
        columns
      })
    }

    render() {
      const { columns, show } = this.state
      const props = {
        ...this.props,
        columns
      }

      return (
        <div className='gm-react-table-diy'>
          <Component {...props} />
          <Selector
            ref={this.diySelectorRef}
            show={show}
            columns={columns}
            onColumnsChange={this.handleColumnsChange}
          />
        </div>
      )
    }
  }

  DiyTable.propTypes = {
    id: PropTypes.string.isRequired,
    ...Table.propTypes
  }

  return DiyTable
}

export default diyTableHOC
