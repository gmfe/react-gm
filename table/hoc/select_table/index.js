import React from 'react'
import PropTypes from 'prop-types'
import baseSelectTableHoc from './select_table_base'
import Table from '../../table'
import { Flex } from '../../../src'
import SVGRemove from '../../../svg/remove.svg'

function selectTableV2HOC(Component) {
  // 先包一层 hocSelectTable
  const SelectComponent = baseSelectTableHoc(Component)

  class SelectTable extends React.Component {
    state = {
      isBarShow: false
    }

    handleSelect = selected => {
      this.setState({ isBarShow: selected.length > 0 })

      this.props.onSelect(selected)
    }

    handleSelectAll = isSelectedAll => {
      this.setState({ isBarShow: isSelectedAll })

      this.props.onSelectAll(isSelectedAll)
    }

    render() {
      const { batchActionBar, selectType, ...rest } = this.props

      const { isBarShow } = this.state

      return (
        <div className='gm-react-table-select'>
          <SelectComponent
            {...rest}
            selectType={selectType}
            onSelect={this.handleSelect}
            onSelectAll={this.handleSelectAll}
          />
          {selectType === 'checkbox' && isBarShow && batchActionBar && (
            <Flex className='gm-react-table-select-all-tip' alignCenter>
              <SVGRemove
                onClick={() => this.setState({ isBarShow: false })}
                className='gm-cursor'
              />
              {batchActionBar}
            </Flex>
          )}
        </div>
      )
    }
  }

  SelectTable.propTypes = {
    ...Table.propTypes,

    /** 选择类型 */
    selectType: PropTypes.oneOf(['checkbox', 'ratio']),
    /** 被选中项数组[keyField] */
    selected: PropTypes.array.isRequired,
    /** 选中一行的回调 */
    onSelect: PropTypes.func.isRequired,
    /** 选中所有行的回调 */
    onSelectAll: PropTypes.func.isRequired,
    /** 每一行的CheckBox的disable设置行数 */
    isSelectorDisable: PropTypes.func,
    /** 自定义批量操作栏 */
    batchActionBar: PropTypes.node,
    /** 自定义被选中项的id */
    keyField: PropTypes.string
  }

  SelectTable.defaultProps = {
    keyField: 'value',
    selectType: 'checkbox'
  }

  return SelectTable
}

export default selectTableV2HOC
