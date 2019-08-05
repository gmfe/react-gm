import { storiesOf } from '@storybook/react'
import React from 'react'
import {
  FunctionSet,
  FunctionSetMenu,
  FunctionSetItem,
  FunctionSetItemGroup,
  FunctionSetSubmenu
} from './index'
import { Button } from '../button'
import _ from 'lodash'

storiesOf('FunctionSet', module)
  .add('Common', () => {
    return (
      <div style={{ padding: '50px' }}>
        <FunctionSet
          overlay={
            <FunctionSetMenu>
              <FunctionSetItem>Item.1</FunctionSetItem>
              <FunctionSetItem>Item.2</FunctionSetItem>
            </FunctionSetMenu>
          }
        >
          <Button>FunctionSet</Button>
        </FunctionSet>
      </div>
    )
  })
  .add('Placement', () => {
    const placements = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']
    const [placement, changePlacement] = React.useState('bottomLeft')

    const buttons = _.map(placements, item => (
      <Button onClick={() => changePlacement(item)}>{item}</Button>
    ))

    return (
      <div style={{ padding: '100px' }}>
        {buttons}
        <br />
        <FunctionSet
          placement={placement}
          overlay={
            <FunctionSetMenu>
              <FunctionSetItem>Item.1 LOLOLOLOLOLOLOL</FunctionSetItem>
              <FunctionSetItem>Item.2 LOLOLOLOLOLOOLLOL</FunctionSetItem>
            </FunctionSetMenu>
          }
        >
          <Button>FunctionSet</Button>
        </FunctionSet>
      </div>
    )
  })
  .add('Trigger', () => {
    const [trigger, changeTrigger] = React.useState('hover')
    return (
      <div style={{ padding: '100px' }}>
        <Button onClick={() => changeTrigger('hover')}>hover|default</Button>
        <Button onClick={() => changeTrigger('click')}>click</Button>
        <br />
        <FunctionSet
          trigger={trigger}
          overlay={
            <FunctionSetMenu>
              <FunctionSetItem>Item.1 LOLOLOLOLOLOLOL</FunctionSetItem>
              <FunctionSetItem>Item.2 LOLOLOLOLOLOOLLOL</FunctionSetItem>
            </FunctionSetMenu>
          }
        >
          <Button>FunctionSet</Button>
        </FunctionSet>
      </div>
    )
  })
  .add('Cascading menu', () => (
    <div style={{ padding: '100px' }}>
      <FunctionSet
        overlay={
          <FunctionSetMenu>
            <FunctionSetItem>Item.1 LOLOLOLOLOLOLOL</FunctionSetItem>
            <FunctionSetItem>Item.2 LOLOLOLOLOLOOLLOL</FunctionSetItem>
            <FunctionSetSubmenu title='Submenu.1'>
              <FunctionSetItem>Item.1 LOLOLOLOLOLOLOL</FunctionSetItem>
              <FunctionSetItem>Item.2 LOLOLOLOLOLOOLLOL</FunctionSetItem>
              <FunctionSetSubmenu title='Submenu.2'>
                <FunctionSetItem>Item.1 LOLOLOLOLOLOLOL</FunctionSetItem>
                <FunctionSetItem>Item.2 LOLOLOLOLOLOOLLOL</FunctionSetItem>
              </FunctionSetSubmenu>
            </FunctionSetSubmenu>
          </FunctionSetMenu>
        }
      >
        <Button>FunctionSet</Button>
      </FunctionSet>
    </div>
  ))
  .add('Disabled', () => (
    <div style={{ padding: '100px' }}>
      <FunctionSet
        disabled
        overlay={
          <FunctionSetMenu>
            <FunctionSetItem>Item.1 LOLOLOLOLOLOLOL</FunctionSetItem>
            <FunctionSetItem>Item.2 LOLOLOLOLOLOOLLOL</FunctionSetItem>
            <FunctionSetSubmenu title='Submenu.1'>
              <FunctionSetItem>Item.1 LOLOLOLOLOLOLOL</FunctionSetItem>
              <FunctionSetItem>Item.2 LOLOLOLOLOLOOLLOL</FunctionSetItem>
              <FunctionSetSubmenu title='Submenu.2'>
                <FunctionSetItem>Item.1 LOLOLOLOLOLOLOL</FunctionSetItem>
                <FunctionSetItem>Item.2 LOLOLOLOLOLOOLLOL</FunctionSetItem>
              </FunctionSetSubmenu>
            </FunctionSetSubmenu>
          </FunctionSetMenu>
        }
      >
        <Button>FunctionSet</Button>
      </FunctionSet>
      <FunctionSet
        overlay={
          <FunctionSetMenu>
            <FunctionSetItem disabled>Item.1 LOLOLOLOLOLOLOL</FunctionSetItem>
            <FunctionSetItem>Item.2 LOLOLOLOLOLOOLLOL</FunctionSetItem>
            <FunctionSetSubmenu title='Submenu.1' disabled>
              <FunctionSetItem>Item.1 LOLOLOLOLOLOLOL</FunctionSetItem>
              <FunctionSetItem>Item.2 LOLOLOLOLOLOOLLOL</FunctionSetItem>
              <FunctionSetSubmenu title='Submenu.2'>
                <FunctionSetItem>Item.1 LOLOLOLOLOLOLOL</FunctionSetItem>
                <FunctionSetItem>Item.2 LOLOLOLOLOLOOLLOL</FunctionSetItem>
              </FunctionSetSubmenu>
            </FunctionSetSubmenu>
            <FunctionSetSubmenu title='Submenu.1'>
              <FunctionSetItem disabled>Item.1 LOLOLOLOLOLOLOL</FunctionSetItem>
              <FunctionSetItem>Item.2 LOLOLOLOLOLOOLLOL</FunctionSetItem>
              <FunctionSetSubmenu title='Submenu.2'>
                <FunctionSetItem>Item.1 LOLOLOLOLOLOLOL</FunctionSetItem>
                <FunctionSetItem>Item.2 LOLOLOLOLOLOOLLOL</FunctionSetItem>
              </FunctionSetSubmenu>
            </FunctionSetSubmenu>
          </FunctionSetMenu>
        }
      >
        <Button>FunctionSet</Button>
      </FunctionSet>
    </div>
  ))
  .add('Default children', () => (
    <FunctionSet
      overlay={
        <FunctionSetMenu>
          <FunctionSetItem disabled>Item.1 LOLOLOLOLOLOLOL</FunctionSetItem>
          <FunctionSetItem>Item.2 LOLOLOLOLOLOOLLOL</FunctionSetItem>
        </FunctionSetMenu>
      }
    />
  ))
  .add('FunctionSetMenu', () => (
    <div style={{ width: '70%' }}>
      <FunctionSetMenu>
        <FunctionSetItem>Item.1</FunctionSetItem>
        <FunctionSetItem disabled>Item.2</FunctionSetItem>
        <FunctionSetSubmenu title='Title.1'>
          <FunctionSetItem disabled>Item.3</FunctionSetItem>
          <FunctionSetItem>Item.4</FunctionSetItem>
        </FunctionSetSubmenu>
        <FunctionSetSubmenu title='Title.2' disabled>
          <FunctionSetItem>Item.3</FunctionSetItem>
          <FunctionSetItem>Item.4</FunctionSetItem>
        </FunctionSetSubmenu>
      </FunctionSetMenu>
    </div>
  ))
  .add('FunctionSetItemGroup', () => (
    <FunctionSetMenu>
      <FunctionSetItemGroup title='Group.1'>
        <FunctionSetItem>Item.1</FunctionSetItem>
        <FunctionSetItem>Item.2</FunctionSetItem>
      </FunctionSetItemGroup>
      <FunctionSetItemGroup title='Group.2'>
        <FunctionSetItem>Item.3</FunctionSetItem>
        <FunctionSetItem>Item.4</FunctionSetItem>
      </FunctionSetItemGroup>
    </FunctionSetMenu>
  ))
