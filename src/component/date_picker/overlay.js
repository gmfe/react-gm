import React from 'react'
import PropTypes from 'prop-types'
import { getLocale } from '../../locales'
import Flex from '../flex'
import Calendar from '../calendar/calendar'
import moment from 'moment'

const Bottom = props => {
  const { onCancel, onOK, date } = props

  const handleClick = () => {
    const today = moment()
    onOK(today)
  }

  return (
    <Flex
      alignCenter
      justifyBetween
      className='gm-border-top'
      style={{
        padding: '5px 10px'
      }}
    >
      <div className='gm-text-hover-primary gm-cursor' onClick={handleClick}>
        {getLocale('今天')}
      </div>
      <div>
        <button className='btn btn-default' onClick={onCancel}>
          取消
        </button>
        <span className='gm-gap-10' />
        <button
          className='btn btn-primary'
          onClick={() => onOK(date)}
          disabled={!date}
        >
          确定
        </button>
      </div>
    </Flex>
  )
}

Bottom.propTypes = {
  onCancel: PropTypes.func,
  onOK: PropTypes.func,
  date: PropTypes.object
}

const OverLay = props => {
  const {
    date,
    onSelectDate,
    willActiveSelected,
    min,
    max,
    disabledDate,
    onCancel,
    onOK
  } = props

  return (
    <Flex flex column>
      <Calendar
        className='gm-border-0'
        selected={date}
        onSelect={onSelectDate}
        willActiveSelected={willActiveSelected}
        min={min}
        max={max}
        disabledDate={disabledDate}
      />
      <Bottom onCancel={onCancel} onOK={onOK} date={date} />
    </Flex>
  )
}

OverLay.propTypes = {
  date: PropTypes.object,
  onSelectDate: PropTypes.func,
  willActiveSelected: PropTypes.bool,
  min: PropTypes.object,
  max: PropTypes.object,
  disabledDate: PropTypes.func,
  onCancel: PropTypes.func,
  onOK: PropTypes.func
}

export default OverLay
