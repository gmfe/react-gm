import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './'

storiesOf('Button', module)
  .add('default', () => (
    <div>
      默认
      <div>
        <Button className='btn btn-default'>默认</Button>
        <Button className='btn btn-primary'>主色</Button>
        <Button className='btn btn-success'>成功</Button>
        <Button className='btn btn-danger'>危险</Button>
      </div>
      plain
      <div>
        <Button className='btn btn-default btn-plain'>默认</Button>
        <Button className='btn btn-primary btn-plain'>主色</Button>
        <Button className='btn btn-success btn-plain'>成功</Button>
        <Button className='btn btn-danger btn-plain'>危险</Button>
      </div>
      disabled
      <div>
        <Button disabled className='btn btn-default'>
          默认
        </Button>
        <Button disabled className='btn btn-primary'>
          主色
        </Button>
        <Button disabled className='btn btn-success'>
          成功
        </Button>
        <Button disabled className='btn btn-danger'>
          危险
        </Button>
      </div>
      link
      <div>
        <Button className='btn btn-link'>链接</Button>
      </div>
    </div>
  ))
  .add('loading', () => (
    <Button
      className='btn btn-default'
      onClick={() => new Promise(resolve => setTimeout(() => resolve(), 2000))}
    >
      点击显示 loading
    </Button>
  ))
