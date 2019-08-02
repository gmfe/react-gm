import React from 'react'
import PropTypes from 'prop-types'
import Flex from '../flex'
import classNames from 'classnames'
import Left from './left'
import Page from './page'
import Right from './right'
import PagePeek from './page_peek'

const PaginationBase = props => {
  const { data, onChange, showCount, _peekInfo, className, ...rest } = props

  return (
    <Flex
      {...rest}
      alignCenter
      className={classNames('gm-pagination', className)}
    >
      <Left data={data} onChange={onChange} showCount={showCount} />
      {_peekInfo ? (
        <PagePeek data={data} _peekInfo={_peekInfo} onChange={onChange} />
      ) : (
        <Page data={data} onChange={onChange} />
      )}
      {showCount && <Right data={data} onChange={onChange} />}
    </Flex>
  )
}

PaginationBase.propTypes = {
  /** 非传统意义上的 分页信息。 仅此组件需要的数据而已。count 仅当前有多少条数据，非传统意义上的有多少条数据。注意是当前。 */
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

export default PaginationBase
