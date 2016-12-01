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
            <div>
                <button onClick={::this.handleCollapse}>Collapse toggle</button>
                <Collapse in={this.state.show}>
                    <div>
                        啦啦啦啦
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