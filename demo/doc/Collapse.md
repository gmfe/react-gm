---
imports:
    import {Collapse} from '../../src/index';
---
## Collapse

::: demo
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
            <div id="intro5">
                <button onClick={::this.handleCollapse} id="intro4">Collapse toggle</button>
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