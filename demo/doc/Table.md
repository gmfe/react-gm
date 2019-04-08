---
imports:
    import {Table, SelectTable, ExpandTable, TableUtil, diyTableHOC} from '../../table';
    import DndTable from '../../table/dnd_table';
    import {Popover} from '../../src/index';

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

::: demo Table
```js
class TableWrap extends React.Component {
    render() {
        return (
          <div>
            <Table
              data={data}
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
          </div>
        );
    }
}
```

```jsx
<TableWrap/>
```
:::

::: demo Table Group
```js
class TableGroupWrap extends React.Component {
    render() {
        return (
          <div>
            <Table
              data={data}
              columns={[{
                  Header: 'Group1',
                  columns: [{
                    Header: '建单时间',
                    accessor: 'submit_time'
                  }, {
                    Header: '入库单号',
                    accessor: 'id'
                  }]
                },{
                Header: 'Group2',
                columns: [{
                  Header: '供应商信息',
                  accessor: 'supplier_name'
                }, {
                  Header: '入库金额',
                  accessor: 'total_money'
                }, {
                  Header: '单据状态',
                  accessor: 'status'
                }]
              }]}
            />
          </div>
        );
    }
}
```

```jsx
<TableGroupWrap/>
```
:::

::: demo 排序，默认表格内排序，自定义排序
```js
class TableSortWrap extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        data: data.slice(),
        supplierNameSortType: null
      };
  }
  handleSort = () => {
    console.log('sort')
    const {data, supplierNameSortType} = this.state;
    if(!supplierNameSortType || supplierNameSortType === 'desc'){
      this.setState({
        data: _.sortBy(data, 'supplier_name'),
        supplierNameSortType: 'asc'
      })
    }else{
      this.setState({
        data: _.sortBy(data, 'supplier_name').reverse(),
        supplierNameSortType: 'desc'
      })
    }
  }
  
    render() {
        return (
          <div>
            <Table
              ref={ref => (this.table = ref)}
              data={this.state.data}
              columns={[{
                Header: '建单时间',
                accessor: 'submit_time'
              }, {
                Header: '入库单号',
                accessor: 'id'
              }, {
                Header: <TableUtil.SortHeader onClick={this.handleSort} type={this.state.supplierNameSortType}>供应商信息</TableUtil.SortHeader>,
                accessor: 'supplier_name',
                HeaderText: '供应商信息自定义'  // 自定义列表内展示的名字
              }, {
                Header: '入库金额',
                accessor: 'total_money',
                sortable: true
              }, {
                Header: '单据状态',
                accessor: 'status'
              }]}
              onSortedChange={(newSorted, column, shiftKey) => {
                console.log(newSorted, column, shiftKey);
                this.setState({
                supplierNameSortType: null
                })
              }}
            />
          </div>
        );
    }
}
```

```jsx
<TableSortWrap/>
```
:::

### Props
- `loading (bool)`
- `data (array|required)`
- `columns (array|required)`

其他见 react-table 官方文档

---

## SelectTable `(注意selectAll的使用)`

::: demo SelectTable 
```js
class SelectTableWrap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectAll: false,
      selected: [
        'T5991-JHD-2018-07-25-00027'
      ]
    }
  }

  handleToggleAll = () => {
    if (this.state.selectAll) {
      this.setState({
        selectAll: false,
        selected: []
      })
    } else {
      this.setState({
        selectAll: true,
        selected: _.map(data, v => v.id)
      })
    }
  }

  handleSelect = (selected) => {
    let {selectAll} = this.state

    if (selectAll && selected.length !== data.length) {
      selectAll = false
    }

    this.setState({
      selectAll,
      selected
    })
  }

  render () {
    return (
      <div>
        <SelectTable
          ref={ref => (this.table = ref)}
          data={data}
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
          keyField='id'
          selectAll={this.state.selectAll}
          onSelectAll={this.handleToggleAll}
          selectAllTip={<div>全选是否勾上,可能代表<span className="gm-text-red">当前可见列表</span>勾上，也可能代表<span className="gm-text-red">所有页面数据</span>勾上，具体由调用方确定。</div>}
          selected={this.state.selected}
          onSelect={this.handleSelect}
        />
      </div>
    )
  }
}
```

```jsx
<SelectTableWrap/>
```
:::

### Props
- `loading (bool)`
- `data (array|required)`
- `columns (array|required)`
- `selected (array|required)`
- `onSelect (array|required)`
- `selectAll (bool|required)` 注意❗️全选是否勾上 可能代表`当前可见列表`勾上，也可能代表`所有数据`勾上，具体由调用方确定。 和`可见的列表`是否 全勾上 无关联
- `onSelectAll (array|required)`
- `onSelectTip (node)`
- `keyField (string)` 默认 value
- `selectType (string)` checkbox or radio

其他见 react-table 官方文档

---

### ExpandTable

::: demo ExpandTable
```js
class ExpandTableWrap extends React.Component {
    renderSubComponent () {
      return (
        <div classnames='gm-padding-10'>
          <Table
            data={data.slice(0, 3)}
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
        </div>
      )
    }
    
    render() {
        return (
          <div>
              <ExpandTable
                ref={ref => (this.table = ref)}
                data={data}
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
                SubComponent={this.renderSubComponent}
              />
          </div>
        );
    }
}
```

```jsx
<ExpandTableWrap/>
```
:::

::: demo 自定义表头
```js
class DiyTableWrap extends React.Component {
    renderPopup() {
    return (
    <div style={{width: '200px', height: '200px'}}>
    <div>啦啦啦啦啦啦啦啦啦啦啦</div>
    <div>啦啦啦啦啦啦啦啦啦啦啦</div>
    <div>啦啦啦</div>
    </div>
    );
    }
    render() {
        return (
          <div>
              <button className='gm-btn' onClick={() => this.table.apiToggleDiySelector()}>列表自定义</button>
            <DiyTable
              ref={ref => { this.table = ref }}
              id='diy_table_wrap'  // 提供唯一id,作为localStorage 的key
              data={data}
              columns={[
              {
              Header: '单据状态',width: 550,
              id: 'status',
              accessor: d =>   <Popover type="click" popup={this.renderPopup()}>
              <button className="btn btn-default">click me</button>
              </Popover>
              },{
                Header: '建单时间',
                accessor: 'submit_time',
                width: 550,
                diyEnable: false,  // 当 diyEnable = false 时,不出现在自定义checkbox列表中(默认diyEnable = true)
              }, {
                Header: '入库单号',
                accessor: 'id',
                width: 550,
                show: false     // 当使用diyTableHOC的时候, 这里的show值仅在diyTable第一次初始化的时候有用
                                // 如果diyEnable = true(默认为true), 之后使用的是localStorage里保存的show值
              }, {
                Header: '供应商信息',
                width: 550,
                accessor: 'supplier_name'
              }, {
                Header: '入库金额',width: 550,
                accessor: 'total_money'
              }, {
                Header: '单据状态',width: 550,
                id: 'status',
                accessor: d =>   <Popover type="click" popup={this.renderPopup()}>
                                  <button className="btn btn-default">click me</button>
                                </Popover>
              }]}
            />
          </div>
        );
    }
}
```

```jsx
<DiyTableWrap/>
```
:::

### Props
- `loading (bool)`
- `data (array|required)`
- `columns (array|required)`
- `SubComponent (func|required)` 渲染展开的元素

其他见 react-table 官方文档

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
