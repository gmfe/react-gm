import React, { useState } from 'react'
import PropTypes from 'prop-types'
import LevelList from '../level_list'
import _ from 'lodash'

function processDataWithValue(data, map, pre = '') {
  return _.map(data, (v, i) => {
    const value = `${pre}_${i}`
    map[value] = v

    if (v.children) {
      v.children = processDataWithValue(v.children, map, value)
    }

    return {
      value,
      ...v
    }
  })
}

const FunctionSetOverlay = props => {
  const { data, onSelect, isReverse } = props
  const [will, setWill] = useState([])

  // 做个map存起来，方便快速通过 value 找到 item
  const map = {}
  const newData = processDataWithValue(data, map)

  const handleSelect = selected => {
    // 取最后一个
    const item = map[selected.slice(-1)[0]]
    onSelect(item)
  }

  return (
    <LevelList
      data={newData}
      selected={[]}
      onSelect={handleSelect}
      willActiveSelected={will}
      onWillActiveSelect={will => setWill(will)}
      isReverse={isReverse}
      isForFunctionSet
    />
  )
}

FunctionSetOverlay.propTypes = {
  /** [{text, disabled, onClick, children}] */
  data: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  isReverse: PropTypes.bool
}

export default FunctionSetOverlay
