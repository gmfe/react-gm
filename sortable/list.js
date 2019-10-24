import React from 'react'
import PropTypes from 'prop-types'
import Sortable from 'react-sortablejs'
import _ from 'lodash'
import classNames from 'classnames'

const SortTableList = ({
  data,
  onChange,
  renderItem,
  tag,
  options = {},
  ...rest
}) => {
  const handleChange = order => {
    const newData = _.sortBy(data.slice(), v => order.indexOf(v.value + ''))
    onChange(newData)
  }

  const items = _.map(data, (v, index) => (
    <div
      key={v.value}
      data-id={v.value}
      className={classNames({
        'gm-cursor-grab': !options.handle
      })}
    >
      {renderItem(v, index)}
    </div>
  ))

  return (
    <Sortable
      {...rest}
      tag={tag}
      options={{
        animation: 150,
        ...options
      }}
      onChange={handleChange}
    >
      {items}
    </Sortable>
  )
}

SortTableList.propTypes = {
  // 注意 value 是字符串
  // [{value, text, ...}, {value, text, ...}]
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired
    })
  ),
  onChange: PropTypes.func.isRequired,
  renderItem: PropTypes.func,
  tag: PropTypes.elements,
  options: PropTypes.object
}

SortTableList.defaultProps = {
  renderItem: item => item.text
}

export default SortTableList
