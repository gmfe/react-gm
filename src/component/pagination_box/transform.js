import PaginationBase from '../pagination/pagination_base'
import PropTypes from 'prop-types'
import React from 'react'

const Transform = ({ count, limit, currentIndex, peek, onChange }) => {
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

  return (
    <PaginationBase
      data={{
        count: newCount,
        offset: currentIndex * limit,
        limit
      }}
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
  onChange: PropTypes.func.isRequired
}

export default Transform
