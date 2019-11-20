import classNames from 'classnames'
import PropTypes from 'prop-types'
import _ from 'lodash'
import React from 'react'

const SortHeader = ({ type, className, onClick, onChange, ...rest }) => {
  const handleClick = e => {
    onClick(e)

    if (!type) {
      onChange('asc')
    } else if (type === 'asc') {
      onChange('desc')
    } else if (type === 'desc') {
      onChange(null)
    }
  }

  return (
    <span
      {...rest}
      onClick={handleClick}
      className={classNames(
        'gm-table-x-sort-header gm-cursor',
        {
          'gm-table-x-sort-header-asc': type === 'asc',
          'gm-table-x-sort-header-desc': type === 'desc'
        },
        className
      )}
    />
  )
}

SortHeader.propTypes = {
  type: PropTypes.oneOf(['asc', 'desc']),
  /** 之前很多用了 onClick */
  onClick: PropTypes.func,
  /** 建议用onChange，这样不用管理状态 */
  onChange: PropTypes.func,
  className: PropTypes.string
}

SortHeader.defaultProps = {
  onClick: _.noop,
  onChange: _.noop
}

export default SortHeader
