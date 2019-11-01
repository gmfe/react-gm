import React from 'react'
import { ImportLead } from '../../src/index'

var gridData = {
  loading: false,
  columns: [
    { field: 'id', name: 'id' },
    { field: 'name', name: '名字' },
    { field: 'age', name: '年龄' }
  ],
  list: [
    {
      id: 1,
      name: '偶们啊啊发骚发所发生的',
      age: '10'
    },
    {
      id: 2,
      name: 'haha',
      age: '15'
    },
    {
      id: 1,
      name: '偶们啊啊发骚发所发生的',
      age: '10'
    },
    {
      id: 2,
      name: 'haha',
      age: '15'
    },
    {
      id: 1,
      name: '偶们啊啊发骚发所发生的',
      age: '10'
    },
    {
      id: 2,
      name: 'haha',
      age: '15'
    },
    {
      id: 1,
      name: '偶们啊啊发骚发所发生的',
      age: '10'
    },
    {
      id: 2,
      name: 'haha',
      age: '15'
    },
    {
      id: 1,
      name: '偶们啊啊发骚发所发生的',
      age: '10'
    },
    {
      id: 2,
      name: 'haha',
      age: '15'
    },
    {
      id: 1,
      name: '偶们啊啊发骚发所发生的',
      age: '10'
    },
    {
      id: 2,
      name: 'haha',
      age: '15'
    },
    {
      id: 1,
      name: '偶们啊啊发骚发所发生的',
      age: '10'
    },
    {
      id: 2,
      name: 'haha',
      age: '15'
    },
    {
      id: 1,
      name: '偶们啊啊发骚发所发生的',
      age: '10'
    },
    {
      id: 2,
      name: 'haha',
      age: '15'
    },
    {
      id: 1,
      name: '偶们啊啊发骚发所发生的',
      age: '10'
    },
    {
      id: 2,
      name: 'haha',
      age: '15'
    },
    {
      id: 1,
      name: '偶们啊啊发骚发所发生的',
      age: '10'
    },
    {
      id: 2,
      name: 'haha',
      age: '15'
    },
    {
      id: 1,
      name: '偶们啊啊发骚发所发生的',
      age: '10'
    },
    {
      id: 2,
      name: 'haha',
      age: '15'
    },
    {
      id: 1,
      name: '偶们啊啊发骚发所发生的',
      age: '10'
    },
    {
      id: 2,
      name: 'haha',
      age: '15'
    },
    {
      id: 1,
      name: '偶们啊啊发骚发所发生的',
      age: '10'
    },
    {
      id: 2,
      name: 'haha',
      age: '15'
    },
    {
      id: 1,
      name: '偶们啊啊发骚发所发生的',
      age: '10'
    },
    {
      id: 2,
      name: 'haha',
      age: '15'
    },
    {
      id: 1,
      name: '偶们啊啊发骚发所发生的',
      age: '10'
    },
    {
      id: 2,
      name: 'haha',
      age: '15'
    },
    {
      id: 1,
      name: '偶们啊啊发骚发所发生的',
      age: '10'
    },
    {
      id: 2,
      name: 'haha',
      age: '15'
    },
    {
      id: 1,
      name: '偶们啊啊发骚发所发生的',
      age: '10'
    },
    {
      id: 2,
      name: 'haha',
      age: '15'
    },
    {
      id: 1,
      name: '偶们啊啊发骚发所发生的',
      age: '10'
    },
    {
      id: 2,
      name: 'haha',
      age: '15'
    },
    {
      id: 1,
      name: '偶们啊啊发骚发所发生的',
      age: '10'
    },
    {
      id: 2,
      name: 'haha',
      age: '15'
    },
    {
      id: 1,
      name: '偶们啊啊发骚发所发生的',
      age: '10'
    },
    {
      id: 2,
      name: 'haha',
      age: '15'
    },
    {
      id: 1,
      name: '偶们啊啊发骚发所发生的',
      age: '10'
    },
    {
      id: 2,
      name: 'haha',
      age: '15'
    },
    {
      id: 1,
      name: '偶们啊啊发骚发所发生的',
      age: '10'
    },
    {
      id: 2,
      name: 'haha',
      age: '15'
    },
    {
      id: 1,
      name: '偶们啊啊发骚发所发生的',
      age: '10'
    },
    {
      id: 2,
      name: 'haha',
      age: '15'
    },
    {
      id: 1,
      name: '偶们啊啊发骚发所发生的',
      age: '10'
    },
    {
      id: 2,
      name: 'haha',
      age: '15'
    },
    {
      id: 1,
      name: '偶们啊啊发骚发所发生的',
      age: '10'
    },
    {
      id: 2,
      name: 'haha',
      age: '15'
    }
  ]
}
// var gridData = null;
var tipsData = [
  { index: 1, msg: 'sdf', field: 'id' },
  { index: 3, msg: 'sdf', field: 'name' },
  { index: 7, msg: 'sdf', field: 'id' },
  { index: 4, msg: 'sdf', field: 'name' },
  { index: 0, msg: '这里不对啊', field: 'id' }
]

class ImportLeadWrap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: gridData,
      tips: tipsData
    }
  }

  render() {
    var data = this.state.data
    var tips = this.state.tips

    // 外层容器需提供高度。 ImportLead 会撑满
    return (
      <div style={{ height: 600 }}>
        <ImportLead
          unline
          disableEdit
          data={data}
          tips={tips}
          fileTempUrl='http://www.baidu.com'
          onEdit={this.handleEdit}
        />
      </div>
    )
  }

  componentDidMount() {
    var t = this
    setTimeout(function() {
      t.setState(t.state)
    }, 5000)
  }

  handleEdit(i, field, value, tipsI) {
    // i 是数据的索引， field 对应具体字段，value是修改后的指， tipsI 是提示的索引
    // 提供这些信息主要是让应用修改数据和提示。
    console.log(i, field, value, tipsI)
  }
}

export default ImportLeadWrap
