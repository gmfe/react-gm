import React from 'react'
import { getLocale } from '../../../locales'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { Storage, Modal, Popover } from '../../../src'
import SVGSetting from '../../../svg/setting.svg'
import { getColumnKey, referOfWidth } from '../../util'
import Table from '../../table'
import { devWarn } from '../../../src/util'
import DiyTableModal from './diy_table_modal'

/**
 * 生成新的columns
 * @param initColumns 初始columns
 * @param mixColumns 需要混合的columns(优先取值)
 * @returns {Array}
 */
function generateDiyColumns(initColumns, mixColumns) {
  // 把checkbox, selector, expander 提出来,不参与diy
  const [notDiyCols, diyCols] = splitColumns(initColumns)

  const diyColumns = _.map(diyCols, column => {
    const key = getColumnKey(column)
    // 能获取 key 才可能使用 diy
    if (key === null) {
      return column
    }

    // 默认显示和打开 diyEnable
    const { show = true, diyEnable = true } = column
    const newColumn = {
      ...column,
      key, // 把key记录下来,作为这个列的唯一标识
      show,
      diyEnable
    }

    // localstorage中储存的列
    const localItem = _.find(mixColumns, v => v.key === key)
    // localstorage的值覆盖初始值
    if (localItem) {
      newColumn.show = localItem.show
      newColumn.diySortNumber = localItem.diySortNumber
    }
    return newColumn
  })

  return [notDiyCols, diyColumns]
}

function getStorageColumns(columns) {
  // 过滤多余数据，避免复杂数据出现JSON循环引用报错问题
  return _.map(columns, col => {
    const { key, show, diyEnable, diySortNumber } = col
    return { key, show, diyEnable, diySortNumber }
  })
}

function splitColumns(columns) {
  const notDiyCols = []
  const diyCols = []
  for (const item of columns) {
    if (['__checkbox', '__expander'].includes(item.id)) {
      notDiyCols.push(item)
    } else {
      diyCols.push(item)
    }
  }
  return [notDiyCols, diyCols]
}

function diyTableHOC(Component) {
  class DiyTable extends React.Component {
    constructor(props) {
      super(props)
      // 从localStorage拿到columns
      const localColumns = Storage.get(props.id) || []

      const [notDiyCols, diyCols] = generateDiyColumns(
        props.columns,
        localColumns
      )

      this.notDiyCols = notDiyCols
      this.state = {
        columns: diyCols
      }

      // 检测,如果不符合,警告调用方
      devWarn(() => {
        _.each(props.columns, column => {
          const key = getColumnKey(column)
          if (key) {
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

    static getDerivedStateFromProps(props, state) {
      return {
        columns: generateDiyColumns(props.columns, state.columns)[1]
      }
    }

    handleColumnsSave = newColumns => {
      this.setState({ columns: newColumns })
      Storage.set(this.props.id, getStorageColumns(newColumns))
    }

    handleModalShow = () => {
      Modal.render({
        disableMaskClose: true,
        title: getLocale('表头设置'),
        noContentPadding: true,
        size: 'lg',
        onHide: Modal.hide,
        children: (
          <DiyTableModal
            diyGroupSorting={this.props.diyGroupSorting}
            columns={this.state.columns}
            onSave={this.handleColumnsSave}
          />
        )
      })
    }

    render() {
      const { columns } = this.state

      return (
        <Component
          {...this.props}
          columns={[
            {
              Header: () => (
                <Popover
                  top
                  arrowLeft='2px'
                  popup={
                    <div className='gm-padding-5'>{getLocale('表头设置')}</div>
                  }
                  showArrow
                  type='hover'
                >
                  <SVGSetting
                    className='gm-cursor gm-text-hover-primary'
                    onClick={this.handleModalShow}
                  />
                </Popover>
              ),
              width: referOfWidth.noCell,
              accessor: '_setting', // 不重要,随便写
              id: '__setting', // 不重要,随便写
              Cell: () => null // 只是用来占据空间
            },
            ...this.notDiyCols,
            ..._.sortBy(columns, 'diySortNumber')
          ]}
        />
      )
    }
  }

  DiyTable.propTypes = {
    id: PropTypes.string.isRequired,
    /** 分组排序 */
    diyGroupSorting: PropTypes.array.isRequired,
    ...Table.propTypes
  }

  return DiyTable
}

export default diyTableHOC
