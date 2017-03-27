---
imports:
    import {Transfer} from '../../src/index';
    import _ from 'lodash';
---
## Transfer

穿梭框

::: demo 
```js
class Component extends React.Component {
    constructor(props) {
        super(props);
        const list = _.map(_.range(5), v => ({
            value: v,
            name: 'item' + v
        }));
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

::: demo 有过滤框和自定义标题 
```js
class Component2 extends React.Component {
    constructor(props) {
        super(props);
        const list = _.map(_.range(5), v => ({
            value: v,
            name: 'item' + v
        }));
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
    
    handleFilter(list, query) {
        // 过滤逻辑业务写
        return _.filter(list, v => v.name.indexOf(query) > -1);
    }
    
    render() {
        const {list, selectedValues} = this.state;
        return (
            <Transfer
                titles={['lalal', 'tttt']}
                list={list}
                selectedValues={selectedValues}
                onSelect={this.handleSelect}
                withFilter={this.handleFilter}
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
- `titles (array)` 标题，默认`['待选择', '已选择']`
- `list (array|isRequired)` 数据列表啦，格式是 `{'{'}value: 3, name: 'item2'{'}'}`
- `selectedValues (array|isRequired)` 已选择的值，格式是`[1,2,3]`
- `onSelect (func|isRequired)` 选择回调，参数和`selectedValues`一样
- `withFilter (func)` 过滤函数，提供则出现过滤框，具体过滤逻辑业务控
- `listStyle (object)` 框的高宽，默认`{'{'}width: '250px', height: '300px'{'}'}` 