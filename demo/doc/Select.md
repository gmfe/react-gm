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
const list = _.map(_.range(8), v => ({
    value: 'a_' + v,
    name: 'd发' + v
}));
list.push({
value: 21312,
name: '你好啊，我们的阿斯顿发顺丰as'
});
class Component extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: list,
            value_1: null, 
            value_2: list[0].value
        };
    }
    
    handleChange(name, value){
        console.log(value);
        this.setState({
            [name]: value
        });
    }
    
    render() {
        const {list, value_1, value_2} = this.state;

        return (
            <div>
                <div>default</div>
                <Select value={value_1} onChange={this.handleChange.bind(this, 'value_1')}>
                    {_.map(list, v => <Option key={v.value} value={v.value}>{v.name}</Option>)}
                </Select>
                <div>disabled</div>
                <Select value={value_2} onChange={this.handleChange.bind(this, 'value_2')} disabled>
                    {_.map(list, v => <Option key={v.value} value={v.value}>{v.name}</Option>)}
                </Select>
                <div>option disabled</div>
                <Select value={value_2} onChange={this.handleChange.bind(this, 'value_2')}>
                    <Option value="option disabled" disabled>Option Disabled</Option>
                    {_.map(list, v => <Option key={v.value} value={v.value}>{v.name}</Option>)}
                </Select>
                <div>clean</div>
                <Select value={value_2} onChange={this.handleChange.bind(this, 'value_2')} clean>
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

### Props
- `multiple (bool)`
- `value (any|isRequired)`
- `onChange (func)`
- `clean (bool)` 感觉模式
- `...rest`