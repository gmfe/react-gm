import classNames from 'classnames'
import PropTypes from 'prop-types'
import SVGCheckDetail from '../../svg/check-detail.svg'
import React from 'react'
import { PopupContentConfirm } from '../../src/component/popup'
import { Popover } from '../../src'
import SVGDelete from '../../svg/delete.svg'
import SVGPen from '../../svg/pen.svg'

const OperationHeader = () => <div className='text-center'>操作</div>

const OperationCell = props => (
  <div {...props} className={classNames('text-center', props.className)} />
)

OperationCell.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
}

const OperationDetail = ({ href, open, onClick, className, ...rest }) => {
  const handleClick = e => {
    onClick && onClick(e)

    if (href) {
      if (open) {
        window.open(href)
      } else {
        window.location.href = href
      }
    }
  }

  return (
    <div
      {...rest}
      onClick={handleClick}
      className={classNames(
        'gm-inline-block gm-cursor gm-padding-5 gm-text-14 gm-text gm-text-hover-primary',
        className
      )}
    >
      <SVGCheckDetail />
    </div>
  )
}

OperationDetail.propTypes = {
  /** 如果提供了 href */
  href: PropTypes.string,
  /** true就新开tab页面 */
  open: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
}

const OperationDelete = props => {
  const { title, onClick, className, children, ...rest } = props
  const refPopover = React.createRef()

  const handleDelete = () => {
    refPopover.current.apiDoSetActive(false)
    return onClick()
  }

  const handleCancel = () => {
    refPopover.current.apiDoSetActive(false)
  }

  const popup = (
    <PopupContentConfirm
      type='delete'
      title={title}
      onDelete={handleDelete}
      onCancel={handleCancel}
    >
      {children || '确定删除？'}
    </PopupContentConfirm>
  )

  return (
    <Popover ref={refPopover} right popup={popup} showArrow>
      <div
        {...rest}
        className={classNames(
          'gm-inline-block gm-cursor gm-padding-5 gm-text-14 gm-text gm-text-hover-primary',
          className
        )}
      >
        <SVGDelete />
      </div>
    </Popover>
  )
}

OperationDelete.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
}

const OperationRowEdit = ({
  children,
  isEditing,
  onClick,
  onSave,
  onCancel
}) => {
  const handleClick = () => {
    onClick && onClick()
  }

  const handleSave = () => {
    onSave && onSave()
  }

  const handleCancel = () => {
    onCancel && onCancel()
  }

  return !isEditing ? (
    <OperationCell>
      <span className='gm-padding-5'>
        <SVGPen
          className='gm-inline-block gm-cursor gm-text-14 gm-text gm-text-hover-primary'
          onClick={handleClick}
        />
      </span>
      {children}
    </OperationCell>
  ) : (
    <OperationCell>
      <span className='btn-link gm-inline-block gm-cursor' onClick={handleSave}>
        保存
      </span>
      <span className='gm-padding-lr-5'>|</span>
      <span
        className='btn-link gm-inline-block gm-cursor'
        onClick={handleCancel}
      >
        取消
      </span>
    </OperationCell>
  )
}

OperationRowEdit.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  onSave: PropTypes.func,
  onCancel: PropTypes.func
}

export {
  OperationHeader,
  OperationDelete,
  OperationDetail,
  OperationCell,
  OperationRowEdit
}
