import React from 'react'
import PropTypes from 'prop-types'
import List from '../list'
import classNames from 'classnames'
import _ from 'lodash'
import SVGRightSmall from '../../../svg/right-small.svg'

const Item = props => {
  const {
    title,
    data,
    selected,
    onSelect,
    onListItemMouseEnter,
    willActiveSelected,
    className,
    style
  } = props

  const renderItem = item => {
    return (
      <div className='gm-position-relative'>
        {item.text}
        {item.children && item.children.length && (
          <SVGRightSmall className='gm-level-list-item-right' />
        )}
      </div>
    )
  }

  const getItemProps = item => ({
    onMouseEnter: () => onListItemMouseEnter(item)
  })

  const willActiveIndex = _.findIndex(data, v => v.value === willActiveSelected)

  return (
    <div className={classNames('gm-level-list-item ', className)} style={style}>
      {title && <div className='gm-level-list-item-title'>{title}</div>}
      <List
        data={data}
        selected={selected}
        onSelect={onSelect}
        renderItem={renderItem}
        getItemProps={getItemProps}
        willActiveIndex={willActiveIndex}
      />
    </div>
  )
}

Item.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired, // [{value, text, children}]
  selected: PropTypes.any,
  onSelect: PropTypes.func.isRequired,
  onListItemMouseEnter: PropTypes.func,
  willActiveSelected: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object
}

export default Item
