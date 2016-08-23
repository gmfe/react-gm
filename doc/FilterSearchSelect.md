搜索选择组件

ui同SearchSelect

## 组件介绍

### FilterSearchSelect

使用`SearchSelect`要处理原数据列表、搜索字符串（或者过滤后的数据列表）。略麻烦。

- `list (array|isRequired)` 搜索待选数据，是过滤后的数据。结构`[{value: 1, name: 'aaaaa'}]`
- `isGroupList (bool)` list数据是否分组数据，此时list的结构为 `[{label: '一组', children: [{value: 1, name: 'aaaaa'}]}]`
- `selected (any)` 选中了什么，`list`中某条数据
- `onFilter (func|isRequired)` 搜索触发render，render会调用onFilter，提供`list`和`query`参数，以便过滤后直接把数据返回。 可以引入`gm-pinyin`库来做拼音搜索
- `onSelect (func|isRequired)` 选中后触发，提供和`selected`一样的数据结构，一般直接设置`selected`即可
- `delay (number)` 搜索过程中延迟多少ms才出触发`onSearch`， 默认500
- `listMaxHeight (string)` 搜索待选数据的高度，默认250px
- `multiple (bool)` 是否多选，默认false。 如果多选，则selected是数组
- `placeholder (string)`


```jsx
<FilterSearchSelect
    list={this.state.list}
    selected={this.state.selected}
    onSelect={::this.handleSelect}
    onFilter={::this.handleFilter}
/>


handleFilter(list, query) {
    return _.filter(list, v => {
        return v.name.indexOf(query) > -1 || _.map(PinYin(v.name, {
                style: PinYin.STYLE_FIRST_LETTER
            }), value => value[0]).join('').indexOf(query) > -1;
    });
}
```