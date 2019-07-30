import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Popover } from '../src'
import { SvgShanchumorenHuaban, SvgTianjiamorenHuaban } from 'gm-svg'
import _ from 'lodash'

const OperationHeader = (
  <div className='text-center'>
    <i className='xfont xfont-fun' style={{ color: 'rgb(19, 193, 159)' }} />
  </div>
)

const OperationCell = function(props) {
  return (
    <div {...props} className={classNames('text-center', props.className)} />
  )
}

OperationCell.propTypes = {
  className: PropTypes.string
}

class SortHeader extends React.Component {
  render() {
    const { className, type, ...rest } = this.props

    return (
      <span
        {...rest}
        className={classNames(
          'gm-react-table-sort-header gm-cursor',
          {
            'gm-react-table-sort-header-asc': type === 'asc',
            'gm-react-table-sort-header-desc': type === 'desc'
          },
          className
        )}
      />
    )
  }
}

SortHeader.propTypes = {
  type: PropTypes.oneOf(['asc', 'desc']),
  className: PropTypes.string
}

// TODO
const EditTableOperation = props => {
  return (
    <OperationCell>
      <Popover
        showArrow
        type='hover'
        popup={<div className='gm-padding-5'>添加</div>}
      >
        <span onClick={props.onAddRow}>
          <SvgTianjiamorenHuaban
            className={classNames('gm-react-edit-table-action-add', {
              disabled: !props.onAddRow
            })}
          />
        </span>
      </Popover>
      <Popover
        showArrow
        type='hover'
        popup={<div className='gm-padding-5'>删除</div>}
      >
        <span onClick={props.onDeleteRow}>
          <SvgShanchumorenHuaban
            className={classNames('gm-react-edit-table-action-delete', {
              disabled: !props.onDeleteRow
            })}
          />
        </span>
      </Popover>
    </OperationCell>
  )
}

EditTableOperation.propTypes = {
  onAddRow: PropTypes.func,
  onDeleteRow: PropTypes.func
}

function getColumnKey(column) {
  // 如果是字符串就取 accessor
  if (_.isString(column.accessor)) {
    return column.accessor
  }
  // 如果 accessor 是函数，则一定会提供 id，否则 react-table 会报错
  else if (_.isFunction(column.accessor) && column.id) {
    return column.id
  }
  // 额外的情况，有些时候只有id，比如 diy 存储就只存了 id，因为 函数没法存储
  else if (column.id) {
    return column.id
  }

  // 其他情况没法获得 key
  return null
}

const referOfWidth = {
  noCell: 56,
  operationCell: 100,
  searchBox: 168,
  numberInputBox: 80,
  tableSelectBox: 148,
  levelSelectBox: 148,
  dateSelectBox: 110
}

export {
  getColumnKey,
  OperationHeader,
  OperationCell,
  SortHeader,
  EditTableOperation,
  referOfWidth
}
