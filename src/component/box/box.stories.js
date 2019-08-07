import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from './box'
import BoxTable from './box_table'

storiesOf('Box', module)
  .add('Box', () => (
    <div>
      <Box>这是一块内容</Box>
      <Box>这是一块内容，内容直接会有 border </Box>
      <Box>这是一块内容</Box>
    </div>
  ))
  .add('BoxTable', () => (
    <div>
      <BoxTable
        info={<BoxTable.Info>这是左边的内容</BoxTable.Info>}
        action={<div>这是右边的内容</div>}
      >
        <div>真正的内容</div>
      </BoxTable>
    </div>
  ))
