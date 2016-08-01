开关切换

![](http://7xlnio.com1.z0.glb.clouddn.com/16-8-1/3206163.jpg)

## 组件介绍

## Switch

目前Switch的长度有限，所以checkedChildren unCheckedChildren 不能太多字

- `checked (bool)`
- `defaultChecked (bool)` 少用吧，默认`false`
- `disable (bool)` true则不可用
- `checkedChildren (node)` 选中的文案，默认`ON`
- `unCheckedChildren (node)` 不选中的文案，默认`OFF`
- `onChange (func)` 切换触发函数
- `className (string)` 

```jsx
<Switch defaultChecked={true}
        checkedChildren={"是"}
        unCheckedChildren={"否"}/>
<Switch checked={this.state.checked}
        checkedChildren={"是"}
        unCheckedChildren={"否"}
        onChange={this.handleChange}/>
<Switch disabled
        checkedChildren={"YES"}
        unCheckedChildren={"NO"}/>

<Switch/>
```