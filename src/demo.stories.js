import React from 'react'
import { storiesOf } from '@storybook/react'
import { Popover } from './index'

storiesOf('内部|demo', module).add('default', () => {
  return (
    <div style={{ paddingTop: '1000px' }}>
      <div
        style={{
          height: '200px',
          backgroundColor: 'blue'
        }}
      />
      <Popover
        top
        popup={() => (
          <div
            style={{
              height: '200px',
              backgroundColor: 'red'
            }}
          >
            adfafas
          </div>
        )}
      >
        <button>top</button>
      </Popover>
      <Popover
        popup={() => (
          <div
            style={{
              height: '200px',
              backgroundColor: 'red'
            }}
          >
            adfafas
          </div>
        )}
      >
        <button>bottom</button>
      </Popover>
    </div>
  )
})
