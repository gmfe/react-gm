import { storiesOf } from '@storybook/react'
import React from 'react'
import DropDownNew from './drop_down_new'

storiesOf('DropDownNew', module).add('Common', () => (
  <DropDownNew container='Hello world!' />
))
