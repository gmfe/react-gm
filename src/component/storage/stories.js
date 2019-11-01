import React from 'react'
import { storiesOf } from '@storybook/react'
import { observable } from 'mobx'
import Storage from './index'

const store = observable({
  data: 'ad',
  setData(data) {
    this.data = data
  }
})

storiesOf('Storage', module).add(
  'default',
  () => (
    <div>
      实时存储
      <input
        type='text'
        value={store.data}
        onChange={event => store.setData(event.target.value)}
      />
      <Storage name='test' value={store.data} />
    </div>
  ),
  {
    info: {
      text: `
### Static
- \`set(key, value)\` 
- \`get(key)\`
- \`remove(key)\`
- \`clear\` 慎用，清除本域名全部存储
- \`getAll\` 拿到全部存储，以Obj形式返回
`
    }
  }
)
