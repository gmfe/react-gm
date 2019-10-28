import React from 'react'
import { storiesOf } from '@storybook/react'
import { observable } from 'mobx'
import Tree from './'
import _ from 'lodash'
import Flex from '../flex'

const store = observable({
  oneData: [
    {
      value: 1,
      name: '蔬菜'
    },
    {
      value: 2,
      name: '冻品'
    }
  ],
  data: [
    {
      value: 1,
      name: '蔬菜',
      children: [
        {
          value: 11,
          name: '叶菜',
          children: [
            {
              value: 111,
              name:
                '皇帝菜皇帝菜皇帝菜皇帝菜皇帝菜皇帝菜皇帝菜皇帝菜皇帝菜皇帝菜皇帝菜'
            },
            {
              value: 112,
              name: '金不换'
            }
          ]
        },
        {
          value: 12,
          name: '甘蓝',
          children: [
            {
              value: 121,
              name: '甘蓝1'
            },
            {
              value: 122,
              name: '甘蓝2'
            }
          ]
        }
      ]
    },
    {
      value: 2,
      name: '冻品',
      children: [
        {
          value: 21,
          name: '冻猪肉',
          children: [
            {
              value: 211,
              name: '五花肉'
            },
            {
              value: 212,
              name: '猪脚'
            }
          ]
        }
      ]
    }
  ],
  selectedValues: [],
  setSelectedValues(values) {
    this.selectedValues = values
  }
})

storiesOf('Tree', module)
  .add('default', () => (
    <Tree
      list={store.data}
      selectedValues={store.selectedValues}
      onSelectValues={values => store.setSelectedValues(values)}
    />
  ))
  .add('disabled', () => (
    <Tree
      disabled
      list={store.data}
      selectedValues={store.selectedValues}
      onSelectValues={values => store.setSelectedValues(values)}
    />
  ))
  .add('title', () => (
    <Tree
      title='我是标题'
      list={store.data}
      selectedValues={store.selectedValues}
      onSelectValues={values => store.setSelectedValues(values)}
    />
  ))
  .add('disableSelectAll', () => (
    <Tree
      list={store.data}
      selectedValues={store.selectedValues}
      onSelectValues={values => store.setSelectedValues(values)}
      disableSelectAll
    />
  ))
  .add('自定义 checkbox', () => (
    <Tree
      list={store.data}
      selectedValues={store.selectedValues}
      onSelectValues={values => store.setSelectedValues(values)}
      showGroupCheckbox={group => {
        if (group.children && group.children[0] && group.children[0].children) {
          return false
        }
        return true
      }}
    />
  ))
  .add('自定义 渲染', () => (
    <Tree
      list={store.data}
      selectedValues={store.selectedValues}
      onSelectValues={values => store.setSelectedValues(values)}
      renderGroupItem={item => `group ${item.name}`}
      renderLeafItem={item => (
        <div>
          <img
            src='https://img.guanmai.cn/product_pic/cdd0870bc403069b.jpeg'
            style={{ width: '40px', height: '40px' }}
            alt=''
          />
          {`leaf ${item.name}`}
        </div>
      )}
    />
  ))
  .add('单层数据', () => (
    <Tree
      list={store.oneData}
      selectedValues={store.selectedValues}
      onSelectValues={values => store.setSelectedValues(values)}
    />
  ))
  .add('纯树', () => (
    <Tree
      withFilter={false}
      disableSelectAll
      list={store.data}
      selectedValues={store.selectedValues}
      onSelectValues={values => store.setSelectedValues(values)}
    />
  ))
  .add('更夸张的自定义', () => (
    <Tree
      style={{ height: '400px' }}
      list={store.data}
      selectedValues={store.selectedValues}
      onSelectValues={values => store.setSelectedValues(values)}
      onClickGroupName={_.noop}
      onClickLeafName={_.noop}
      renderGroupItem={(item, next) => (
        <Flex>
          <Flex flex>
            <img
              src='https://img.guanmai.cn/product_pic/cdd0870bc403069b.jpeg'
              style={{ width: '40px', height: '40px' }}
              alt=''
            />
            {`group ${item.name}`}
          </Flex>
          <button onClick={() => next()}>点我切换</button>
        </Flex>
      )}
      renderLeafItem={item => (
        <div>
          <img
            src='https://img.guanmai.cn/product_pic/cdd0870bc403069b.jpeg'
            style={{ width: '40px', height: '40px' }}
            alt=''
          />
          {`leaf ${item.name}`}
        </div>
      )}
    />
  ))
  .add('暂时给分类管理用', () => (
    <Tree
      isForManage
      style={{}}
      list={store.data}
      selectedValues={store.selectedValues}
      onSelectValues={values => store.setSelectedValues(values)}
      withFilter={false}
      disableSelectAll
      onClickGroupName={_.noop}
      onClickLeafName={_.noop}
      renderGroupItem={(item, next) => (
        <Flex alignCenter>
          <Flex flex alignCenter>
            <img
              src='https://img.guanmai.cn/icon/icon-veg.4fa23256.png'
              style={{ width: '40px', height: '40px' }}
              alt=''
            />
            &nbsp;&nbsp;
            {`group ${item.name}`}
          </Flex>
          <div>
            <a href='void(0)'>新建二级分类</a>
            &nbsp;&nbsp;<span className='gm-text-desc'>|</span>&nbsp;&nbsp;
            <a href='void(0)'>删除</a>
          </div>
        </Flex>
      )}
      renderLeafItem={item => (
        <div>
          <img
            src='https://img.guanmai.cn/product_pic/cdd0870bc403069b.jpeg'
            style={{ width: '40px', height: '40px' }}
            alt=''
          />
          {`leaf ${item.name}`}
        </div>
      )}
      onClickCheckbox={(item, checked) => {
        console.log(item, checked)
      }}
      onClickExpand={(item, expand) => {
        console.log(item, expand)
      }}
    />
  ))
