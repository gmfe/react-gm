import React from 'react'
import _ from 'lodash'
import { Flex, Popover } from '../../../src'
import { getLocale } from '../../../locales'
import PropTypes from 'prop-types'
import SVGRemove from '../../../svg/remove.svg'

const BatchActionBar = props => {
  const {
    isSelectAll,
    pure,
    count,
    batchActions,
    toggleSelectAll,
    onClose
  } = props

  let selectAllBtn = null
  // 如果pure = true,不展示[勾选所有页内容]按钮
  if (!pure) {
    selectAllBtn = isSelectAll ? (
      <button
        className='btn btn-primary gm-margin-left-20'
        onClick={() => toggleSelectAll(false)}
      >
        {getLocale('勾选当前页内容')}
      </button>
    ) : (
      <button
        className='btn btn-primary gm-margin-left-20'
        onClick={() => toggleSelectAll(true)}
      >
        {getLocale('勾选所有页内容')}
      </button>
    )
  }

  return (
    <Flex className='gm-react-table-select-batch-action-bar' alignCenter>
      <Popover
        type='hover'
        popup={<div className='gm-padding-5'>{getLocale('取消批量勾选')}</div>}
        bottom
        left
        offset={-8}
        showArrow
      >
        <span style={{ display: 'block', width: '12px' }} className='gm-cursor'>
          <SVGRemove onClick={onClose} />
        </span>
      </Popover>
      {selectAllBtn}
      {_.isNumber(count) ? (
        <div className='gm-text-bold gm-margin-left-20'>
          {getLocale('已选择')}
          <span className='text-primary'>{count}</span>
          {getLocale('项')}
        </div>
      ) : (
        <div className='gm-text-bold gm-margin-left-20'>
          {getLocale('已选择')}
          <span className='text-primary'>{getLocale('所有')}</span>
          {getLocale('页')}
        </div>
      )}
      {batchActions.length && <div className='gm-margin-left-20'>|</div>}
      {batchActions.map(
        o =>
          o.show !== false && (
            <div
              onClick={o.onClick} // eslint-disable-line
              className='gm-text-hover-primary gm-cursor gm-text-bold'
              style={{ marginLeft: '30px' }}
              key={o.name}
            >
              {o.name}
            </div>
          )
      )}
    </Flex>
  )
}

BatchActionBar.propTypes = {
  /** pure=true,不展示[勾选所有页内容]按钮,也没有勾选所有页相关操作 */
  pure: PropTypes.bool,
  /** 是否选中所有页 */
  isSelectAll: PropTypes.bool,
  /** 选中多少项 */
  count: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  /** 批量操作按钮 */
  batchActions: PropTypes.array.isRequired,
  /** 所有页/当前页 切换函数 */
  toggleSelectAll: PropTypes.func,
  /** 点击关闭BatchActionBar的回调函数 */
  onClose: PropTypes.func.isRequired
}

BatchActionBar.defaultProps = {
  toggleSelectAll: () => {}
}

export default BatchActionBar
