import React from 'react'
import { storiesOf } from '@storybook/react'
import Tip from './index'

storiesOf('Tip', module).add(
  'default',
  () => (
    <div>
      <div>
        <Tip type='success'>啊啊啊</Tip>
        <Tip type='info'>啊啊啊</Tip>
        <Tip type='warning'>啊啊啊</Tip>
        <Tip type='danger'>啊啊啊</Tip>
        <Tip type='success' title='错误'>
          啊啊啊
        </Tip>
      </div>
      <button
        className='btn btn-primary'
        onClick={() => (window.___lastTip = Tip.info('提示啦，提示啦'))}
      >
        默认 3s 关闭
      </button>
      <button
        className='btn btn-default'
        onClick={() =>
          (window.___lastTip = Tip.success({
            children: '需要用户自行关闭的',
            time: 0,
            onClose: () => console.log('tip closed by user')
          }))
        }
      >
        需要用户自行关闭的
      </button>
      <button
        className='btn btn-default'
        onClick={() => Tip.clear(window.___lastTip)}
      >
        关闭指定 tip （比如最后一个tip）
      </button>
    </div>
  ),
  {
    info: {
      text: `
### Static

方法返回 id ,可以通过 clear(id) 来关闭指定的 tip

- \`success()\`
- \`info()\`
- \`warning()\`
- \`danger()\`
- \`clear(id)\`
- \`clearAll()\`
`
    }
  }
)
