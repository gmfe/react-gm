---
imports:
    import {Switcher, InputNumber} from '../../src/index';
---
## Switcher
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
                    <Switcher
                        checked={this.state.checked}
                        onChange={this.handleChange}
                    />
                    disabled(会透明点)
                    <Switcher
                        checked={this.state.checked}
                        disabled
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    其他文案
                    <Switcher
                        checked={this.state.checked}
                        on="激活"
                        off="已失效"
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    primary
                    <Switcher
                        type="primary"
                        checked={this.state.checked}
                        onChange={this.handleChange}
                    />
                     
                    success
                    <Switcher
                        type="success"
                        checked={this.state.checked}
                        onChange={this.handleChange}
                    />
                    
                    info
                    <Switcher
                        type="info"
                        checked={this.state.checked}
                        onChange={this.handleChange}
                    />
                    
                    warning
                    <Switcher
                        type="warning"
                        checked={this.state.checked}
                        onChange={this.handleChange}
                    />
                    
                    danger
                    <Switcher
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
- ...rest