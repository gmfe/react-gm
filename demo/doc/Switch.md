---
imports:
    import {Switch, InputNumber} from '../../src/index';
---
## Switch
开关切换

::: demo
```js
class Component extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            checked: false
        };
        this.handleChange = ::this.handleChange;
    }
        
    handleChange(){
        this.setState({
            checked: !this.state.checked
        });
    }
    
    render(){
        return (
            <div>
                <div>
                    default
                    <Switch
                        checked={this.state.checked}
                        onChange={this.handleChange}
                    />
                    disabled(会透明点)
                    <Switch
                        checked={this.state.checked}
                        disabled
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    其他文案
                    <Switch
                        checked={this.state.checked}
                        on="激活"
                        off="已失效"
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    primary
                    <Switch
                        type="primary"
                        checked={this.state.checked}
                        onChange={this.handleChange}
                    />
                     
                    success
                    <Switch
                        type="success"
                        checked={this.state.checked}
                        onChange={this.handleChange}
                    />
                    
                    info
                    <Switch
                        type="info"
                        checked={this.state.checked}
                        onChange={this.handleChange}
                    />
                    
                    warning
                    <Switch
                        type="warning"
                        checked={this.state.checked}
                        onChange={this.handleChange}
                    />
                    
                    danger
                    <Switch
                        type="danger"
                        checked={this.state.checked}
                        onChange={this.handleChange}
                    />
                </div>
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
- `type (string)` 默认default
- `checked (bool|isRequired)`
- `disable (bool)`
- `on (string)` 选中的文案，默认`ON`
- `off (string)` 不选中的文案，默认`OFF`
- `onChange (func)`
- `...rest`