import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { Checkbox, Storage, Flex, Modal } from '../../src'
import SVGSetting from '../../svg/success-circle-o.svg'
import { getColumnKey } from '../util'
import Table from '../table'
import { devWarn } from '../../src/util'

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

    const newColumn = {
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

const Selector = props => {
  const { onColumnsChange, operatorColumns } = props

  const handleCheck = index => {
    onColumnsChange()
  }

  const colGroup = _.groupBy(operatorColumns, 'diyGroupName')

  return (
    <div>
      {_.map(colGroup, (cols, groupName) => {
        return (
          <div>
            <div>{groupName}</div>
            <Flex>
              {_.map(cols, item => {
                const { show: checked, Header, diyItemText, diyEnable } = item
                const key = getColumnKey(item)
                const text = diyItemText || Header

                return (
                  _.isString(text) && (
                    <div style={{ width: '25%' }} key={key}>
                      <Checkbox
                        value={key}
                        disabled={!diyEnable} // 不能编辑的字段,disable
                        checked={checked}
                        onChange={() => {
                          handleCheck(key)
                        }}
                      >
                        {text}
                      </Checkbox>
                    </div>
                  )
                )
              })}
            </Flex>
          </div>
        )
      })}
    </div>
  )
}

const Operator = props => {
  return (
    <Flex className='gm-react-table-diy-operator'>
      <div className='gm-react-table-diy-selector'>
        <div>可选字段</div>
        <Selector {...props} />
      </div>
      <div className='gm-react-table-diy-list'>
        <div>当前选定的字段</div>
      </div>
    </Flex>
  )
}

Operator.propTypes = {
  operatorColumns: PropTypes.array.isRequired,
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
        operatorColumns: [],
        show: false
      }

      // 检测
      devWarn(() => {
        _.each(props.columns, column => {
          const key = getColumnKey(column)
          if (key && column.diyEnable !== false) {
            if (!_.isString(column.Header) && !column.diyItemText) {
              console.error('column need diyItemText', column)
            }
            if (!column.diyGroupName) {
              console.error('column need diyGroupName', column)
            }
          }
        })
      })
    }

    handleColumnsChange = selectorColumns => {
      this.setState({ selectorColumns })
    }

    handleColumnsSave = () => {
      const columns = _.cloneDeep(this.state.operatorColumns)
      this.setState({ columns, show: false })
    }

    // 显示diy选择框  注:暴露给外部使用
    handleModalShow = () => {
      const operatorColumns = _.cloneDeep(this.state.columns)
      this.setState({ operatorColumns, show: true })
    }

    render() {
      const { columns, operatorColumns, show } = this.state
      return (
        <>
          <Component
            {...this.props}
            columns={[
              {
                Header: () => (
                  <SVGSetting
                    style={{ cursor: 'pointer' }}
                    onClick={this.handleModalShow}
                  />
                ),
                maxWidth: 30,
                accessor: '_setting', // 不重要,随便写
                Cell: () => null
              },
              ...columns
            ]}
          />
          <Modal
            title='表头设置'
            noContentPadding
            show={show}
            onOK={this.handleColumnsSave}
            size='lg'
          >
            <Operator
              operatorColumns={operatorColumns}
              onColumnsChange={this.handleColumnsChange}
            />
          </Modal>
        </>
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
