---
imports:
    import {Storage} from '../../src/index';
---

## Storage
存储用，基于localStorage。没啥特别，只是简单的封装了下接口。 且添加前缀 `_react-gm_`避免冲突

::: demo Storage
```js
window.Storage = Storage;
const key = 'testValue';
class StorageWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: Storage.get(key) || ''
        };
    }

    render() {
        return (
            <div>
                刷新后看到存储的数据
                <input type="text" value={this.state.value}
                       onChange={event => this.setState({value: event.target.value})}/>
                <Storage name={key} value={this.state.value}/>
            </div>
        );
    }
}
```
```jsx
<StorageWrap/>
```
:::

### Props
- `name (string|isRequire)` 存储的key
- `value (string, object, array)` 存储的数据，不适合存储非常复杂的东西，实际上存的是`JSON.stringify(value)`，只要符合JSON就可以存储。
- `autoSave (bool)` 默认`true`，value变化会自动更新保存

### Static
- `set(key, value)` 
- `get(key)`
- `remove(key)`
- `clear` 慎用，清除本域名全部存储
- `getAll` 拿到全部存储，以Obj形式返回