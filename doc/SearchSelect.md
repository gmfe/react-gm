搜索选择组件

![](http://7xlnio.com1.z0.glb.clouddn.com/16-8-1/50788226.jpg)

![](http://7xlnio.com1.z0.glb.clouddn.com/16-8-1/61264044.jpg)

## 组件介绍

### SearchSelect

- `list (array|isRequired)` 搜索待选数据，是过滤后的数据。结构`[{value: 1, name: 'aaaaa'}]`
- `isGroupList (bool)` list数据是否分组数据，此时list的结构为 `[{label: '一组', children: [{value: 1, name: 'aaaaa'}]}]`
- `selected (any)` 选中了什么，`list`中某条数据
- `onSearch (func|isRequired)` 搜索触发函数，以便过滤重新得出`list`数据。 可以引入`gm-pinyin`库来做拼音搜索
- `onSelect (func|isRequired)` 选中后触发，提供和`selected`一样的数据结构，一般直接设置`selected`即可
- `delay (number)` 搜索过程中延迟多少ms才出触发`onSearch`， 默认500
- `listMaxHeight (string)` 搜索待选数据的高度，默认250px
- `multiple (bool)` 是否多选，默认false。 如果多选，则selected是数组
- `placeholder (string)`


```jsx
<div style={{width: '300px'}}>
    <SearchSelect
        list={this.state.list}
        selected={this.state.selected}
        onSearch={this.handleSearch}
        onSelect={this.handleSelect}
        placeholder="搜索"/>
</div>

<div style={{width: '300px'}}>
    <SearchSelect
        list={this.state.list}
        selected={this.state.multipleSelected}
        onSearch={this.handleSearch}
        onSelect={this.handleMultipleSelect}
        multiple
        placeholder="搜索"/>
</div>
```