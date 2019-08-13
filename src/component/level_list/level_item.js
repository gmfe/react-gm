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
    className,
    onListItemMouseEnter,
    willActiveSelected,
    ...rest
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
    <div className={classNames('gm-level-list-item ', className)}>
      {title && <div className='gm-text-desc gm-padding-5'>{title}</div>}
      <List
        {...rest}
        data={data}
        selected={selected}
        renderItem={renderItem}
        className='gm-border-0'
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
  className: PropTypes.string,
  onListItemMouseEnter: PropTypes.func,
  willActiveSelected: PropTypes.any
}

export default Item
