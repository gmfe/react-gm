import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Popover } from '../src'
import { SvgShanchumorenHuaban, SvgTianjiamorenHuaban } from 'gm-svg'

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
  type: PropTypes.oneOf(['asc', 'desc'])
}

const EditTableOperation = function(props) {
  return (
    <OperationCell>
      <Popover
        showArrow
        type='hover'
        popup={<div className='gm-padding-5'>添加</div>}
      >
        <span onClick={props.onAddRow}>
          <SvgTianjiamorenHuaban className='gm-react-edit-table-action-add' />
        </span>
      </Popover>
      <Popover
        showArrow
        type='hover'
        popup={<div className='gm-padding-5'>删除</div>}
      >
        <span onClick={props.onDeleteRow}>
          <SvgShanchumorenHuaban className='gm-react-edit-table-action-delete' />
        </span>
      </Popover>
    </OperationCell>
  )
}

export { OperationHeader, OperationCell, SortHeader, EditTableOperation }
