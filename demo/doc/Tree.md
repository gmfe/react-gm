---
imports:
    import {Tree} from '../../src/index';
    import _ from 'lodash';
---
## Tree

树形选择框

::: demo 
```js
const treeData = [{
    value: 1,
    name: '蔬菜',
    children: [{
        value: 11,
        name: '叶菜',
        children: [{
            value: 111,
            name: '皇帝菜皇帝菜皇帝菜皇帝菜皇帝菜皇帝菜皇帝菜皇帝菜皇帝菜皇帝菜皇帝菜'
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

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValues: []
        };
    }

    handleSelect = (selectedValues) => {
        console.log(selectedValues);
        this.setState({
            selectedValues
        });
    };

    handleClickLeafName(leaf, checked) {
        console.log(leaf, checked);
    }

    handleClickCheckbox = (data, checked) => {
        console.log(data, checked);
    };

    showGroupCheckbox = (group) => {
        
        if(group.children && group.children[0] && group.children[0].children){
            return false;
        }
        return true;
    };

    render() {
        const {selectedValues} = this.state;

        return (
            <div>
                <Tree
                    list={treeData}
                    selectedValues={selectedValues}
                    onSelectValues={this.handleSelect}
                    onClickLeafName={this.handleClickLeafName}
                    onClickCheckbox={this.handleClickCheckbox}
                    disableSelectAll
                    showGroupCheckbox={this.showGroupCheckbox}
                />
            </div>
        );
    }
}
```
```jsx
<Component/>
```
:::

### Props
- `title (string)` 标题
- `list (array|isRequired)` 数据列表啦，格式是 `{'{'}value: 3, name: 'item2', children: [{'{'}value, name{'}'}]{'}'}`
- `selectedValues (array|isRequired)` 已选择的值，格式是`[1,2,3]`
- `onSelectValues (func|isRequired)` 选择回调，参数和`selectedValues`一样
- `style (object)` 框的高宽，默认`{'{'}width: '250px', height: '350px'{'}'}`
- `onClickLeafName (func)` 点击叶子节点事件。如果提供，则 chexkbox 和 name 点击分开处理。
- `onClickCheckbox (func)` 勾选 checkbox 触发事件
- `withFilter (func|bool)` 过滤函数，默认 true 且集成拼音搜索。false 则不出过滤框，fun 则过滤逻辑业务控
- `placeHolder (string)`
- `disableSelectAll (bool)`
- `showGroupCheckbox (func)` 是否显示 checkbox，参数是 group 信息
- `style` 默认 width 250px height 350px

## TransferGroup 

分组版，区别是 list 结构变了，具体见上述例子
