import { storiesOf } from '@storybook/react'
import React from 'react'
import DropDownNew from './drop_down_new'
import Button from '../button'

storiesOf('DropDownNew', module).add('Common', () => (
  <DropDownNew disabled>
    <Button>123123</Button>
  </DropDownNew>
))
