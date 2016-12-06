---
imports:
    import {TreeSelect} from '../../src/index.js';
    import _ from 'underscore';
---
## TreeSelect

树形选择组件。

::: demo 以下example依赖的数据
```js
const list = [{
    value: '111',
    name: '蔬菜',
    children: [
        {
            value: '112',
            name: '叶菜类',
            children: [
                {
                    value: '113',
                    name: '白菜'
                },
                {
                    value: '114',
                    name: '菠菜'
                }
            ]
        },
        {
            value: '122',
            name: '根茎类',
            children: [
                {
                    value: '123',
                    name: '莴笋'
                }
            ]
        }
    ]
},{
      value: '211',
      name: '酒水',
      children: [
          {
              value: '212',
              name: '饮料',
              children: [
                  {
                      value: '213',
                      name: '可乐'
                  },
                  {
                      value: '214',
                      name: '橙汁'
                  }
              ]
          },
          {
              value: '222',
              name: '白酒',
              children: [
                  {
                      value: '223',
                      name: '五粮液'
                  }
              ]
          }
      ]
  }];
```
:::

::: demo 处理onSelect，获取选中的节点。
```js
class TreeSelectDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: []
        };

        this.handleSelect = ::this.handleSelect;
    }

    handleSelect(selected) {
        this.setState({selected});
    }

    render() {
        return (
            <TreeSelect
                list={list}
                label={'选择全部商品'}
                disabledSelected={false}
                selected={this.state.selected}
                onSelect={this.handleSelect}
            />
        );
    }
}
```
```jsx
<TreeSelectDemo/>
```
:::

### Props
**注意，请尽量提供key**
- `list (array|isRequired)` 树形数据。结构 `{'[{value: "111", name: "aaa", children: [{value: "222", name: "bbb"}]}]'}`
- `selected (array)` 选中了什么，`list`中的节点数组
- `onSelect (func)` 选中后触发，会根据操作提供节点数据给selected，一般直接设置`selected`即可
- `disabledSelected (func)` 是否开启select功能
- `label (string)` 全选标签