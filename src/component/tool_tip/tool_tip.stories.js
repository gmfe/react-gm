import React from 'react'
import { storiesOf } from '@storybook/react'
import ToolTip from './'

storiesOf('ToolTip', module).add('default', () => (
  <div style={{ margin: '100px' }}>
    <ToolTip
      popup={<div style={{ width: '100px', height: '100px' }}>hello</div>}
    />
    <ToolTip
      popup={<div style={{ width: '100px', height: '100px' }}>hello</div>}
    >
      <span>hover tip</span>
    </ToolTip>
    <br />
    <ToolTip
      right
      popup={<div style={{ width: '100px', height: '100px' }}>hello</div>}
    >
      <span>right hover tip</span>
    </ToolTip>
    <ToolTip
      center
      popup={<div style={{ width: '100px', height: '100px' }}>hello</div>}
    >
      <span>center hover tip</span>
    </ToolTip>
    <br />
    <ToolTip
      top
      popup={<div style={{ width: '100px', height: '100px' }}>hello</div>}
    >
      <span>top hover tip</span>
    </ToolTip>
  </div>
))
