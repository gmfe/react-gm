---
imports:
    import {InputNumber, InputNumberV2} from '../../src/index';
---
## InputNumberV2 推荐使用

InputNumber 输出的是 字符串，调用方还是要包一层去处理 数字和字符串的区别，累。

所以才有了 InputNumberV2

::: demo 数字输入，数字输出，没有值则是 null
```js
class Component2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: null
        };
    }
    
    render(){
        return (
            <div>
                <InputNumberV2
                  value={this.state.value}
                  onChange={value => {
                    console.log(value)
                    this.setState({value})
                  }}
                />
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
- `value (number|string)` 当前值
- `max (number)` 最大值
- `min (number)` 最小值
- `precision (number)` 精确度，保留几位小数
- `onChange (func|isRequired)` 数值变化回调
- `placeholder (string)`: 默认值
- `...rest`

## InputNumber

::: demo 数字输入框
```js
class Component extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = ::this.handleChange;
    }
    
    render(){
        return (
            <div>
                <InputNumber
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder="最大1000，最小0，可保留4为小数，默认2位"
                    max={1000}
                    min={0}
                    precision={4}
                    className="form-control"
                    minus
                />
                <br/>
                <InputNumber
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder="最大0，最小0"
                    max={0}
                    min={0}
                    precision={0}
                    className="form-control"
                    minus
                />
            </div>
        );
    }
    
    handleChange(value){
        this.setState({
            value
        });
    }
}
```
```jsx
<Component/>
```
:::

### Props
- `value (number|string)` 当前值
- `max (number)` 最大值
- `min (number)` 最小值
- `precision (number)` 精确度，保留几位小数
- `onChange (func|isRequired)` 数值变化回调
- `placeholder (string)`: 默认值
- `minus (bool)` 是否支持输入负数
- `...rest`
