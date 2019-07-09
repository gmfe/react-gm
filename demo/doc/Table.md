---
imports:
    import {Table, SelectTable, ExpandTable, TableUtil, diyTableHOC} from '../../table';
    import DndTable from '../../table/dnd_table';
    import {Popover, Select, Option} from '../../src/index';

    const DiyTable = diyTableHOC(Table);
---

封装 [react-table](https://github.com/react-tools/react-table)

## Table

Table 对于无内容会自动填充 -

::: demo 数据
```js
const data = [
  {
    'total_money': '2390.00',
    'id': 'T5991-JHD-2018-07-25-00027',
    'sku_money': '2390.00',
    'supplier_customer_id': 'LDP20180117',
    'submit_time': '2018-07-25',
    'status': 2,
    'supplier_name': '',
    'date_time': '2018-07-25',
    'delta_money': 0,
    'settle_supplier_id': 'T10953'
  }, {
    'total_money': '176.00',
    'id': 'T5991-JHD-2018-07-25-00026',
    'sku_money': '176.00',
    'supplier_customer_id': 'A2926',
    'submit_time': '2018-07-25',
    'status': 2,
    'supplier_name': '段虎',
    'date_time': '2018-07-25',
    'delta_money': 0,
    'settle_supplier_id': 'T14319'
  }, {
    'total_money': '279.00',
    'id': 'T5991-JHD-2018-07-25-00025',
    'sku_money': '279.02',
    'supplier_customer_id': 'sc215',
    'submit_time': '2018-07-25',
    'status': 2,
    'supplier_name': '黑市桥蔬菜批发',
    'date_time': '2018-07-25',
    'delta_money': -2.0,
    'settle_supplier_id': 'T13324'
  }, {
    'total_money': '714.70',
    'id': 'T5991-JHD-2018-07-25-00024',
    'sku_money': '714.70',
    'supplier_customer_id': 'DZP001',
    'submit_time': '2018-07-25',
    'status': 2,
    'supplier_name': '黑市桥豆制品批发1号摊位',
    'date_time': '2018-07-25',
    'delta_money': 0,
    'settle_supplier_id': 'T9651'
  }
]
```
:::

---

## DndTable

可拖拽表格

::: demo 可拖拽表格
```js
class DndTableWrap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data   
    }
  }

  onDragEnd = result => {
    console.log(result);

    let data = this.state.data.slice();

    let [removed] = data.splice(result.source.index, 1);
    data.splice(result.destination.index, 0, removed);

    this.setState({data})
  }

  render() {
    return (
      <DndTable
        data={this.state.data}
        getDraggableClass={(snapshot)=>{
          if(snapshot.isDragging){
            return 'doc-dragging'
          }
        }}
        rowKey="id"
        onDragEnd={this.onDragEnd}
        columns={[{
          Header: '建单时间',
          accessor: 'submit_time'
        }, {
          Header: '入库单号',
          accessor: 'id'
        }, {
          Header: '供应商信息',
          accessor: 'supplier_name'
        }, {
          Header: '入库金额',
          accessor: 'total_money'
        }, {
          Header: '单据状态',
          accessor: 'status'
        }]}
      />
    )
  }
}
```

```jsx
<DndTableWrap/>
```
:::

::: demo 可拖拽表格 点击部分列可拖拽
```js
class DndFieldTableWrap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data   
    }
  }

  onDragEnd = result => {
    console.log(result);

    let data = this.state.data.slice();

    let [removed] = data.splice(result.source.index, 1);
    data.splice(result.destination.index, 0, removed);

    this.setState({data})
  }

  render() {
    return (
      <DndTable
        data={this.state.data}
        getDraggableClass={(snapshot)=>{
          if(snapshot.isDragging){
            return 'doc-dragging'
          }
        }}
        rowKey="id"
        onDragEnd={this.onDragEnd}
        columns={[{
          Header: '建单时间',
          accessor: 'submit_time'
        }, {
          Header: '可拖拽列',
          dragField: true,
          accessor: 'id'
        }, {
          Header: '供应商信息',
          accessor: 'supplier_name'
        }, {
          Header: '入库金额',
          accessor: 'total_money'
        }, {
          Header: '单据状态',
          accessor: 'status'
        }]}
      />
    )
  }
}
```

```jsx
<DndFieldTableWrap/>
```
:::

### Props
- `rowKey (string|func|required)` 行键字段，可指定函数 `(rowInfo) => string`
- `dndDisabled (bool)` 是否禁用拖拽，默认 false
- `columns (array|required)` 
  + `dragField (bool)` 点击该列可拖拽。无任何列为 true 则默认点击整行都可拖拽。

拖拽回调，见react-beautiful-dnd官方文档：

- `onBeforeDragStart (func)` 
- `onDragStart (func)` 
- `onDragUpdate (func)`
- `onDragEnd (func|required)`

设置 react-beautiful-dnd `<Droppable>`、`<Draggable>` 的 props/style/class:

- `getDraggableProps (func)` `(rowInfo) => object`
- `getDroppableProps (func)` `(rowInfo) => object`
- `getDraggableStyle (func)` `(snapshot) => object`
- `getDroppableStyle (func)` `(snapshot) => object` 
- `getDraggableClass (func)` `(snapshot) => string`
- `getDroppableClass (func)` `(snapshot) => string` 

其他见 react-table 官方文档


## *以下是测试用例,用来覆盖一些比较特殊的场景*
- `固定表头滚动`
- `左右滚动`
- `Popover能溢出table外,展示完全`
- `Select能溢出table外,展示完全`

::: demo 测试用例
```js
class Test extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data,
      list: Array(10).fill(1).map((x, n) => n),
      selected: 0
    }
  }
  
  renderPopup = () => {
    return (
      <div style={{width: '200px', height: '200px'}}>
          <div>浮层溢出table外,能展示完全</div>
          <div>浮层溢出table外,能展示完全</div>
          <div>浮层溢出table外,能展示完全</div>
      </div>
    );
  }
  
  render() {
    const { list, selected, data } = this.state
    return (
      <Table
        style={{
         height: "180px" // This will force the table body to overflow and scroll, since there is not enough room
        }}
        data={data}
        columns={[{
          Header: '建单时间',
          id: 's',
          width: 500,
          accessor: () => <Popover type="click" popup={this.renderPopup()}>
                              <button className="btn btn-default">弹出浮层</button>
                          </Popover>
        }, {
          Header: '选择器',
          width: 500,
          id: 'a',
          accessor: () => <Select value={selected} onChange={selected => this.setState({selected})}>
                            {list.map(n => <Option key={n} value={n}>{n}</Option>)}
                          </Select>
        }, {
          Header: '供应商信息',
          width: 500,
          accessor: 'supplier_name'
        }, {
          Header: '入库金额',
          width: 500,
          accessor: 'total_money'
        }, {
          Header: '单据状态',
          width: 500,
          accessor: 'status'
        }]}
      />
    )
  }
}
```

```jsx
<Test/>
```
:::
