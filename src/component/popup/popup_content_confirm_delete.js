import React from 'react'
import PropTypes from 'prop-types'
import SVGRemove from '../../../svg/remove.svg'
import Button from '../button'
import classNames from 'classnames'

const PopupContentConfirmDelete = props => {
  const { title, onDelete, onCancel, className, children, ...rest } = props

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
          <Button className='btn btn-danger' onClick={onDelete}>
            删除
          </Button>
        </div>
      </div>
    </div>
  )
}

PopupContentConfirmDelete.propTypes = {
  title: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
}

export default PopupContentConfirmDelete
