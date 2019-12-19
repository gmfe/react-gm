import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import TreeV2 from './'

const store = observable({
  oneData: [
    {
      value: 1,
      text: '蔬菜'
    },
    {
      value: 2,
      text: '冻品'
    }
  ],
  data: [
    {
      value: 1,
      text: '蔬菜',
      children: [
        {
          value: 11,
          text: '叶菜',
          children: [
            {
              value: 111,
              text:
                '皇帝菜皇帝菜皇帝菜皇帝菜皇帝菜皇帝菜皇帝菜皇帝菜皇帝菜皇帝菜皇帝菜'
            },
            {
              value: 112,
              text: '金不换'
            }
          ]
        },
        {
          value: 12,
          text: '甘蓝',
          children: [
            {
              value: 121,
              text: '甘蓝1'
            },
            {
              value: 122,
              text: '甘蓝2'
            }
          ]
        }
      ]
    },
    {
      value: 2,
      text: '冻品',
      children: [
        {
          value: 21,
          text: '冻猪肉',
          children: [
            {
              value: 211,
              text: '五花肉'
            },
            {
              value: 212,
              text: '猪脚'
            }
          ]
        }
      ]
    }
  ],
  selectedValues: [],
  setSelectedValues(values) {
    console.log(values)
    this.selectedValues = values
  }
})

const Wrap = observer(() => {
  return (
    <div style={{ height: '500px', width: '300px' }}>
      <TreeV2
        list={json.data}
        selectedValues={store.selectedValues.slice()}
        onSelectValues={values => store.setSelectedValues(values)}
      />
    </div>
  )
})

const FlatWrap = observer(() => {
  return (
    <div style={{ height: '500px', width: '300px' }}>
      <TreeV2
        list={flatData}
        selectedValues={store.selectedValues.slice()}
        onSelectValues={values => store.setSelectedValues(values)}
      />
    </div>
  )
})

const TitleWrap = observer(() => {
  return (
    <div style={{ height: '500px', width: '300px' }}>
      <TreeV2
        title='标题拉'
        list={flatData}
        selectedValues={store.selectedValues.slice()}
        onSelectValues={values => store.setSelectedValues(values)}
      />
    </div>
  )
})

export const Default = () => (
  <div>
    <Wrap />
  </div>
)

export const title = () => (
  <div>
    <TitleWrap />
  </div>
)

export const flat = () => (
  <div>
    <FlatWrap />
  </div>
)

export default {
  title: 'TreeV2'
}

const flatData = [
  { value: 'C1292441', text: '中排骨' },
  { value: 'C3125818', text: '保鲜筒子骨' },
  { value: 'C1292444', text: '排骨 不砍' },
  { value: 'C1292448', text: '棒骨（带肉）' },
  { value: 'C1292443', text: '仔排' },
  { value: 'C1292449', text: '棒骨（不带扇骨）' },
  { value: 'C1292451', text: '肉脊骨（20%肉）' },
  { value: 'C1292445', text: '排骨 砍块' },
  { value: 'C1292455', text: '猪脆骨 ' },
  { value: 'C1292456', text: '猪腔骨 ' },
  { value: 'C1292454', text: '猪肋骨（二级）' },
  { value: 'C1292453', text: '猪头骨(7斤/只）' },
  { value: 'C1292446', text: '猪前排（去颈/1.25kg/块）' },
  { value: 'C1292447', text: '棒骨  （砍断）' },
  { value: 'C1292442', text: '排骨块（老排/约3-5厘米）' },
  { value: 'C1292452', text: '扇骨（剁块）' },
  { value: 'C1292450', text: '前腿骨头（带肉）' }
]

const json = {
  code: 0,
  msg: 'ok',
  data: [
    {
      value: 'A33792',
      children: [
        {
          value: 'B119099',
          children: [
            { value: 'C4125709', text: '腿肉（冷鲜）' },
            { value: 'C4125717', text: '肉片（冷鲜）' },
            { value: 'C4125676', text: '带皮五花肉（冷鲜）' },
            { value: 'C4125698', text: '去皮五花肉（冷鲜）' },
            { value: 'C4125706', text: '瘦肉（冷鲜）' }
          ],
          text: '冷鲜肉'
        }
      ],
      text: '冷鲜肉类'
    },
    {
      value: 'A6982',
      children: [
        {
          value: 'B34032',
          children: [
            { value: 'C1292441', text: '中排骨' },
            { value: 'C3125818', text: '保鲜筒子骨' },
            { value: 'C1292444', text: '排骨 不砍' },
            { value: 'C1292448', text: '棒骨（带肉）' },
            { value: 'C1292443', text: '仔排' },
            { value: 'C1292449', text: '棒骨（不带扇骨）' },
            { value: 'C1292451', text: '肉脊骨（20%肉）' },
            { value: 'C1292445', text: '排骨 砍块' },
            { value: 'C1292455', text: '猪脆骨 ' },
            { value: 'C1292456', text: '猪腔骨 ' },
            { value: 'C1292454', text: '猪肋骨（二级）' },
            { value: 'C1292453', text: '猪头骨(7斤/只）' },
            { value: 'C1292446', text: '猪前排（去颈/1.25kg/块）' },
            { value: 'C1292447', text: '棒骨  （砍断）' },
            { value: 'C1292442', text: '排骨块（老排/约3-5厘米）' },
            { value: 'C1292452', text: '扇骨（剁块）' },
            { value: 'C1292450', text: '前腿骨头（带肉）' }
          ],
          text: '猪排骨类'
        },
        {
          value: 'B34021',
          children: [
            { value: 'C1292514', text: '土鸡  （鲜 2斤/只 去内脏）' },
            { value: 'C1354435', text: '老鸡' },
            { value: 'C1634180', text: '黄油鸡' },
            { value: 'C1292516', text: '叫鸡  （鲜 3斤/只 去内脏）' },
            { value: 'C1292509', text: '老母鸡（鲜 3斤/只 去内脏）' },
            { value: 'C1634561', text: '活  乌鸡' },
            { value: 'C1620471', text: '蛋鸡' },
            { value: 'C1292518', text: '草鸡  （鲜 3斤/只 去内脏）' },
            { value: 'C1292513', text: '黑脚鸡  （鲜 3斤/只去内脏）' },
            { value: 'C1880029', text: '正宗土鸡' },
            { value: 'C1292507', text: '乌鸡 （鲜 2斤/只 去内脏）' },
            { value: 'C1292512', text: '矮脚鸡（鲜 2斤/只 去内脏）' },
            { value: 'C1292515', text: '肉鸡  （鲜 3斤/只 去内脏）' },
            { value: 'C1292511', text: '清远鸡 （鲜 2斤/只 去内脏）' },
            { value: 'C1292510', text: '黑毛鸡 （鲜 2斤/只 去内脏）' },
            { value: 'C1354096', text: '仔鸡' },
            { value: 'C1292517', text: '老公鸡  （鲜 3斤/只 去内脏）' },
            { value: 'C1292505', text: '三黄鸡 （鲜 2斤/只 去内脏）' }
          ],
          text: '整鸡类'
        }
      ],
      text: '肉禽类'
    }
  ]
}
