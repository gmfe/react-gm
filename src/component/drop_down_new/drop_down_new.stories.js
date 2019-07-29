import { storiesOf } from '@storybook/react'
import React from 'react'
import {
  DropDownNew,
  DropDownNewMenu,
  DropDownNewItem,
  DropDownNewSubMenu
} from './index'
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
            <DropDownNewItem disabled>234</DropDownNewItem>
            <DropDownNewItem>345</DropDownNewItem>
          </DropDownNewMenu>
        }
      >
        <Button>
          Dropdown
          <Icon />
        </Button>
      </DropDownNew>
    )
  })
  .add('Button Group', () => {
    const print = () => console.log(123)
    return (
      <ButtonGroup>
        <Button>DropDown</Button>
        <DropDownNew
          trigger='click'
          placement='bottomRight'
          overlay={
            <DropDownNewMenu>
              <DropDownNewItem onClick={print}>
                123123123123123123123123123123123
              </DropDownNewItem>
              <DropDownNewSubMenu title='234' disabled>
                <DropDownNewItem onClick={print}>123123</DropDownNewItem>
              </DropDownNewSubMenu>
              <DropDownNewSubMenu title='111'>
                <DropDownNewItem>234234</DropDownNewItem>
                <DropDownNewItem disabled>111222</DropDownNewItem>
                <DropDownNewItem>908012</DropDownNewItem>
              </DropDownNewSubMenu>
            </DropDownNewMenu>
          }
        >
          <Button>...</Button>
        </DropDownNew>
      </ButtonGroup>
    )
  })
  .add('Sub menu', () => {
    const print = () => console.log(123)
    return (
      <DropDownNew
        trigger='click'
        overlay={
          <DropDownNewMenu>
            <DropDownNewItem onClick={print}>
              123123123123123123123123123123123
            </DropDownNewItem>
            <DropDownNewSubMenu title='234' disabled>
              <DropDownNewItem onClick={print}>123123</DropDownNewItem>
            </DropDownNewSubMenu>
            <DropDownNewSubMenu title='111'>
              <DropDownNewItem>234234</DropDownNewItem>
              <DropDownNewItem disabled>111222</DropDownNewItem>
              <DropDownNewItem>908012</DropDownNewItem>
            </DropDownNewSubMenu>
          </DropDownNewMenu>
        }
      >
        <Button>
          Dropdown
          <Icon />
        </Button>
      </DropDownNew>
    )
  })
