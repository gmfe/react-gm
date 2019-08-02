import React from 'react'
import { storiesOf } from '@storybook/react'
import Uploader from './'

storiesOf('Uploader', module)
  .add('default', () => (
    <div>
      <Uploader
        onUpload={(datas, e) => console.log(datas, e)}
        accept='image/*'
      />
    </div>
  ))
  .add('自定义', () => (
    <div>
      <Uploader onUpload={(datas, e) => console.log(datas, e)} accept='.xlsx'>
        <button className='btn'>自定义</button>
      </Uploader>
    </div>
  ))
