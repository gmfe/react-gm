---
imports:
    import {SearchSelect} from '../../src/index.js';
    import _ from 'underscore';
---
## SearchSelect

搜索选择组件。请优先考虑选择FilterSearchSelect。

SearchSelect  和 FilterSearchSelect 如果用起来发现二次进入的时候会有奇怪现象（输入框的默认值存在），就试试给个key吧，设计的略复杂，不知道怎么处理了。

::: demo 以下example依赖的数据
```js
const searchSelectData = [
    {name: '我们'},
    {name: '1'},
    {name: '2我们我们我们我们2我们我们我们我们2我们我们我们我们'},
    {name: '3我们'},
    {name: '4我们'},
    {name: '5我们'},
    {name: '6我们'},
    {name: 'no'}
];
    
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

::: demo 单选。如果把搜索条件清空，则代表没有选择。
```js
class SearchSelect1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: searchSelectData[2],
            list: searchSelectData
        };
        this.handleSelect = ::this.handleSelect;
        this.handleSearch = ::this.handleSearch;
    }
    
    handleSelect(selected) {
        console.log(selected);
        this.setState({
            selected
        });
    }
    
    handleSearch(value) {
        if(this.state.selected && value === this.state.selected.name){
            this.setState({
                list: searchSelectData
            });
        }else{
            this.setState({
                list: _.filter(searchSelectData, v => {
                    return v.name.indexOf(value) > -1;
                })
            });
        }
    }
    
    render() {
        return (
            <div style={{width: '300px'}}>
                <SearchSelect
                    list={this.state.list}
                    selected={this.state.selected}
                    onSearch={this.handleSearch}
                    onSelect={this.handleSelect}
                    placeholder="搜索"
                />
            </div>
        );
    }
}
```
```jsx
<SearchSelect1/>
```
:::

::: demo 多选。 按delete可删除。
```js
class SearchSelect2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: [searchSelectData[1]],
            list: searchSelectData
        };
        this.handleSelect = ::this.handleSelect;
        this.handleSearch = ::this.handleSearch;
    }
    
    handleSelect(selected) {
        console.log(selected);
        this.setState({
            selected
        });
    }
    
    handleSearch(value) {
        // 字符串匹配过滤，如果和选中的一样，则返回全部
        if(this.state.selected && value === this.state.selected){
            this.setState({
                list: searchSelectData
            });
        }else{
            this.setState({
                 list: _.filter(searchSelectData, v => v.name.indexOf(value) > -1)
            });
        }
    }
    
    render() {
        return (
            <div style={{width: '500px'}}>
                <SearchSelect
                    list={this.state.list}
                    selected={this.state.selected}
                    onSearch={this.handleSearch}
                    onSelect={this.handleSelect}
                    multiple
                    placeholder="搜索"
                />
            </div>
        );
    }
}
```
```jsx
<SearchSelect2/>
```
:::

::: demo 按组分
```js
class SearchSelect3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            list: [...searchSelectGroupData]
        };
        this.handleSelect = ::this.handleSelect;
        this.handleSearch = ::this.handleSearch;
    }
    
    handleSelect(selected) {
        console.log(selected);
        this.setState({
            selected
        });
    }
    
    handleSearch(value) {
        const list = JSON.parse(JSON.stringify(searchSelectGroupData));
        
        if(this.state.selected && this.state.selected.name === value){
            this.setState({
                list: [...searchSelectGroupData]
            });
        }else{
            this.setState({
                list: _.filter(list, v => {
                    v.children = _.filter(v.children, item => {
                        console.log('item', item.name.indexOf(value) > -1);
                        return item.name.indexOf(value) > -1;
                    });
                    
                    return v.children.length;
                })
            });
        }
    }
    
    render() {
        return (
            <div style={{width: '300px'}}>
                <SearchSelect
                    list={this.state.list}
                    isGroupList
                    selected={this.state.selected}
                    onSearch={this.handleSearch}
                    onSelect={this.handleSelect}
                    placeholder="搜索"
                />
            </div>
        );
    }
}
```
```jsx
<SearchSelect3/>
```
:::

### Props
**注意，请尽量提供key**
- `list (array|isRequired)` 搜索待选数据，是过滤后的数据。结构`{'[{name: "aaaaa"}]'}` ，name用来显示
- `isGroupList (bool)` list数据是否分组数据，此时list的结构为`{'[{label: "一组", children: [{name: "aaaaa"}]}]'}`
- `selected (any)` 选中了什么，`list`中某条数据(引用！)
- `onSelect (func|isRequired)` 选中后触发，提供和`selected`一样的数据结构，一般直接设置`selected`即可
- `onSearch (func|isRequired)` 搜索触发函数，以便过滤重新得出`list`数据。
- `delay (number)` 搜索过程中延迟多少ms才出触发`onSearch`， 默认500
- `listMaxHeight (string)` 搜索待选数据的高度，默认250px
- `multiple (bool)` 是否多选，默认false。 如果多选，则selected是数组
- `placeholder (string)`
- `isScrollToSelected (bool)` focus后列表是否滚动到选择的位置