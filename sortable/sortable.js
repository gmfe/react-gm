import React from 'react'
import PropTypes from 'prop-types'
import SortableBase from './base'
import _ from 'lodash'
import classNames from 'classnames'

const Sortable = ({
  data,
  onChange,
  renderItem,
  tag,
  options = {},
  ...rest
}) => {
  const handleChange = order => {
    order = _.map(order, v => JSON.parse(v))
    const newData = _.sortBy(data.slice(), v => order.indexOf(v.value))
    onChange(newData)
  }

  const items = _.map(data, (v, index) => (
    <div
      key={v.value}
      data-id={JSON.stringify(v.value)}
      className={classNames({
        'gm-cursor-grab': !options.handle
      })}
    >
      {renderItem(v, index)}
    </div>
  ))

  return (
    <SortableBase
      {...rest}
      tag={tag}
      options={{
        animation: 150,
        ...options
      }}
      onChange={handleChange}
    >
      {items}
    </SortableBase>
  )
}

Sortable.propTypes = {
  /** [{value, text, ...}, {value, text, ...}] */
  data: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  renderItem: PropTypes.func,
  /** 支持 ref */
  tag: PropTypes.node,
  options: PropTypes.object
}

Sortable.defaultProps = {
  renderItem: item => item.text
}

export default Sortable
