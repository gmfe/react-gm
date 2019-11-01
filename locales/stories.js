import React from 'react'
import { storiesOf } from '@storybook/react'
import { setLocale } from './index'
import { Storage } from '../src'
import { observable } from 'mobx'

const store = observable({
  lng: Storage.get('lng') || 'zh'
})

storiesOf('locale', module).add('default', () => (
  <select
    value={store.lng}
    onChange={e => {
      Storage.set('lng', e.target.value)
      setLocale(e.target.value)
      store.lng = e.target.value
    }}
    style={{ verticalAlign: 'middle' }}
  >
    <option value='en'>English</option>
    <option value='zh'>中文</option>
  </select>
))
