import { storiesOf } from '@storybook/react'
import React from 'react'
import DropDownNew from './drop_down_new'
import { ButtonGroup, Button } from '../button'

storiesOf('DropDownNew', module).add('Common', () => (
  <ButtonGroup>
    <Button>DropDown</Button>
    <DropDownNew
      overlay={
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      }
      trigger='hover'
    >
      <Button>...</Button>
    </DropDownNew>
  </ButtonGroup>
))
