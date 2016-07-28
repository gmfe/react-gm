多级选择器

## 组件介绍

### Cascader

![](http://7xlnio.com1.z0.glb.clouddn.com/16-7-29/76459881.jpg)

![](http://7xlnio.com1.z0.glb.clouddn.com/16-7-29/81385936.jpg)

![](http://7xlnio.com1.z0.glb.clouddn.com/16-7-29/99481028.jpg)

- `data (array|isRequired)` 格式如上面的data，value 是值，name是值的展现，children是其下一级。
- `value (array)` 一个数组或者null，表示选中了那些数据。 ['0']则选择了广东，['0', '01']则选择了广东，深圳
- `defaultValue` 同上
- `onChange (func)` 提供和value一样的数组
- `inputProps (object)` 定义里面input的props
- `valueRender (func)` 自定义value的展现
- `children` 自定义children的展现

```jsx
const data = [{
    value: '0',
    name: '广东',
    children: [{
        value: '01',
        name: '深圳'
    }]
}, {
    value: '1',
    name: '上海',
    children: [{
        value: '11',
        name: '上海1'
    }]
}];

// 一般用法
<Cascader data={this.state.data}
          value={this.state.value}
          onChange={this.handleChange}/>
          
// 自定义value的显示
<Cascader data={this.state.data}
          valueRender={(value) => (value && value.length > 0 ? value[value.length - 1].name : '')}
          onChange={this.handleChange}/>
          
// 自定义children ui，点击整个children都会出现选择浮层
<Cascader data={this.state.data} onChange={this.handleChange}>
    <div>
        {_.map(value, v => v.name).join(',')}
        <button className="btn btn-primary btn-xs">add +</button>
    </div>
</Cascader>
```

### CascaderSelect

Cascader 的多选版本

![](http://7xlnio.com1.z0.glb.clouddn.com/16-7-29/39795249.jpg)

- `data (array|isRequired)` 同Cascader的data
- `selected (array)` 同Cascader.value的数组版本[Cascader.value]
- `onSelect (func|isRequired)` 提供和selected一样的数组
- `multiple (bool)` 是否支持多选
- `placeholder` (string)
- `selectRender` (func) 自定义已选择ui

```
// 单选版本
<CascaderSelect
    multiple
    selectedRender={this.selectedRender}
    data={this.state.data}
    selected={this.state.selected}
    onSelect={this.handleSelect}/>

// 多选版本
<CascaderSelect
    data={this.state.data}
    selected={this.state.singleSelected}
    onSelect={this.handleSingleSelect}/>
```