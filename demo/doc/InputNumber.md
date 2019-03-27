---
imports:
    import {InputNumber} from '../../src/index';
---
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
        this.a = React.createRef()
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
                <button onClick={() => {this.a.current.focus()}}>focus</button>
                <InputNumber
                    ref={this.a}
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
- `className (string)`
- `minus (bool)` 是否支持输入负数
- `...rest`