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
  /**
   * 新用法 count 是必须的，不传会有 warn。老用法 count 不是必须的。
   *
   * count 仅当前有多少条数据，非传统意义上的一共多少条数据。注意是当前。
   * */
  data: PropTypes.shape({
    count: PropTypes.number,
    offset: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired
  }),

  /** 提供 {offset, limit} */
  onChange: PropTypes.func,
  /** 此 count 非 data.count。此只是用来控制不显示总数 */
  disabledCount: PropTypes.bool,

  /**
   * 老用法
   * 参数 {offset, limit}, page。page 是页码。
   * 直接用此数据请求后台即可
   */
  toPage: PropTypes.func,
  /**
   * 老用法
   * data without count 才有效 */
  nextDisabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
}

export default Pagination
