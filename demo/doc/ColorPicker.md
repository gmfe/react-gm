---
imports:
    import {ColorPicker, Flex} from '../../src/index';
    import moment from 'moment';
---
## Calendar

颜色选择

::: demo
```js
class ColorPickerWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: ''
        };
    }
    
    render() {
        return (
            <ColorPicker color={this.state.color} onChange={(color) => this.setState({color})}>
                <button>color picker</button>
            </ColorPicker>
        );
    }
}
```
```jsx
<ColorPickerWrap/>
```
:::


### Props

- `color (string)`
- `onChange (func)` 