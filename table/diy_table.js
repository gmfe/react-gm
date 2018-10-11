import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { Checkbox } from '../src/component/checkbox'
import Storage from '../src/component/storage'
import Flex from '../src/component/flex'
import { contains } from 'gm-util'
import { findDOMNode } from 'react-dom'

/**
 * 初始化columns, 当前columns 和 props的columns做糅合
 * @param propsColumns 组件的props
 * @param mixColumns 当前需要糅合的columns
 * @return {Array} 糅合之后的columns
 */
function generateDiyColumns (propsColumns, mixColumns) {
  return _.map(propsColumns, item => {
    const {id, accessor, show = true, diyEnable = true} = item
    const key = id || accessor

    const mixItem = _.find(mixColumns, v => {
      const localKey = v.id || v.accessor
      return localKey === key
    })

    let newItem = {
      ...item,
      show,
      diyEnable
    }

    // 只有启用diy的列才使用本地存储的show值
    if (diyEnable && mixItem) {
      newItem.show = mixItem.show
    }
    return newItem
  })
}

function diyTableHOC (Component) {
  class DiyTable extends React.Component {
    constructor (props) {
      super()
      // 从localStorage拿到columns
      const localColumns = Storage.get(props.id) || []

      this.state = {
        columns: generateDiyColumns(props.columns, localColumns),
        isShow: false
      }
    }

    componentWillReceiveProps (nextProps, prevState) {
      this.setState({columns: generateDiyColumns(nextProps.columns, prevState.columns)})
    }

    componentDidMount () {
      window.document.body.addEventListener('click', this.handleCloseDiySelector)
    }

    componentWillUnmount () {
      window.document.body.removeEventListener('click', this.handleCloseDiySelector)
      this.__isUnmounted = true
    }

    // 显示diy选择框  注:暴露给外部使用
    apiToggleDiySelector = () => {
      if (!this.__isUnmounted) {
        const {isShow} = this.state
        this.setState({isShow: !isShow})
      }
    }

    handleCloseDiySelector = ({target}) => {
      const {isShow} = this.state

      if (isShow && this.diySelectorRef && !contains(findDOMNode(this.diySelectorRef), target)) {
        // 延后执行,使得再次点击按钮关闭diy
        setTimeout(() => this.setState({isShow: false}), 0)
      }
    }

    handleCheck (index) {
      const columns = this.state.columns.slice()
      const {show} = columns[index]
      columns[index].show = !show
      this.setState({columns})

      const {id} = this.props
      // 记录当前columns的数据到localStorage
      Storage.set(id, columns)
    }

    render () {
      const {columns, isShow} = this.state
      const props = {
        ...this.props, columns
      }

      return (<div className='gm-react-table-diy'>
        <Component {...props}/>
        {isShow && <Flex className='gm-react-table-diy-selector gm-box-shadow-bottom' wrap ref={ref => (this.diySelectorRef = ref)}>
          {_.map(columns, (item, index) => {
            const {id, accessor, show: checked, Header, diyItemText, diyEnable} = item
            const key = id || accessor
            const text = diyItemText || Header

            // Header是字符串才展示自定义选择项
            return _.isString(text) && diyEnable ? <div style={{width: '50%'}} key={key}>
              <Checkbox
                value={key}
                checked={checked}
                onChange={this.handleCheck.bind(this, index)}
              >
                {text}
              </Checkbox>
            </div> : null
          })}
        </Flex>}
      </div>)
    }
  }

  DiyTable.propTypes = {
    id: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired
  }
  return DiyTable
}

export default diyTableHOC
