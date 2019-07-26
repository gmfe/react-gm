import { storiesOf } from '@storybook/react'
import React from 'react'
import { DropDownNew, DropDownNewMenu, DropDownNewItem } from './index'
import { ButtonGroup, Button } from '../button'
import Icon from '../../../svg/down.svg'

storiesOf('DropDownNew', module)
  .add('Common', () => {
    const print = () => console.log(123)
    return (
      <DropDownNew
        overlay={
          <DropDownNewMenu>
            <DropDownNewItem onClick={print}>123</DropDownNewItem>
            <DropDownNewItem>234</DropDownNewItem>
            <DropDownNewItem>345</DropDownNewItem>
          </DropDownNewMenu>
        }
        trigger='click'
      >
        <Button>
          Dropdown
          <Icon />
        </Button>
      </DropDownNew>
    )
  })
  .add('Button Group', () => (
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
