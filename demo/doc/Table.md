---
imports:
    import {Table, SelectTable, ExpandTable} from '../../table';
---
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
    'supplier_name': '南苑路冷冻品',
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
            <div className='gm-padding-10'/>
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
<TableWrap/>
```
:::

### Props
- `loading (bool)`
- `data (array|required)`
- `columns (array|required)`
其他见 react-table 官方文档

---

## SelectTable

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
          selectAllTip='选中所有数据啦'
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
- `selectAll (array|required)` 注意 全选是否勾上 可能代表当前可见列表勾上，也可能代表所有数据勾上，具体由调用方确定。 和 看到的列表是否全勾上 无关联
- `onSelectAll (array|required)`
- `onSelectTip (string)`
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
        <div className='gm-padding-10'>
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
            <ExpandTable
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
        );
    }
}
```

```jsx
<ExpandTableWrap/>
```
:::

### Props
- `loading (bool)`
- `data (array|required)`
- `columns (array|required)`
- `SubComponent (func|required)` 渲染展开的元素
其他见 react-table 官方文档