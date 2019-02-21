import React, { useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import classNames from 'classnames'
import _ from 'lodash'
import Flex from '../flex'
import { getLocale } from '../../locales'

const Day = props => {
  const nowMountStart = +moment().startOf('day')

  const handleClick = () => {
    const { disabled, onClick, value } = props

    if (disabled) {
      return
    }
    onClick(value)
  }

  const { oldSelect, value, selected, disabled } = props

  const cn = classNames('gm-calendar-day', {
    'gm-calendar-day-now': nowMountStart === +value.startOf('day'),
    'gm-calendar-day-old': oldSelect.month() > value.month(),
    'gm-calendar-day-new': oldSelect.month() < value.month(),
    'gm-calendar-day-disabled': disabled,
    'gm-calendar-active': +selected.startOf('day') === +value.startOf('day')
  })

  return <span className={cn} onClick={handleClick}>{value.date()}</span>
}

const Head = (props) => {
  const { oldSelect, onChangeMonth } = props
  const [isShow, setShow] = useState(false)
  const month = oldSelect.month()

  const handleChangeMonth = (month) => {
    setShow(false)
    onChangeMonth(month)
  }

  const handleShowMonth = () => {
    setShow(true)
  }

  return (
    <React.Fragment>
      <Flex alignCenter className='gm-calendar-head text-center clearfix'>
        <a
          href='javascript:;'
          className='gm-calendar-head-pre gm-decoration-none'
          onClick={() => handleChangeMonth(month - 1)}
        >
          <i className='xfont xfont-left-small'/>
        </a>
        <Flex flex justifyCenter className='gm-calendar-head-title text-center'>
          <span
            className='gm-calendar-head-month'
            onClick={handleShowMonth}
          >{getLocale('calendar', 'months')[month]}</span>
          <span>&nbsp;&nbsp;{oldSelect.year()}</span>
        </Flex>
        <a
          href='javascript:;'
          className='gm-calendar-head-next gm-decoration-none'
          onClick={() => handleChangeMonth(month + 1)}
        >
          <i className='xfont xfont-right-small'/>
        </a>
      </Flex>
      {isShow && (
        <div className='gm-calendar-months'>
          {_.map(_.range(12), i => (
            <span
              key={i}
              className={classNames('gm-calendar-month', {
                'gm-calendar-active': i === month
              })}
              onClick={() => handleChangeMonth(i)}
            >{getLocale('calendar', 'months')[i]}</span>
          ))}
        </div>
      )}
    </React.Fragment>
  )
}

const weekDays = getLocale('calendar', 'weekDays')
const Week = () => {
  return (
    <div className='gm-calendar-week'>
      {_.map(weekDays, (v, i) => (
        <span key={i} className='gm-calendar-day-name'>{v}</span>
      ))}
    </div>
  )
}

const Content = (props) => {
  const { selected, oldSelect, onSelectDay, getDisabled } = props

  const m = moment(oldSelect).startOf('month').day(0).add(-1, 'day')

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
                oldSelect={oldSelect}
                value={mm}
                onClick={onSelectDay}
                disabled={getDisabled(mm)}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
}

class Calendar extends React.Component {
  constructor (props) {
    super(props)
    const { selected } = props
    this.state = {
      selected: selected || null, // 调用方的时间
      oldSelect: selected ? moment(selected) : moment() // 日历内的时间
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.selected) {
      this.setState({
        selected: nextProps.selected
      })
    }
  }

  handleSelectDay = (m) => {
    this.props.onSelect(m.toDate())
  }

  handleChangeMonth = (month) => {
    this.setState({
      oldSelect: this.state.oldSelect.month(month)
    })
  }

  getDisabled = (m) => {
    let { min, max, disabledDate } = this.props
    min = min ? moment(min).startOf('day') : null
    max = max ? moment(max).startOf('day') : null

    let disabled = false

    if (disabledDate) {
      disabled = disabledDate(m.toDate())
    } else {
      if (min && m < min) {
        disabled = true
      }
      if (max && m > max) {
        disabled = true
      }
    }
    return disabled
  }

  render () {
    const {
      selected, onSelect, min, max, disabledDate, // eslint-disable-line
      className,
      ...rest
    } = this.props
    const {
      oldSelect
    } = this.state

    return (
      <div {...rest} className={classNames('gm-calendar', className)}>
        <Head
          oldSelect={oldSelect}
          onChangeMonth={this.handleChangeMonth}
        />
        <Week/>
        <Content
          selected={this.state.selected}
          oldSelect={oldSelect}
          onSelectDay={this.handleSelectDay}
          getDisabled={this.getDisabled}
        />
      </div>
    )
  }
}

Calendar.propTypes = {
  selected: PropTypes.object,
  onSelect: PropTypes.func,
  min: PropTypes.object,
  max: PropTypes.object,
  disabledDate: PropTypes.func
}

Calendar.defaultProps = {
  onSelect: _.noop
}

export default Calendar
