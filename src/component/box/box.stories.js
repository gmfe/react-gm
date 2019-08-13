import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from './box'
import BoxTable from './box_table'
import BoxForm from './box_form'
import { FormItem, FormBlock, FormButton } from '../form'

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
  .add(
    'BoxForm',
    () => (
      <div>
        <BoxForm>
          <FormBlock col={3}>
            <FormItem label='商品'>
              <input type='text' />
            </FormItem>
            <FormItem label='啦啦'>
              <input type='text' />
            </FormItem>
          </FormBlock>
          <BoxForm.More>
            <FormBlock col={3}>
              <FormItem label='商品'>
                <input type='text' />
              </FormItem>
              <FormItem label='啦啦'>
                <input type='text' />
              </FormItem>
              <FormItem label='商品'>
                <input type='text' />
              </FormItem>
              <FormItem label='啦啦'>
                <input type='text' />
              </FormItem>
              <FormItem label='商品'>
                <input type='text' />
              </FormItem>
              <FormItem label='啦啦'>
                <input type='text' />
              </FormItem>
            </FormBlock>
          </BoxForm.More>
          <FormButton>
            <button className='btn btn-primary' type='submit'>
              搜索
            </button>
            <button className='btn btn-link'>重置</button>
          </FormButton>
        </BoxForm>
      </div>
    ),
    {
      info: {
        text: 'TODO'
      }
    }
  )
