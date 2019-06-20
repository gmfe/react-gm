import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import classNames from 'classnames'
import _ from 'lodash'
import Flex from '../flex'
import { getLocale } from '../../locales'

const Day = props => {
  const { disabled, onClick, value, oldSelect, selected } = props

  const nowMountStart = +moment().startOf('day')
  const handleClick = () => {
    if (disabled) {
      return
    }
    onClick(value)
  }

  const cn = classNames('gm-calendar-day', {
    'gm-calendar-day-now': nowMountStart === +value.startOf('day'),
    'gm-calendar-day-old': oldSelect.month() > value.month(),
    'gm-calendar-day-new': oldSelect.month() < value.month(),
    'gm-calendar-day-disabled': disabled,
    'gm-calendar-active': +selected.startOf('day') === +value.startOf('day')
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
  oldSelect: PropTypes.object.isRequired,
  selected: PropTypes.object.isRequired
}

const Head = props => {
  const { oldSelect, onChangeMonth } = props
  const [isShow, setShow] = useState(false)
  const month = oldSelect.month()

  const handleChangeMonth = month => {
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
          <i className='xfont xfont-left-small' />
        </a>
        <Flex flex justifyCenter className='gm-calendar-head-title text-center'>
          <span className='gm-calendar-head-month' onClick={handleShowMonth}>
            {getLocale('calendar', 'months')[month]}
          </span>
          <span>&nbsp;&nbsp;{oldSelect.year()}</span>
        </Flex>
        <a
          href='javascript:;'
          className='gm-calendar-head-next gm-decoration-none'
          onClick={() => handleChangeMonth(month + 1)}
        >
          <i className='xfont xfont-right-small' />
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
            >
              {getLocale('calendar', 'months')[i]}
            </span>
          ))}
        </div>
      )}
    </React.Fragment>
  )
}

Head.propTypes = {
  oldSelect: PropTypes.object.isRequired,
  onChangeMonth: PropTypes.func.isRequired
}

const weekDays = getLocale('calendar', 'weekDays')
const Week = () => {
  return (
    <div className='gm-calendar-week'>
      {_.map(weekDays, (v, i) => (
        <span key={i} className='gm-calendar-day-name'>
          {v}
        </span>
      ))}
    </div>
  )
}

const Content = props => {
  const { selected, oldSelect, onSelectDay, getDisabled } = props

  const m = moment(oldSelect)
    .startOf('month')
    .day(0)
    .add(-1, 'day')

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

Content.propTypes = {
  selected: PropTypes.object,
  oldSelect: PropTypes.object.isRequired,
  onSelectDay: PropTypes.func.isRequired,
  getDisabled: PropTypes.func.isRequired
}

const Calendar = props => {
  const {
    selected,
    onSelect,
    min,
    max,
    disabledDate,
    className,
    ...rest
  } = props
  const _oldSelect = selected ? moment(selected) : moment()

  // daySelect: Date对象，用于处理选择哪一天
  // oldselect: Date对象，用于处理选择哪个月
  const [daySelect, setDaySelect] = useState(selected || null)
  const [oldSelect, setOldSelect] = useState(_oldSelect)

  useEffect(() => {
    setDaySelect(props.selected)
  }, [props.selected])

  const handleSelectDay = m => {
    props.onSelect(m.toDate())
  }

  const handleChangeMonth = month => {
    setOldSelect(moment(oldSelect.month(month)))
  }

  const getDisabled = m => {
    let { min, max, disabledDate } = props
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

  return (
    <div {...rest} className={classNames('gm-calendar', className)}>
      <Head oldSelect={oldSelect} onChangeMonth={e => handleChangeMonth(e)} />
      <Week />
      <Content
        selected={daySelect}
        oldSelect={oldSelect}
        onSelectDay={e => handleSelectDay(e)}
        getDisabled={e => getDisabled(e)}
      />
    </div>
  )
}

Calendar.propTypes = {
  /** Date对象，表示所选的日期 */
  selected: PropTypes.object,
  /** 点击选择日期回调，传入参数为Date对象 */
  onSelect: PropTypes.func,
  /** Date对象，表示可选的最小日期 */
  min: PropTypes.object,
  /** Date对象，表示可选的最大日期 */
  max: PropTypes.object,
  /** 自定义日期是否可选。传入参数为Date对象，返回true or false。 有此属性则min max无效。 */
  disabledDate: PropTypes.func,
  /** 定义样式 */
  className: PropTypes.string,
  /** 定义样式 */
  style: PropTypes.object
}

Calendar.defaultProps = {
  onSelect: _.noop
}

export default Calendar
