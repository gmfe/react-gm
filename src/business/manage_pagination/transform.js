import PaginationBase from '../../component/pagination/base'
import PropTypes from 'prop-types'
import React from 'react'

const Transform = ({ count, limit, currentIndex, peek, more, onChange }) => {
  const handleChange = ({ offset, limit }) => {
    onChange({
      limit,
      currentIndex: offset / limit
    })
  }

  let newCount = count
  if (count === undefined || count === null) {
    if (peek) {
      newCount = currentIndex * limit + peek
    } else {
      newCount = 0
    }
  }

  const _peekInfo = !count
    ? {
        peek,
        more
      }
    : undefined

  return (
    <PaginationBase
      data={{
        count: newCount,
        offset: currentIndex * limit,
        limit
      }}
      _peekInfo={_peekInfo}
      onChange={handleChange}
      showCount={!(count === undefined || count === null)}
    />
  )
}

Transform.propTypes = {
  limit: PropTypes.number.isRequired,
  currentIndex: PropTypes.number.isRequired,
  count: PropTypes.number,
  peek: PropTypes.number,
  more: PropTypes.bool,
  onChange: PropTypes.func.isRequired
}

export default Transform
