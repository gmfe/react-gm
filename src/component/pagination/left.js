import React from 'react'
import PropTypes from 'prop-types'
import { Select } from '../select'
import Flex from '../flex'

const limitData = [
  { value: 10, text: 10 },
  { value: 20, text: 20 },
  { value: 50, text: 50 }
]

const Limit = ({ value, onChange }) => {
  return (
    <Select
      data={limitData}
      value={value}
      onChange={onChange}
      style={{ width: '60px' }}
    />
  )
}

Limit.propTypes = {
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired
}

const Left = ({ data, onChange, showCount }) => {
  const handleChangeLimit = limit => {
    // 回到第一页
    onChange({
      offset: 0,
      limit
    })
  }

  return (
    <Flex alignCenter>
      {showCount && <span>共{data.count}条记录,&nbsp;</span>}
      <span>每页&nbsp;</span>
      <Limit value={data.limit} onChange={handleChangeLimit} />
      <span>&nbsp;条</span>
    </Flex>
  )
}

Left.propTypes = {
  data: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  showCount: PropTypes.bool
}

export default Left
