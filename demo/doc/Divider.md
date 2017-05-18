---
imports:
    import {Divider} from '../../src/index';
---
## Divider

::: demo 分隔符中间又文字，切回呗转成大写
```js
class Component extends React.Component {
    render() {
        return (
            <div>
                <Divider>lalala</Divider>
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
- `children`