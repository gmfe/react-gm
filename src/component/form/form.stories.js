import React, { useRef } from 'react'
import { storiesOf } from '@storybook/react'
import {
  Form,
  FormItem,
  FormButton,
  FormBlock,
  FormGroup,
  FormPanel
} from './index'
import {
  Select,
  Switch,
  Validator,
  RadioGroup,
  Radio,
  CheckboxGroup,
  Checkbox,
  InputNumberV2,
  Flex
} from '../../index'
import { observable } from 'mobx'

const area = [
  {
    value: 0,
    text: '南山'
  },
  {
    value: 1,
    text: '福田'
  }
]

const store = observable({
  name: '',
  desc: '',
  area: null,
  sex: 0,
  taste: [],
  isWork: false,
  height: null,
  setData(key, value) {
    this[key] = value
  }
})

storiesOf('Form', module)
  .addParameters({
    info: {
      propTablesExclude: [
        Select,
        Switch,
        RadioGroup,
        Radio,
        CheckboxGroup,
        Checkbox,
        InputNumberV2
      ]
    }
  })
  .add('说明', () => <div />, {
    info: {
      text: `
方向：方便大家接入表单，不做冗余事情，不做不合理事情。发现不合理的地方提出来。

尽在不言中...，文档不好写。 麻烦大家保持紧密沟通，和通读文档以便获取更多信息。

哈哈哈


新UI表单约束较多
- 栏数。有 1栏(默认) 2栏 3栏。其中搜索区域 3栏，常规表单区域 1栏 和 2栏
- 栏宽。一个表单内是固定的，宽度默认 320， FormPanel特殊一栏默认是 400，具体情况可自定义
- Item 内自然撑开
- Item宽度。一般占一栏，可能占两栏，可能占三栏
- Item高度。一般占一行，其他看具体情况自然往下撑开
`
    }
  })
  .add(
    '单栏',
    () => (
      <Form
        disabledCol
        labelWidth='100px'
        onSubmit={() => console.log('onSubmit')}
      >
        <FormItem label='名字' required>
          <input
            type='text'
            value={store.name}
            onChange={e => store.setData('name', e.target.value)}
          />
        </FormItem>
        <FormItem
          label='描述'
          required
          validate={Validator.create([], store.desc)}
        >
          <textarea
            value={store.desc}
            onChange={e => store.setData('desc', e.target.value)}
          />
        </FormItem>
        <FormItem label='地区'>
          <Select
            data={area}
            value={store.area}
            onChange={value => store.setData('area', value)}
          />
        </FormItem>
        <FormItem label='是否工作'>
          <Switch
            checked={store.isWork}
            onChange={checked => store.setData('isWork', checked)}
          />
        </FormItem>
        <FormItem label='性别'>
          <RadioGroup
            name='sex'
            inline
            value={store.sex}
            onChange={value => store.setData('sex', value)}
          >
            <Radio value={0}>男</Radio>
            <Radio value={1}>女</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label='兴趣'>
          <CheckboxGroup
            name='taste'
            inline
            value={store.taste}
            onChange={value => store.setData('taste', value)}
          >
            <Checkbox value={0}>阅读</Checkbox>
            <Checkbox value={1}>打篮球</Checkbox>
            <Checkbox value={2}>美食</Checkbox>
            <Checkbox value={3}>旅游</Checkbox>
          </CheckboxGroup>
        </FormItem>
        <FormItem label='自定义' unLabelTop>
          <div>
            这里是自定义。没有上边距的情况下，label 要对齐，则提供 unLabelTop
            去掉 label 的上边距
          </div>
        </FormItem>
        <FormItem label='身高'>
          <InputNumberV2
            value={store.height}
            onChange={value => store.setData('height', value)}
          />
          <div className='gm-text-desc gm-margin-top-5'>要填写升高，升高</div>
          <div>（这里演示多个 children 的情况）</div>
        </FormItem>
        <FormButton>
          <button className='btn btn-primary' type='submit'>
            提交
          </button>
        </FormButton>
      </Form>
    ),
    {
      info: {
        text: `
Form 包住。一栏用法需要提供 disableCol。

FormItem 包住表单元素
- 可以简单包住 input 即可，FormItem 会自动去识别常用的表单元素，并添加 form-control 类名，以便撑开
- children 可以是数组，FormItem 读到第一个表单元素，做上面的操作

`
      }
    }
  )
  .add(
    '多栏',
    () => (
      <Form labelWidth='100px' onSubmit={() => console.log('onSubmit')}>
        <FormBlock col={2}>
          <FormItem label='名字' required>
            <input
              type='text'
              value={store.name}
              onChange={e => store.setData('name', e.target.value)}
            />
          </FormItem>
          <FormItem label='地区'>
            <Select
              data={area}
              value={store.area}
              onChange={value => store.setData('area', value)}
            />
          </FormItem>
          <FormItem label='是否工作'>
            <Switch
              checked={store.isWork}
              onChange={checked => store.setData('isWork', checked)}
            />
          </FormItem>
          <FormItem label='身高'>
            <InputNumberV2
              value={store.height}
              onChange={value => store.setData('height', value)}
            />
            <div className='gm-text-desc gm-margin-top-5'>要填写升高，升高</div>
            <div>（这里演示多个 children 的情况）</div>
          </FormItem>
          <FormItem label='性别'>
            <RadioGroup
              name='sex'
              inline
              value={store.sex}
              onChange={value => store.setData('sex', value)}
            >
              <Radio value={0}>男</Radio>
              <Radio value={1}>女</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label='兴趣'>
            <CheckboxGroup
              name='taste'
              inline
              value={store.taste}
              onChange={value => store.setData('taste', value)}
            >
              <Checkbox value={0}>阅读</Checkbox>
              <Checkbox value={1}>打篮球</Checkbox>
              <Checkbox value={2}>美食</Checkbox>
              <Checkbox value={3}>旅游</Checkbox>
            </CheckboxGroup>
          </FormItem>
        </FormBlock>
        <FormItem
          col={2}
          label='描述'
          required
          validate={Validator.create([], store.desc)}
        >
          <textarea
            value={store.desc}
            onChange={e => store.setData('desc', e.target.value)}
          />
        </FormItem>
        <FormItem col={2} label='自定义' unLabelTop>
          <div>
            这里是自定义。没有上边距的情况下，label 要对齐，则提供 unLabelTop
            去掉 label 的上边距
          </div>
        </FormItem>

        <FormButton>
          <button className='btn btn-primary' type='submit'>
            提交
          </button>
        </FormButton>
      </Form>
    ),
    {
      info: {
        text: `
多栏会涉及 FormBlock。用 FormBlock 把一类表单元素框起来。然后给 col，让表单元素自适应
`
      }
    }
  )
  .add(
    '多个表单',
    () => {
      const form1 = useRef(null)
      const form2 = useRef(null)
      return (
        <FormGroup
          formRefs={[form1, form2]}
          onCancel={() => console.log('Cancel')}
          onSubmit={() => console.log('onSubmit')}
        >
          <div>第一个表单</div>
          <Form ref={form1} labelWidth='100px' hasButtonInGroup>
            <FormItem label='名字' required>
              <input
                type='text'
                value={store.name}
                onChange={e => store.setData('name', e.target.value)}
              />
            </FormItem>
          </Form>
          <div>第二个表单</div>
          <Form ref={form2} labelWidth='100px' hasButtonInGroup>
            <FormItem
              label='描述'
              required
              validate={Validator.create([], store.desc)}
            >
              <textarea
                value={store.desc}
                onChange={e => store.setData('desc', e.target.value)}
              />
            </FormItem>
            <FormItem label='名字' required>
              <input
                type='text'
                value={store.name}
                onChange={e => store.setData('name', e.target.value)}
              />
            </FormItem>
          </Form>
        </FormGroup>
      )
    },
    {
      info: {
        text: `
当表单元素多的时候，按钮部分会吸低
`
      }
    }
  )
  .add('form panel', () => {
    const form3 = useRef(null)
    const form4 = useRef(null)
    return (
      <FormGroup
        formRefs={[form3, form4]}
        onCancel={() => console.log('Cancel')}
        onSubmit={() => console.log('onSubmit')}
      >
        <FormPanel
          title='店铺设置'
          right={<span onClick={() => console.log('删除')}>删除</span>}
        >
          <Form
            colWidth='400px'
            ref={form3}
            labelWidth='160px'
            hasButtonInGroup
          >
            <FormItem label='名字' colWidth='700px' required>
              <input
                type='text'
                className='form-control'
                value={store.name}
                onChange={e => store.setData('name', e.target.value)}
              />
            </FormItem>
            <FormItem label='邀请码' required>
              <input
                type='text'
                value={store.name}
                onChange={e => store.setData('name', e.target.value)}
              />
              <div className='gm-text-desc gm-margin-top-5'>
                可以允许商户在规定时间内自主修改已提交订单内容
              </div>
            </FormItem>

            <FormBlock col={2}>
              <FormItem
                label='名字'
                required
                toolTip={
                  <div
                    className='gm-padding-10 gm-bg'
                    style={{ width: '455px' }}
                  >
                    <p style={{ marginBottom: '4px', fontSize: '12px' }}>
                      23333333333333333
                    </p>
                    <p style={{ marginBottom: 0, fontSize: '12px' }}>
                      4555555555555555
                    </p>
                  </div>
                }
              >
                <Flex alignCenter>
                  <input
                    type='text'
                    className='form-control'
                    value={store.name}
                    onChange={e => store.setData('name', e.target.value)}
                  />
                </Flex>
              </FormItem>
              <FormItem label='地区'>
                <Select
                  data={area}
                  value={store.area}
                  onChange={value => store.setData('area', value)}
                />
              </FormItem>
              <FormItem
                label='描述'
                required
                validate={Validator.create([], store.desc)}
              >
                <textarea
                  value={store.desc}
                  onChange={e => store.setData('desc', e.target.value)}
                />
              </FormItem>
              <FormItem label='兴趣'>
                <CheckboxGroup
                  style={{ width: '400px' }}
                  name='taste'
                  inline
                  value={store.taste}
                  onChange={value => store.setData('taste', value)}
                >
                  <Checkbox value={0}>阅读</Checkbox>
                  <Checkbox value={1}>打篮球</Checkbox>
                  <Checkbox value={2}>美食</Checkbox>
                  <Checkbox value={0}>阅读</Checkbox>
                  <Checkbox value={1}>打篮球</Checkbox>
                  <Checkbox value={2}>美食</Checkbox>
                </CheckboxGroup>
              </FormItem>
            </FormBlock>
            <FormPanel.More>
              <FormBlock col={2}>
                <FormItem label='邀请码' required>
                  <input
                    type='text'
                    value={store.name}
                    onChange={e => store.setData('name', e.target.value)}
                  />
                  <div className='gm-text-desc gm-margin-top-5'>
                    可以允许商户在规定时间内自主修改已提交订单内容
                  </div>
                </FormItem>
                <FormItem label='名字' required>
                  <input
                    type='text'
                    value={store.name}
                    onChange={e => store.setData('name', e.target.value)}
                  />
                </FormItem>
                <FormItem label='地区地区地区'>
                  <Select
                    data={area}
                    value={store.area}
                    onChange={value => store.setData('area', value)}
                  />
                </FormItem>
                <FormItem label='是否工作' required>
                  <Switch
                    checked={store.isWork}
                    onChange={checked => store.setData('isWork', checked)}
                  />
                </FormItem>
              </FormBlock>
            </FormPanel.More>
          </Form>
        </FormPanel>

        <FormPanel
          title='店铺设置'
          right={<span onClick={() => console.log('删除')}>删除</span>}
        >
          <Form
            colWidth='400px'
            ref={form4}
            labelWidth='160px'
            hasButtonInGroup
          >
            <FormItem label='名字' required>
              <input
                type='text'
                value={store.name}
                onChange={e => store.setData('name', e.target.value)}
              />
            </FormItem>

            <FormBlock col={2}>
              <FormItem label='邀请码' required>
                <input
                  type='text'
                  value={store.name}
                  onChange={e => store.setData('name', e.target.value)}
                />
                <div className='gm-text-desc gm-margin-top-5'>
                  可以允许商户在规定时间内自主修改已提交订单内容
                </div>
              </FormItem>
              <FormItem label='名字' required>
                <input
                  type='text'
                  value={store.name}
                  onChange={e => store.setData('name', e.target.value)}
                />
              </FormItem>
              <FormItem label='地区地区地区'>
                <Select
                  data={area}
                  value={store.area}
                  onChange={value => store.setData('area', value)}
                />
              </FormItem>
              <FormItem label='是否工作' required>
                <Switch
                  checked={store.isWork}
                  onChange={checked => store.setData('isWork', checked)}
                />
              </FormItem>
            </FormBlock>
            <FormItem
              label='描述'
              required
              validate={Validator.create([], store.desc)}
            >
              <textarea
                value={store.desc}
                onChange={e => store.setData('desc', e.target.value)}
              />
            </FormItem>
          </Form>
        </FormPanel>
      </FormGroup>
    )
  })
