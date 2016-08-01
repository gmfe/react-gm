存储用，基于localStorage。没啥特别，只是简单的封装了下接口。 且添加前缀 `_react-gm_`避免冲突

![](http://7xlnio.com1.z0.glb.clouddn.com/16-8-1/28103270.jpg)

## 组件介绍

### Storage

- `name (string|isRequire)` 存储的key
- `value (string, object, array)` 存储的数据，不适合存储非常复杂的东西，实际上存的是`JSON.stringify(value)`，只要符合JSON就可以存储。
- `autoSave (bool)` 默认`true`，value变化会自动更新保存

```jsx
<Storage name={key} value={this.state.value}/>
```

有5个静态方法

- `set(key, value)` 
- `get(key)`
- `remove(key)`
- `clear` 慎用，清除本域名全部存储
- `getAll` 拿到全部存储，以Obj形式返回

```jsx
Storage.set('name', 'javascript');

Storage.get('name'); // javascript
```