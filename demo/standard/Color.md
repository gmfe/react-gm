---
imports:
    import {Label} from 'react-bootstrap';
---
## 颜色

::: demo DropSelect
```js
class ListGroupWrap extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <Label bsStyle="primary">Primary</Label>
                <div className="gm-gap10"/>
                <Label bsStyle="success">Primary</Label>
                <div className="gm-gap10"/>
                <Label bsStyle="info">Primary</Label>
                <div className="gm-gap10"/>
                <Label bsStyle="warning">Primary</Label>
                <div className="gm-gap10"/>
                <Label bsStyle="danger">Primary</Label>
            </div>
        );
    }
}
```
```jsx
<ListGroupWrap/>
```
:::

### Props
- `show (bool|isRequired)` 是否显示
- `data (object)` 数据对象，参见demo
- `onEnter (func)` 点击回车时触发
- `onHide (func)` 隐藏时触发