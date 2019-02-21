import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classNames from 'classnames'

class ListGroup extends React.Component {
  isActive = (value) => {
    const { multiple, selected } = this.props
    if (multiple) {
      return selected.includes(value)
    } else {
      return selected === value
    }
  }

  handleSelect = (item) => {
    const { multiple, selected, onSelect } = this.props
    if (multiple) {
      onSelect(_.xor(selected, [item.value]))
    } else {
      onSelect(item.value)
    }
  }

  handleMouseEnter = (item) => {
    const { onMouseEnter } = this.props

    onMouseEnter(item.value)
  }

  render () {
    const {
      data,
      selected, multiple, onSelect, onMouseEnter, // eslint-disable-line
      renderItem,
      className,
      ...rest
    } = this.props

    return (
      <div
        {...rest}
        className={classNames('gm-list gm-list-group', className)}
      >
        {_.map(data, group => (
          <div key={group.label} className='gm-list-group-item'>
            <div className='gm-text-desc gm-list-label'>{group.label}</div>
            {_.map(group.children, v => (
              <div
                key={v.value}
                className={classNames('gm-list-item', {
                  active: this.isActive(v.value)
                })}
                onClick={this.handleSelect.bind(this, v)}
                onMouseEnter={this.handleMouseEnter.bind(this, v)}
              >
                {renderItem(v)}
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }
}

ListGroup.propTypes = {
  data: PropTypes.array.isRequired, // value text
  selected: PropTypes.any,
  multiple: PropTypes.bool,
  onSelect: PropTypes.func,
  onMouseEnter: PropTypes.func,
  renderItem: PropTypes.func
}

ListGroup.defaultProps = {
  multiple: false,
  onSelect: _.noop,
  onMouseEnter: _.noop,
  renderItem: item => item.text
}

export default ListGroup
