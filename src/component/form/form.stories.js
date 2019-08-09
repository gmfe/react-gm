import React, { useRef } from 'react'
import { storiesOf } from '@storybook/react'
import { Form, FormItem, FormButton, FormBlock, FormGroup } from './index'
import Switch from '../switch/index'
import Uploader from '../uploader/index'
import { QuickPanel } from '../../deprecated/quick'

import Validator from '../../validator'
import { observable } from 'mobx'

const store = observable({
  name: '',
  desc: '',
  name2: '',
  desc2: '',
  setData({ key, value }) {
    this[key] = value
  }
})

storiesOf('Form', module)
  .add('default', () => (
    <Form labelWidth='100px' onSubmit={() => console.log('onSubmit')}>
      <FormBlock>
        <FormItem
          label='名字'
          required
          validate={Validator.create([], store.name)}
        >
          <input
            type='text'
            value={store.name}
            onChange={e =>
              store.setData({ key: 'name', value: e.target.value })
            }
          />
        </FormItem>
        <FormItem
          label='描述'
          required
          validate={Validator.create([], store.desc)}
        >
          <input
            type='text'
            value={store.desc}
            onChange={e =>
              store.setData({ key: 'desc', value: e.target.value })
            }
          />
        </FormItem>
        <FormItem
          label='描述'
          required
          validate={Validator.create([], store.desc)}
        >
          <input
            type='text'
            value={store.desc}
            onChange={e =>
              store.setData({ key: 'desc', value: e.target.value })
            }
          />
        </FormItem>
        <FormItem
          label='描述'
          required
          validate={Validator.create([], store.desc)}
        >
          <input
            type='text'
            value={store.desc}
            onChange={e =>
              store.setData({ key: 'desc', value: e.target.value })
            }
          />
        </FormItem>
      </FormBlock>
      <FormBlock col={2}>
        <FormItem
          label='名字'
          required
          validate={Validator.create([], store.name)}
        >
          <input
            type='text'
            value={store.name}
            onChange={e =>
              store.setData({ key: 'name', value: e.target.value })
            }
          />
        </FormItem>
        <FormItem
          label='描述'
          required
          validate={Validator.create([], store.desc)}
        >
          <input
            type='text'
            value={store.desc}
            onChange={e =>
              store.setData({ key: 'desc', value: e.target.value })
            }
          />
        </FormItem>
        <FormItem
          label='描述'
          required
          validate={Validator.create([], store.desc)}
        >
          <input
            type='text'
            value={store.desc}
            onChange={e =>
              store.setData({ key: 'desc', value: e.target.value })
            }
          />
        </FormItem>
        <FormItem
          label='描述'
          required
          validate={Validator.create([], store.desc)}
        >
          <input
            type='text'
            value={store.desc}
            onChange={e =>
              store.setData({ key: 'desc', value: e.target.value })
            }
          />
        </FormItem>
      </FormBlock>
      <FormBlock col={3}>
        <FormItem
          label='名字'
          required
          validate={Validator.create([], store.name)}
        >
          <input
            type='text'
            value={store.name}
            onChange={e =>
              store.setData({ key: 'name', value: e.target.value })
            }
          />
        </FormItem>
        <FormItem
          label='描述'
          required
          validate={Validator.create([], store.desc)}
        >
          <input
            type='text'
            value={store.desc}
            onChange={e =>
              store.setData({ key: 'desc', value: e.target.value })
            }
          />
        </FormItem>
        <FormItem
          label='描述'
          required
          validate={Validator.create([], store.desc)}
        >
          <input
            type='text'
            value={store.desc}
            onChange={e =>
              store.setData({ key: 'desc', value: e.target.value })
            }
          />
        </FormItem>
        <FormItem
          label='描述'
          required
          validate={Validator.create([], store.desc)}
        >
          <input
            type='text'
            value={store.desc}
            onChange={e =>
              store.setData({ key: 'desc', value: e.target.value })
            }
          />
        </FormItem>
      </FormBlock>
      <FormItem
        label='名字'
        required
        validate={Validator.create([], store.name)}
      >
        <input
          type='text'
          value={store.name}
          onChange={e => store.setData({ key: 'name', value: e.target.value })}
        />
      </FormItem>
      <FormButton>
        <button className='btn btn-primary' type='submit'>
          提交
        </button>
      </FormButton>
    </Form>
  ))
  .add('配合一些组件', () => (
    <Form
      onSubmit={() => {
        console.log('onSubmit')
      }}
      labelWidth='100px'
      horizontal
    >
      <FormItem label='姓名'>
        <input type='text' />
      </FormItem>
      <FormItem label='描述'>
        <textarea type='text' name='desc' />
      </FormItem>
      <FormItem label='switch'>
        <Switch type='primary' checked onChange={() => {}} />
      </FormItem>
      <FormItem label='switch'>
        <Switch
          type='primary'
          checked
          onChange={() => {}}
          off='关闭'
          on='开启'
        />
      </FormItem>
      <FormItem label='switch'>
        <Switch type='primary' checked onChange={() => {}} off='否' on='是' />
      </FormItem>
      <FormItem label='image'>
        <Uploader
          onUpload={(datas, e) => console.log(datas, e)}
          accept='image/*'
        />
      </FormItem>
      <FormButton>
        <button className='btn btn-primary' type='submit'>
          提交
        </button>
      </FormButton>
    </Form>
  ))
  .add('分组', () => {
    const form1 = useRef(null)
    const form2 = useRef(null)
    return (
      <FormGroup
        formRefs={[form1, form2]}
        onCancel={() => console.log('Cancel')}
        onSubmit={() => console.log('onSubmit')}
        onSubmitValidated={() => console.log('onSubmitValidated')}
      >
        <QuickPanel icon='todo' iconColor='#4fb7de' title='基础信息'>
          <Form ref={form1} hasButtonInGroup>
            <FormItem
              label='名字'
              required
              validate={Validator.create([], store.name)}
            >
              <input
                type='text'
                value={store.name}
                onChange={e =>
                  store.setData({ key: 'name', value: e.target.value })
                }
              />
            </FormItem>
            <FormItem
              label='描述'
              required
              validate={Validator.create([], store.desc)}
            >
              <input
                type='text'
                value={store.desc}
                onChange={e =>
                  store.setData({ key: 'desc', value: e.target.value })
                }
              />
            </FormItem>
          </Form>
        </QuickPanel>

        <QuickPanel
          icon='todo'
          iconColor='#4fb7de'
          title='销售信息'
          right={<div>右边</div>}
        >
          <Form horizontal labelWidth='100px' ref={form2} hasButtonInGroup>
            <FormItem
              label='名字'
              required
              validate={Validator.create([], store.name)}
            >
              <input
                type='text'
                value={store.name}
                onChange={e =>
                  store.setData({ key: 'name', value: e.target.value })
                }
              />
            </FormItem>
            <FormItem
              label='描述'
              required
              validate={Validator.create([], store.desc)}
            >
              <input
                type='text'
                value={store.desc}
                onChange={e =>
                  store.setData({ key: 'desc', value: e.target.value })
                }
              />
            </FormItem>
          </Form>
        </QuickPanel>
      </FormGroup>
    )
  })
  .add('other', () => (
    <div>
      <Form labelWidth='5em' onSubmit={() => console.log('onSubmit')}>
        <FormItem
          label='名字'
          required
          validate={Validator.create([], store.name)}
        >
          <input
            type='text'
            value={store.name}
            onChange={e =>
              store.setData({ key: 'name', value: e.target.value })
            }
          />
        </FormItem>
        <FormItem
          label='描述'
          required
          validate={Validator.create([], store.desc)}
        >
          <input
            type='text'
            value={store.desc}
            onChange={e =>
              store.setData({ key: 'desc', value: e.target.value })
            }
          />
        </FormItem>
        <FormButton>
          <button className='btn btn-primary' type='submit'>
            提交
          </button>
        </FormButton>
      </Form>
      <hr />
      <Form inline labelWidth='5em' onSubmit={() => console.log('onSubmit')}>
        <FormItem
          label='名字'
          required
          validate={Validator.create([], store.name)}
        >
          <input
            type='text'
            value={store.name}
            onChange={e =>
              store.setData({ key: 'name', value: e.target.value })
            }
          />
        </FormItem>
        <FormItem
          label='描述'
          required
          validate={Validator.create([], store.desc)}
        >
          <input
            type='text'
            value={store.desc}
            onChange={e =>
              store.setData({ key: 'desc', value: e.target.value })
            }
          />
        </FormItem>
        <FormButton>
          <button className='btn btn-primary' type='submit'>
            提交
          </button>
        </FormButton>
      </Form>
    </div>
  ))
