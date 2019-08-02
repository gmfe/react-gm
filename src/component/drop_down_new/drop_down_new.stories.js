import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import {
  DropDownNew,
  DropDownNewMenu,
  DropDownNewItem,
  DropDownNewSubMenu
} from './index'
import { Button } from '../button'

import _ from 'lodash'

const print = e => console.log(e)
const items = _.map([0, 1, 2], (item, index) => {
  return (
    <DropDownNewItem key={index} onClick={() => print(item)}>
      No.{item} Item
    </DropDownNewItem>
  )
})
storiesOf('DropDownNew', module)
  .add('Common', () => {
    return (
      <div style={{ height: '300px', textAlign: 'center', marginTop: '50px' }}>
        <DropDownNew
          placement='bottomRight'
          overlay={<DropDownNewMenu>{items}</DropDownNewMenu>}
        >
          <Button>如果item比包裹层短，会自动补宽</Button>
        </DropDownNew>
      </div>
    )
  })
  .add('Disabled', () => {
    const disabledItems = _.map([0, 1, 2], (item, index) => {
      return (
        <DropDownNewItem
          key={index}
          onClick={() => print(item)}
          disabled={index === 1}
        >
          No.{item} Item
        </DropDownNewItem>
      )
    })
    return (
      <div style={{ height: '300px', textAlign: 'center', marginTop: '50px' }}>
        <DropDownNew
          overlay={<DropDownNewMenu>{items}</DropDownNewMenu>}
          disabled
        >
          <Button>禁用</Button>
        </DropDownNew>
        <DropDownNew
          overlay={<DropDownNewMenu>{disabledItems}</DropDownNewMenu>}
        >
          <Button>禁用Item</Button>
        </DropDownNew>
      </div>
    )
  })
  .add('Placement', () => {
    const buttons = [
      'bottomLeft',
      'bottomCenter',
      'bottomRight',
      'topLeft',
      'topCenter',
      'topRight'
    ]
    const [placement, changePlacement] = useState('bottomLeft')
    return (
      <div style={{ height: '300px', textAlign: 'center', marginTop: '50px' }}>
        {_.map(buttons, (item, index) => {
          return (
            <Button key={index} onClick={() => changePlacement(item)}>
              {item}
            </Button>
          )
        })}
        <br />
        <DropDownNew
          placement={placement}
          overlay={<DropDownNewMenu>{items}</DropDownNewMenu>}
        >
          <Button>位置</Button>
        </DropDownNew>
      </div>
    )
  })
  .add('trigger', () => {
    return (
      <div style={{ height: '300px', textAlign: 'center', marginTop: '50px' }}>
        <DropDownNew overlay={<DropDownNewMenu>{items}</DropDownNewMenu>}>
          <Button>Hover | Default</Button>
        </DropDownNew>
        <DropDownNew
          trigger='click'
          overlay={<DropDownNewMenu>{items}</DropDownNewMenu>}
        >
          <Button>Click</Button>
        </DropDownNew>
      </div>
    )
  })
  .add('Cascading menu', () => {
    return (
      <div style={{ height: '300px', textAlign: 'center', marginTop: '50px' }}>
        <DropDownNew
          overlay={
            <DropDownNewMenu>
              <DropDownNewItem>No.1 Item</DropDownNewItem>
              <DropDownNewSubMenu title='No.1 Submenu'>
                <DropDownNewItem>No.2 Item</DropDownNewItem>
                <DropDownNewItem disabled>No.3 Item</DropDownNewItem>
              </DropDownNewSubMenu>
              <DropDownNewItem disabled>No.4 Item</DropDownNewItem>
              <DropDownNewSubMenu title='No.2 Submenu' disabled>
                <DropDownNewItem>No.5 Item</DropDownNewItem>
              </DropDownNewSubMenu>
            </DropDownNewMenu>
          }
        >
          <Button>多级菜单</Button>
        </DropDownNew>
      </div>
    )
  })
  .add('Button group', () => {})
