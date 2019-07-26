import React from 'react'
import { storiesOf } from '@storybook/react'
import { Framework, RightTop, Info, FullTab } from './index'

storiesOf('框架|FrameWork', module).add('default', () => (
  <div>
    <Framework
      leftWidth='100px'
      menu={
        <div
          style={{ width: '100px', height: '100vh', backgroundColor: 'red' }}
        >
          adfafa
        </div>
      }
      rightTop={
        <RightTop
          info={
            <Info
              more={[
                {
                  text: 'adfasf',
                  onClick: () => {
                    console.log('123')
                  }
                }
              ]}
            />
          }
        />
      }
    >
      <FullTab tabs={['按订单查看', '按商品查看']}>
        <div>按订单查看</div>
        <div>按商品查看</div>
      </FullTab>
    </Framework>
  </div>
))
