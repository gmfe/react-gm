import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Popover, PopupContentConfirm } from '../src'
import { SvgShanchumorenHuaban, SvgTianjiamorenHuaban } from 'gm-svg'
import _ from 'lodash'
import SVGDelete from '../svg/delete.svg'
import SVGCheckDetail from '../svg/check-detail.svg'
import SVGEditBox from '../svg/edit-box.svg'

const OperationHeader = <div className='text-center'>操作</div>

const OperationCell = function(props) {
  return (
    <div {...props} className={classNames('text-center', props.className)} />
  )
}

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
        'gm-inline-block gm-cursor gm-padding-5 gm-text-16 gm-text gm-text-hover-primary',
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
    return Promise.resolve(onClick())
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
          'gm-inline-block gm-cursor gm-padding-5 gm-text-16 gm-text gm-text-hover-primary',
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

const EditBox = props => {
  const { title, onClick, className, children, editContent, ...rest } = props
  const refPopover = React.createRef()

  const handleSave = () => {
    refPopover.current.apiDoSetActive(false)
    return Promise.resolve(onClick())
  }

  const handleCancel = () => {
    refPopover.current.apiDoSetActive(false)
  }
  const popup = (
    <PopupContentConfirm
      type='save'
      title={title}
      onSave={handleSave}
      onCancel={handleCancel}
    >
      {editContent}
      <SVGEditBox
        // fake icon,为了 鼠标焦点不在当前行的时候还能常驻显示
        className='gm-cursor gm-text'
        style={{ position: 'absolute', top: '-19px', right: 0 }}
      />
    </PopupContentConfirm>
  )

  return (
    <Popover
      ref={refPopover}
      arrowLeft={308}
      right
      popup={popup}
      showArrow
      animName={false}
    >
      <div {...rest} className={classNames('gm-inline-block', className)}>
        <span className='gm-padding-right-5'>{children}</span>
        <SVGEditBox className='react-table-edit-box gm-cursor gm-text gm-text-hover-primary' />
      </div>
    </Popover>
  )
}

EditBox.propTypes = {
  title: PropTypes.string,
  editContent: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
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
  OperationDelete,
  OperationDetail,
  OperationCell,
  SortHeader,
  EditTableOperation,
  EditBox,
  referOfWidth
}
