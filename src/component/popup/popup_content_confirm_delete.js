import React from 'react'
import PropTypes from 'prop-types'
import SVGRemove from '../../../svg/remove.svg'
import Button from '../button'
import classNames from 'classnames'

const PopupContentConfirm = props => {
  const { type, title, onCancel, className, children, ...rest } = props

  return (
    <div
      {...rest}
      className={classNames('gm-popup-content-confirm', className)}
    >
      <div className='gm-popup-content-confirm-title-wrap'>
        <div className='gm-popup-content-confirm-title'>{title}</div>
        <div className='gm-popup-content-confirm-close' onClick={onCancel}>
          <SVGRemove />
        </div>
      </div>
      <div className='gm-popup-content-confirm-content'>
        {children}
        <div className='gm-popup-content-confirm-button'>
          <button
            className='btn btn-default gm-margin-right-5'
            onClick={onCancel}
          >
            取消
          </button>
          {type === 'delete' ? (
            <Button className='btn btn-danger' onClick={props.onDelete}>
              删除
            </Button>
          ) : (
            <Button className='btn btn-primary' onClick={props.onSave}>
              保存
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

PopupContentConfirm.propTypes = {
  type: PropTypes.oneOf(['save', 'delete']),
  title: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  onSave: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
}

PopupContentConfirm.defaultProps = {
  type: 'save'
}

export default PopupContentConfirm
