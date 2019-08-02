import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import InputNumberV2 from '../input_number/number'
import Flex from '../flex'
import { getIndex } from './util'

const Right = ({ data, onChange }) => {
  const [index, setIndex] = useState(getIndex(data))

  // 响应外部的 index 变化
  useEffect(() => {
    setIndex(getIndex(data))
  }, [data.offset, data.limit])

  const handleInput = value => {
    setIndex(value)
  }

  const handleEnsureIndex = () => {
    // 如果不合理，则还原
    if (index === null) {
      setIndex(getIndex(data))
      return
    }

    onChange({
      offset: (index - 1) * data.limit,
      limit: data.limit
    })
  }

  const handleBlur = () => {
    handleEnsureIndex()
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      handleEnsureIndex()
    }
  }

  const all = Math.ceil(data.count / data.limit)

  return (
    <Flex className='gm-pagination-right'>
      <InputNumberV2
        precision={0}
        value={index}
        onChange={handleInput}
        min={1}
        max={all}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className='form-control'
        style={{ width: '40px' }}
      />
      <div className='gm-pagination-right-total-page'>{`/${all}页`}</div>
    </Flex>
  )
}

Right.propTypes = {
  data: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Right
