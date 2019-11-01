import React from 'react'
import { storiesOf } from '@storybook/react'
import Popover from './index'

const renderPopup = () => {
  return (
    <div style={{ width: '200px', height: '200px' }}>
      <div>啦啦啦啦啦啦啦啦啦啦啦</div>
      <div>啦啦啦啦啦啦啦啦啦啦啦</div>
      <div>啦啦啦</div>
    </div>
  )
}

storiesOf('Popover', module).add('default', () => (
  <div>
    <div>四种行为 focus click hover realFocus</div>
    <div>
      <Popover popup={renderPopup()}>
        <button className='btn btn-default'>focus me default</button>
      </Popover>
      <Popover type='click' popup={renderPopup()}>
        <button className='btn btn-default'>click me</button>
      </Popover>
      <Popover showArrow type='hover' popup={renderPopup()}>
        <button className='btn btn-default'>hover me</button>
      </Popover>
      <Popover showArrow type='realFocus' popup={renderPopup()}>
        <button className='btn btn-default'>realFocus me</button>
      </Popover>
    </div>
    <div>各种位置</div>
    <div>
      <Popover popup={renderPopup()}>
        <button className='btn btn-default'>focus me(default)</button>
      </Popover>
      <Popover right popup={renderPopup()}>
        <button className='btn btn-default'>focus me(right)</button>
      </Popover>
      <Popover center popup={renderPopup()}>
        <button className='btn btn-default'>focus me(center)</button>
      </Popover>
    </div>
    <div>
      <Popover top popup={renderPopup()}>
        <button className='btn btn-default'>focus me(top)</button>
      </Popover>
      <Popover right top popup={renderPopup()}>
        <button className='btn btn-default'>focus me(right top)</button>
      </Popover>
      <Popover center top popup={renderPopup()}>
        <button className='btn btn-default'>focus me(center top)</button>
      </Popover>
    </div>

    <div>偏移位置</div>
    <div>
      <Popover offset={20} popup={renderPopup()}>
        <button className='btn btn-default'>focus me(20)</button>
      </Popover>
      <Popover offset={-20} popup={renderPopup()}>
        <button className='btn btn-default'>focus me(-20)</button>
      </Popover>
      <Popover right offset={20} popup={renderPopup()}>
        <button className='btn btn-default'>focus me(right 20)</button>
      </Popover>
      <Popover right top offset={20} popup={renderPopup()}>
        <button className='btn btn-default'>focus me(right top 20)</button>
      </Popover>
      <Popover center offset={20} popup={renderPopup()}>
        <button className='btn btn-default'>focus me(center 20)</button>
      </Popover>
      <Popover showArrow offset={20} popup={renderPopup()}>
        <button className='btn btn-default'>showArrow(offset 20)</button>
      </Popover>
    </div>

    <div>加角标</div>
    <div>
      <Popover top showArrow popup={renderPopup()}>
        <button className='btn btn-default'>showArrow toptoptoptop</button>
      </Popover>
      <Popover showArrow right popup={renderPopup()}>
        <button className='btn btn-default'>showArrow right</button>
      </Popover>
      <Popover showArrow arrowLeft='0px' popup={renderPopup()}>
        <button className='btn btn-default'>showArrow arrowLeft 0</button>
      </Popover>
    </div>
    <div>disabled</div>
    <div>
      <Popover disabled popup={renderPopup()}>
        <button className='btn btn-default'>focus me(disabled)</button>
      </Popover>
      <Popover popup={renderPopup()}>
        <button disabled className='btn btn-default'>
          focus me(inner disabled)
        </button>
      </Popover>
    </div>
  </div>
))
