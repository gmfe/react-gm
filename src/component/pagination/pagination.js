import React from 'react'
import PropTypes from 'prop-types'
import PaginationBase from './base'
import { warn, devWarnForHook } from '../../util'

const Pagination = ({ data, onChange, toPage, nextDisabled, ...rest }) => {
  // 新用法
  if (onChange) {
    return <PaginationBase {...rest} data={data} onChange={onChange} />
  }

  devWarnForHook(() => {
    warn('请使用新用法 data onChange，具体看文档')
  })

  if (data.count !== undefined) {
    return (
      <PaginationBase
        {...rest}
        data={data}
        onChange={data => {
          toPage(data)
        }}
      />
    )
  } else {
    let count = data.offset + data.limit * 2
    if (nextDisabled) {
      count = data.offset + data.limit
    }
    console.log(count, data)
    return (
      <PaginationBase
        {...rest}
        data={{ ...data, count }}
        onChange={data => {
          toPage(data)
        }}
        disabledCount
      />
    )
  }
}

Pagination.displayName = 'Pagination'
Pagination.propTypes = {
  /** 出于性能考虑，有些接口不会返回「count」 */
  data: PropTypes.shape({
    count: PropTypes.number,
    offset: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired
  }),
  /** 提供 {index, limit} */
  onChange: PropTypes.func.isRequired,
  /** 此 count 非 data.count。此只是用来控制不显示总数 */
  disabledCount: PropTypes.bool,
  /**
   * 老用法，已废弃
   * 参数 {offset, limit}, page。page 是页码。
   * 直接用此数据请求后台即可
   */
  toPage: PropTypes.func.isRequired,
  /**
   * 老用法，已废弃
   * data without count 才有效 */
  nextDisabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
}

export default Pagination
