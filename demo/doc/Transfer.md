---
imports:
    import {Transfer, TransferGroup} from '../../src/index';
    import _ from 'lodash';
---
## Transfer

穿梭框

::: demo 
```js
class Component extends React.Component {
    constructor(props) {
        super(props);
        const list = [{
            value: 1,
            name: '水果'
        },{
            value: 2,
            name: '蔬菜'
        },{
            value: 3,
            name: '肉类'
        },{
            value: 4,
            name: '干果'
        },{
            value: 5,
            name: '什么乱七八糟'
        },{
            value: 6,
            name: '电子科技'
        }];
        
        this.state = {
            list,
            selectedValues: [0, 2]
        };
        this.handleSelect = ::this.handleSelect;
    }
    
    handleSelect(selectedValues) {
        console.log(selectedValues);
        this.setState({
            selectedValues
        });
    }
    
    render() {
        const {list, selectedValues} = this.state;
        return (
            <Transfer
disabled
                list={list}
                selectedValues={selectedValues}
                onSelect={this.handleSelect}
            />
        );
    }
}
```
```jsx
<Component/>
```
:::

::: demo 
```js
class Component2 extends React.Component {
    constructor(props) {
        super(props);
        const list = [{
             value: 1,
             name: '蔬菜',
             children: [{
                 value: 11,
                 name: '叶菜',
                 children: [{
                     value: 111,
                     name: '皇帝菜'
                 }, {
                     value: 112,
                     name: '金不换'
                 }]
             }, {
                 value: 12,
                 name: '甘蓝',
                 children: [{
                     value: 121,
                     name: '甘蓝1'
                 }, {
                    value: 122,
                    name: '甘蓝2'  
                 }]
             }]
         }, {
             value: 2,
             name: '冻品',
             children: [{
                 value: 21,
                 name: '冻猪肉',
                 children: [{
                     value: 211,
                     name: '五花肉'
                 }, {
                     value: 212,
                     name: '猪脚'
                 }]
             }]
         }];
        
        this.state = {
            list,
            selectedValues: [111, 212]
        };
        this.handleSelect = ::this.handleSelect;
    }
    
    handleSelect(selectedValues) {
        console.log(selectedValues);
        this.setState({
            selectedValues
        });
    }
    
    render() {
        const {list, selectedValues} = this.state;
        return (
            <TransferGroup
                list={list}
                selectedValues={selectedValues}
                onSelect={this.handleSelect}
            />
        );
    }
}
```
```jsx
<Component2/>
```
:::


### Props
- `list (array|isRequired)` 数据列表啦，格式是 `{'{'}value: 3, name: 'item2'{'}'}`
- `selectedValues (array|isRequired)` 已选择的值，格式是`[1,2,3]`
- `onSelect (func|isRequired)` 选择回调，参数和`selectedValues`一样
- `listStyle (object)` 框的高宽，默认`{'{'}width: '250px', height: '350px'{'}'}`

- `leftTitle (string)` 标题，默认 待选择 
- `leftWithFilter (func|bool)` 过滤函数，默认 true 且集成拼音搜索。false 则不出过滤框，fun 则过滤逻辑业务控
- `leftPlaceHolder (string)`

- `rightTitle (string)` 标题，默认 待选择 
- `rightWithFilter (func|bool)` 过滤函数，默认 true 且集成拼音搜索。false 则不出过滤框，fun 则过滤逻辑业务控
- `rightPlaceHolder (string)`

## TransferGroup 

分组版，区别是 list 结构变了，具体见上述例子
