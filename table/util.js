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
        <span onClick={props.addAvailable ? props.onAddRow : _.noop}>
          <SvgTianjiamorenHuaban
            className={classNames('gm-react-edit-table-action-add', {
              'gm-react-edit-table-action-add-available': props.addAvailable
            })}
          />
        </span>
      </Popover>
      <Popover
        showArrow
        type='hover'
        popup={<div className='gm-padding-5'>删除</div>}
      >
        <span onClick={props.delAvailable ? props.onDeleteRow : _.noop}>
          <SvgShanchumorenHuaban
            className={classNames('gm-react-edit-table-action-delete', {
              'gm-react-edit-table-action-delete-available': props.delAvailable
            })}
          />
        </span>
      </Popover>
    </OperationCell>
  )
}

EditTableOperation.propTypes = {
  onAddRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
  delAvailable: PropTypes.bool,
  addAvailable: PropTypes.bool
}

EditTableOperation.defaultProps = {
  delAvailable: true,
  addAvailable: true
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

  // 其他情况没法获得 key
  return null
}

export {
  getColumnKey,
  OperationHeader,
  OperationCell,
  SortHeader,
  EditTableOperation
}
