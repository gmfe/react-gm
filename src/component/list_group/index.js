import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classNames from 'classnames'

class ListGroup extends React.Component {
  render () {
    const {
      data, selected, onSelect, willSelected,
            group, // eslint-disable-line
      renderName, className, ...rest
    } = this.props

    return (
      <div {...rest} className={classNames('gm-list-group list-group', className)}>
        {_.map(data, v => (
          <div key={v.value} className={classNames('list-group-item', {
            active: selected.includes(v.value),
            'will-active': willSelected === v.value
          })} onClick={() => onSelect(v)}>
            {renderName(v)}
          </div>
        ))}
      </div>
    )
  }
}

ListGroup.propTypes = {
  data: PropTypes.array.isRequired, // value name
  selected: PropTypes.array,
  onSelect: PropTypes.func,
  willSelected: PropTypes.any,
  group: PropTypes.bool,
  renderName: PropTypes.func
}

ListGroup.defaultProps = {
  group: false,
  renderName: v => v.name,
  onSelect: _.noop
}

export default ListGroup
