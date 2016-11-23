---
imports:
    import {DropSelect} from '../../src/index';
---
## DropSelect

下拉选择组件。支持键盘上下键操作，回车选择

::: demo DropSelect
```js
class DropSelectWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            coolData: {
                list: [],
                actions: [{
                    className: "btn btn-sm btn-info",
                    text: <i className="glyphicon glyphicon-ok"/>,
                    getDisabled: (value, i) => {
                        return i % 2;
                    },
                    onClick: function (col) {
                        console.log(col, 'onclick');
                    }
                }, {
                    className: "btn btn-sm btn-danger",
                    text: '删除',
                    onClick: function (col) {
                        console.log(col, 'onclick');
                    }
                }],
                columns: [{
                    field: 'id',
                    name: '序号',
                    render: function (value) {
                        return 'D00' + value;
                    }
                }, {
                    field: 'name',
                    name: '商品名'
                }, {
                    field: 'price',
                    name: '成本价'
                }],
                loading: true
            }
        };
        this.onFocus = ::this.onFocus;
        this.onHide = ::this.onHide;
        this.handleEnter = ::this.handleEnter;
    }

    onFocus() {
        this.setState({
            show: true,
            coolData: Object.assign(this.state.coolData,{
                loading: true
            })
        });
               
        setTimeout(() => {
            this.setState({
                loading: false,
                coolData: Object.assign(this.state.coolData, {
                    loading: false,
                    list: [{
                        id: '0001',
                        name: '大白菜',
                        price: 22.12,
                        actionStatus: [0]
                    }, {
                        id: '0002',
                        name: '大白菜',
                        price: 22.12
                    }, {
                        id: '0003',
                        name: '大白菜',
                        price: 22.12,
                        actionStatus: [0, 1]
                    }, {
                        id: '0004',
                        name: '大白菜',
                        price: 22.12,
                        actionStatus: [1, 0]
                    }, {
                        id: '0005',
                        name: '大白菜',
                        price: 22.12
                    }, {
                        id: '00015',
                        name: '大白菜',
                        price: 22.12
                    }, {
                        id: '00013',
                        name: '大白菜',
                        price: 22.12,
                        actionStatus: [1, 1]
                    }]
                })
            });
        }, 2000);
    }

    handleEnter(index) {
        console.log(index, this.state.coolData.list[index]);
        this.setState({
            
        });
    }

    onHide() {
        this.setState({
            show: false
        });
    }

    render() {
    console.log(this.state)
        return (
            <div style={{width: '400px'}}>
                <DropSelect
                    show={this.state.show}
                    loading={this.state.loading}
                    data={this.state.coolData}
                    onHide={this.onHide}
                    onEnter={this.handleEnter}
                >
                    <input className="form-control" onFocus={this.onFocus} placeholder="支持键盘上下键选中，回车选择"/>
                </DropSelect>
            </div>
        );
    }
}
```
```jsx
<DropSelectWrap/>
```
:::

### Props
- `show (bool|isRequired)` 是否显示
- `data (object)` 数据对象，参见demo
- `onEnter (func)` 点击回车时触发
- `onHide (func)` 隐藏时触发