import React from 'react'
import { storiesOf } from '@storybook/react'
import Calendar from './calendar'
import RangeCalendar from './range_calendar'
import { observable } from 'mobx'
import moment from 'moment'

const store = observable({
  selected: null,
  setSelected(date) {
    this.selected = date
  }
})

const rangeStore = observable({
  begin: null,
  end: null,
  setSelected(begin, end) {
    console.log(begin, end)
    this.begin = begin
    this.end = end
  }
})

storiesOf('Calendar', module)
  .add('default', () => (
    <Calendar
      selected={store.selected}
      onSelect={selected => store.setSelected(selected)}
    />
  ))
  .add('min max', () => (
    <Calendar
      selected={store.selected}
      onSelect={selected => store.setSelected(selected)}
      min={moment().toDate()}
      max={moment()
        .add(10, 'd')
        .toDate()}
    />
  ))
  .add('custom disabledDate', () => (
    <Calendar
      selected={store.selected}
      onSelect={selected => store.setSelected(selected)}
      disabledDate={d => {
        return moment(d).get('day') === 5
      }}
    />
  ))

storiesOf('RangeCalendar', module).add('default', () => (
  <RangeCalendar
    begin={rangeStore.begin}
    end={rangeStore.end}
    onSelect={(begin, end) => rangeStore.setSelected(begin, end)}
  />
))
