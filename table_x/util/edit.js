import React, { useRef } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Popover } from '../../src'
import SVGEditPen from '../../svg/edit-pen.svg'
import SVGPlusSquare from '../../svg/plus-square.svg'
import SVGMinusSquare from '../../svg/minus-square.svg'
import { OperationCell } from './operation'

const EditButton = props => {
  const refPopover = useRef(null)
  const closePopup = () => refPopover.current.apiDoSetActive(false)

  return (
    <Popover
      ref={refPopover}
      right
      popup={props.popupRender(closePopup)}
      showArrow
      animName={false}
    >
      <span className='gm-table-x-edit-button'>
        <SVGEditPen />
      </span>
    </Popover>
  )
}

EditButton.propTypes = {
  popupRender: PropTypes.func.isRequired
}

const EditOperation = props => {
  return (
    <OperationCell>
      <Popover
        showArrow
        type='hover'
        popup={<div className='gm-padding-5'>添加</div>}
        disabled={!props.onAddRow}
      >
        <span
          onClick={props.onAddRow}
          className={classNames('gm-table-x-edit-action-add', {
            disabled: !props.onAddRow
          })}
        >
          <SVGPlusSquare />
        </span>
      </Popover>
      <Popover
        showArrow
        type='hover'
        popup={<div className='gm-padding-5'>删除</div>}
        disabled={!props.onDeleteRow}
      >
        <span
          onClick={props.onDeleteRow}
          className={classNames('gm-table-x-edit-action-delete', {
            disabled: !props.onDeleteRow
          })}
        >
          <SVGMinusSquare />
        </span>
      </Popover>
    </OperationCell>
  )
}

EditOperation.propTypes = {
  onAddRow: PropTypes.func,
  onDeleteRow: PropTypes.func
}

export { EditButton, EditOperation }
