---
imports:
    import {Select, Option} from '../../src/index';
    import _ from 'lodash';
---
## Select
原生select在onChange的时候是字符串，经常要转换，累。

同时隐藏了多选的特别处理逻辑

一定要配合`Option`使用

::: demo 单选，提供value的原始值出来，而非原生的字符串。 
```js
class Component extends React.Component {
    constructor(props){
        super(props);
        const list = _.map(_.range(5), v => ({
            value: v,
            name: 'item' + v
        }));
        this.state = {
            list,
            value: list[0].value
        };
        this.handleChange = ::this.handleChange;
    }
    
    handleChange(value){
        console.log(value);
        this.setState({
            value
        });
    }
    
    render() {
        const {list, selectedValues, value} = this.state;
        return (
            <div>
                <Select value={value} onChange={this.handleChange}>
                    {_.map(list, v => <Option key={v.value} value={v.value}>{v.name}</Option>)}
                </Select>
            </div>
        );
    }
}
```
```jsx
<Component/>
```
:::

::: demo  多选，value 和 onChange 参数都是数组 
```js
class Component2 extends React.Component {
    constructor(props){
        super(props);
        const list = _.map(_.range(5), v => ({
            value: v,
            name: 'item' + v
        }));
        this.state = {
            list,
            value: [list[0].value]
        };
        this.handleChange = ::this.handleChange;
    }
    
    handleChange(value){
        console.log(value);
        this.setState({
            value
        });
    }
    
    render() {
        const {list, selectedValues, value} = this.state;
        return (
            <div>
                <Select multiple value={value} onChange={this.handleChange}>
                    {_.map(list, v => <Option key={v.value} value={v.value}>{v.name}</Option>)}
                </Select>
            </div>
        );
    }
}
```
```jsx
<Component2/>
```
:::

### Props
- `multiple (bool)`
- `value (any|isRequired)`
- `onChange (func)`
- ...rest