import React from 'react'
import { Flex } from '../../../src'
import { getLocale } from '../../../locales'
import PropTypes from 'prop-types'

const BatchActionBar = props => {
  const { isSelectAll, count, batchActions, toggleSelectAll } = props
  return (
    <Flex alignCenter>
      {isSelectAll ? (
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
      )}
      {count && (
        <div className='gm-text-bold gm-margin-left-20'>
          {getLocale('已选择')}
          <span className='text-primary'>{count}</span>
          {getLocale('项')}
        </div>
      )}
      {batchActions.length && <div className='gm-margin-left-20'>|</div>}
      {batchActions.map(
        o =>
          o.show !== false && (
            <div
              onClick={o.onClick}
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
  /** 是否选中所有页 */
  isSelectAll: PropTypes.bool.isRequired,
  /** 选中多少项 */
  count: PropTypes.number,
  /** 批量操作按钮 */
  batchActions: PropTypes.array,
  /** 所有页/当前页 切换函数 */
  toggleSelectAll: PropTypes.func
}

BatchActionBar.defaultProps = {
  toggleSelectAll: () => {}
}

export default BatchActionBar
