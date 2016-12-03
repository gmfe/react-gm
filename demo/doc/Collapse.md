---
imports:
    import {Collapse} from '../../src/index';
---
## Collapse

::: demo Collapse
```js
class CollapseWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    handleCollapse() {
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        return (
            <div data-intro="展开啦" data-step="5">
                <button data-intro="点此展开" data-step="4" onClick={::this.handleCollapse}>Collapse toggle</button>
                <Collapse in={this.state.show}>
                    <div style={{background: 'red'}}>
                        啦啦啦啦
                        <br/>
                        lalala
                        <br/>
                        666666
                    </div>
                </Collapse>
            </div>
        );
    }
}
```
```jsx
<CollapseWrap/>
```
:::

### Props
- `in (bool|isRequired)` 是否显示