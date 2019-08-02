import React from 'react'
import PropTypes from 'prop-types'
import PaginationBase from './base'

const PaginationV2 = props => {
  return <PaginationBase {...props} />
}

PaginationV2.displayName = 'PaginationV2'
PaginationV2.propTypes = {
  /** 非传统意义上的 分页信息。 仅此组件需要的数据而已。count 仅当前有多少条数据，非传统意义上的一共多少条数据，注意是当前。 */
  data: PropTypes.shape({
    count: PropTypes.number.isRequired,
    offset: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired
  }),
  /** 提供 {offset, limit} */
  onChange: PropTypes.func.isRequired,
  /** 此 count 非 data.count。此只是用来控制不显示总数 */
  showCount: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  /** 私有 */
  _peekInfo: PropTypes.shape({
    more: PropTypes.bool,
    peek: PropTypes.number
  })
}

export default PaginationV2
