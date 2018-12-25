import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import _ from 'lodash'
import classNames from 'classnames'

class TimeSpan extends React.Component {
  getCells () {
    const { min, max, span } = this.props
    const dMax = max ? moment(max) : moment().endOf('day')
    let d = min ? moment(min) : moment().startOf('day')
    let cells = []
    while (d <= dMax) {
      cells.push(d)
      d = moment(d + span)
    }
    return cells
  }

  handleSelect (value) {
    this.props.onSelect(value.toDate())
  }

  render () {
    const { selected, render, disabledSpan } = this.props
    const cells = this.getCells()

    return (
      <div className='gm-time-span'>
        {_.map(cells, (value, i) => {
          const disabled = disabledSpan && disabledSpan(value)
          return (
            <div
              key={i}
              className={classNames('gm-time-span-cell', {
                active: +value === +selected,
                disabled
              })}
              onClick={disabled ? _.noop : this.handleSelect.bind(this, value)}
            >
              {render(value.toDate())}
            </div>
          )
        })}
      </div>
    )
  }
}

TimeSpan.propTypes = {
  min: PropTypes.object,
  max: PropTypes.object,
  disabledSpan: PropTypes.func,
  span: PropTypes.number,
  selected: PropTypes.object,
  render: PropTypes.func,
  onSelect: PropTypes.func
}
TimeSpan.defaultProps = {
  min: moment().startOf('day').toDate(),
  max: moment().endOf('day').toDate(),
  span: 30 * 60 * 1000,
  render: value => moment(value).format('HH:mm'),
  onSelect: _.noop
}

export default TimeSpan
