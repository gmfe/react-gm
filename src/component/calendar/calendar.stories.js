import React from 'react'
import { storiesOf } from '@storybook/react'
import Calendar from './index'
import moment from 'moment'
import { observable } from 'mobx'

const calendarStatus = {
  selected: null,
  setSelected(date) {
    this.selected = date
  }
}
const store1 = observable(calendarStatus)
const store2 = observable(calendarStatus)
const store3 = observable(calendarStatus)

storiesOf('Calendar', module)
  .add('common form', () => (
    <Calendar
      selected={store1.selected}
      onSelect={e => store1.setSelected(e)}
    />
  ))
  .add('with minDate && maxDate', () => (
    <Calendar
      selected={store2.selected}
      onSelect={e => store2.setSelected(e)}
      min={moment().toDate()}
      max={moment()
        .add(10, 'd')
        .toDate()}
    />
  ))
  .add('custom disabledDate', () => (
    <Calendar
      selected={store3.selected}
      onSelect={e => store3.setSelected(e)}
      disabledDate={d => {
        return moment(d).get('day') === 5
      }}
    />
  ))
