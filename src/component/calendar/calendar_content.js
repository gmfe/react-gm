import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import _ from 'lodash'
import classNames from 'classnames'

const Day = props => {
  const {
    disabled,
    onClick,
    value,
    will,
    selected,
    beSelected,
    selectedBegin,
    selectedEnd
  } = props

  const nowMountStart = +moment().startOf('day')
  const handleClick = () => {
    if (disabled) {
      return
    }
    onClick(value)
  }

  const isDayActive = () => {
    if (selectedBegin || selectedEnd) {
      const isSelectedBegin = selectedBegin
        ? +moment(selectedBegin).startOf('day') === +value.startOf('day')
        : false
      const isSelectedEnd = selectedEnd
        ? +moment(selectedEnd).startOf('day') === +value.startOf('day')
        : false
      return isSelectedBegin || isSelectedEnd
    } else {
      return +moment(selected).startOf('day') === +value.startOf('day')
    }
  }

  const cn = classNames('gm-calendar-day', {
    'gm-calendar-day-will':
      !selectedBegin && +moment(will).startOf('day') === +value.startOf('day'),
    'gm-calendar-day-now': nowMountStart === +value.startOf('day'),
    'gm-calendar-day-old': moment(will).month() > value.month(),
    'gm-calendar-day-new': moment(will).month() < value.month(),
    'gm-calendar-day-disabled': disabled,
    'gm-calendar-active': isDayActive(),
    'gm-calendar-day-select': beSelected
  })

  return (
    <span className={cn} onClick={handleClick}>
      {value.date()}
    </span>
  )
}

Day.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.object.isRequired,
  will: PropTypes.object.isRequired,
  selected: PropTypes.object.isRequired,
  beSelected: PropTypes.bool,
  selectedBegin: PropTypes.object,
  selectedEnd: PropTypes.object
}

const Content = props => {
  const {
    selected,
    will,
    onSelectDay,
    getDisabled,
    selectedBegin,
    selectedEnd
  } = props

  const m = moment(will)
    .startOf('month')
    .day(0)
    .add(-1, 'day')

  // 新组件添加，判断日期是否在选中区域中
  const isBeSelected = m => {
    if (selectedBegin && selectedEnd) {
      const res =
        moment(selectedBegin).isSameOrBefore(m) &&
        moment(selectedEnd).isSameOrAfter(m)
      return res
    }
    return false
  }

  return (
    <div className='gm-calendar-content'>
      {_.map(_.groupBy(_.range(42), v => parseInt(v / 7)), (v, i) => (
        <div key={i} className='gm-calendar-content-div'>
          {_.map(v, (value, index) => {
            const mm = moment(m.add(1, 'day'))
            return (
              <Day
                key={index}
                selected={moment(selected)}
                will={will}
                value={mm}
                onClick={onSelectDay}
                disabled={getDisabled(mm)}
                beSelected={isBeSelected(mm)}
                selectedBegin={selectedBegin}
                selectedEnd={selectedEnd}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
}

Content.propTypes = {
  selected: PropTypes.object,
  onSelectDay: PropTypes.func.isRequired,
  will: PropTypes.object.isRequired,
  getDisabled: PropTypes.func.isRequired,
  selectedBegin: PropTypes.object,
  selectedEnd: PropTypes.object
}

export default Content
