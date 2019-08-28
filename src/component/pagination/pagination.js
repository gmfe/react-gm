import React from 'react'
import PropTypes from 'prop-types'
import PaginationBase from './base'

const Pagination = ({ data, toPage, nextDisabled, ...rest }) => {
  if (data.count !== undefined && data.count !== null) {
    return (
      <PaginationBase
        {...rest}
        data={data}
        onChange={data => {
          toPage(data)
        }}
        showCount
      />
    )
  } else {
    let count = data.offset + data.limit * 2
    if (nextDisabled) {
      count = data.offset + data.limit
    }

    return (
      <PaginationBase
        {...rest}
        data={{ ...data, count }}
        onChange={data => {
          toPage(data)
        }}
      />
    )
  }
}

Pagination.displayName = 'Pagination'
Pagination.propTypes = {
  data: PropTypes.shape({
    count: PropTypes.number,
    offset: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired
  }),
  /**
   * 参数 {offset, limit}, page。page 是页码。
   * 直接用此数据请求后台即可
   */
  toPage: PropTypes.func.isRequired,
  /** data without count 才有效 */
  nextDisabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
}

export default Pagination
