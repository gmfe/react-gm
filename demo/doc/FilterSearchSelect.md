---
imports:
    import {FilterSearchSelect} from '../../src/index.js';
    import _ from 'lodash';
---
## FilterSearchSelect

搜索选择组件，`SearchSelect`的增强版，让调用方更方便。

::: demo 以下example依赖的数据
```js
const searchSelectGroupData = [{
    label: '一组',
    children: [
        {name: '我们我们我们我们'},
        {name: '1'},
        {name: '2我们'},
        {name: '3我们'},
        {name: '4我们'},
        {name: '5我们'}
    ]
},{
    label: '二组',
    children: [
        {name: '6我们'},
        {name: '7我们'},
        {name: '8我们'},
        {name: '9你们'},
        {name: '10哦'},
        {name: 'no'}
    ]
}];
```
:::

::: demo 处理onFilter，然后返回list即可。
```js
class FilterSearchSelect1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        };
    }
    
    handleFilter(list, query) {
        // 如果搜索词和选择的一样，则返回全部数据
        if (this.state.selected && (query === this.state.selected.name)) {
            return list;
        }
        
        let result = [];
        _.each(list, eList => {
            const children = _.filter(eList.children, v => {
                return v.name.indexOf(query) > -1;
            });
            if (children && children.length > 0) {
                result.push({
                    ...eList,
                    children
                });
            }
        });
        return result;
    }
    
    handleSelect(selected) {
        console.log(selected);
        this.setState({
            selected
        });
    }
    
    render() {
        return (
            <div>
                <FilterSearchSelect
                    list={searchSelectGroupData}
                    isGroupList
                    selected={this.state.selected}
                    onSelect={::this.handleSelect}
                    onFilter={::this.handleFilter}
                />

                <FilterSearchSelect
                    disabled
                    list={searchSelectGroupData}
                    isGroupList
                    selected={this.state.selected}
                    onSelect={::this.handleSelect}
                    onFilter={::this.handleFilter}
                />
            </div>
        );
    }
}
```
```jsx
<FilterSearchSelect1/>
```
:::

### Props
**注意，请尽量提供key**
- `list (array|isRequired)` 搜索待选数据，是过滤后的数据。结构`{'[{name: "aaaaa"}]'}` ，name用来显示
- `isGroupList (bool)` list数据是否分组数据，此时list的结构为`{'[{label: "一组", children: [{name: "aaaaa"}]}]'}`
- `selected (any)` 选中了什么，`list`中某条数据
- `onFilter (func|isRequired)` 搜索触发render，render会调用onFilter，提供`list`和`query`参数，以便过滤后直接把数据返回。 
- `onSelect (func|isRequired)` 选中后触发，提供和`selected`一样的数据结构，一般直接设置`selected`即可
- `delay (number)` 搜索过程中延迟多少ms才出触发`onSearch`， 默认500
- `listMaxHeight (string)` 搜索待选数据的高度，默认250px
- `multiple (bool)` 是否多选，默认false。 如果多选，则selected是数组
- `placeholder (string)`
- `isScrollToSelected (bool)` focus后列表是否滚动到选择的位置