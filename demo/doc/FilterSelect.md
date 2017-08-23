---
imports:
    import {FilterSelect, MultipleFilterSelect} from '../../src/index.js';
    import _ from 'lodash';
---
## FilterSelect

搜索选择组件。

::: demo 以下example依赖的数据
```js
const filterSelectData = [
    {name: '华侨城'},
    {name: '世界之窗'},
    {name: '南山'},
    {name: '梧桐山'},
    {name: '欢乐海岸'},
    {name: '东部华侨城'},
    {name: '深圳湾'},
    {name: '华中科技大学'}
];
    
const filterSelectGroupData = [{
    label: '一组',
    children: [
        {name: '华侨城'},
        {name: '世界之窗'},
        {name: '南山'},
        {name: '梧桐山'},
        {name: '欢乐海岸'}
    ]
},{
    label: '二组',
    children: [
        {name: '东部华侨城'},
        {name: '深圳湾'},
        {name: '华中科技大学'}
    ]
}];
```
:::

::: demo 单选。如果把搜索条件清空，则代表没有选择。 注意：selected可能为空。
```js
class FilterSelect1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            list: filterSelectData
        };
        this.handleSelect = ::this.handleSelect;
        this.handleSearch = ::this.handleSearch;
        this.handleSearchAjax = ::this.handleSearchAjax;
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
                list: filterSelectData
            });
        }else{
            this.setState({
                list: _.filter(filterSelectData, v => {
                    return v.name.indexOf(value) > -1;
                })
            });
        }
    }

    handleSearchAjax(value) {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.handleSearch(value);
                resolve();
            }, 1000);
        });
    }

    handleWithFilter(list, query) {
        return _.filter(list, v => {
            return v.name.indexOf(query) > -1;
        });
    }
    
    render() {
        return (
            <div style={{width: '300px'}}>
                <FilterSelect
                    id="rr"
                    list={this.state.list}
                    selected={this.state.selected}
                    onSearch={this.handleSearch}
                    onSelect={this.handleSelect}
                    placeholder="搜索"
                />

                <div>disabled</div>
                
                <FilterSelect
                    id="gg"
                    disabled
                    list={this.state.list}
                    selected={this.state.selected}
                    onSearch={this.handleSearch}
                    onSelect={this.handleSelect}
                    placeholder="搜索"
                />

                <div>如果数据只初始化一次，用withFilter更便捷。</div>

                <FilterSelect
                    id="ggg"
                    list={this.state.list}
                    selected={this.state.selected}
                    withFilter={this.handleWithFilter}
                    onSelect={this.handleSelect}
                    placeholder="搜索"
                />

                <div>ajax搜索数据。</div>

                <FilterSelect
                    id="ggg"
                    list={this.state.list}
                    selected={this.state.selected}
                    withFilter={this.handleWithFilter}
                    onSelect={this.handleSelect}
                    onSearch={this.handleSearchAjax}
                    placeholder="搜索"
                />
            </div>
        );
    }
}
```
```jsx
<FilterSelect1/>
```
:::

::: demo 多选。
```js
class FilterSelect2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: filterSelectData,
            list: filterSelectData
        };
        this.handleSelect = ::this.handleSelect;
        this.handleSearch = ::this.handleSearch;
        this.handleSearchAjax = ::this.handleSearchAjax;
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
                list: filterSelectData
            });
        }else{
            this.setState({
                 list: _.filter(filterSelectData, v => v.name.indexOf(value) > -1)
            });
        }
    }

    handleSearchAjax(value) {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.handleSearch(value);
                resolve();
            }, 1000);
        });
    }
    
    render() {
        return (
            <div style={{width: '500px'}}>
                <MultipleFilterSelect
                    id="aa"
                    list={this.state.list}
                    selected={this.state.selected}
                    onSearch={this.handleSearch}
                    onSelect={this.handleSelect}
                    placeholder="搜索"
                />
                
                <MultipleFilterSelect
                    id="bb"
                    disabled
                    list={this.state.list}
                    selected={this.state.selected}
                    onSearch={this.handleSearch}
                    onSelect={this.handleSelect}
                    placeholder="搜索"
                />

                <MultipleFilterSelect
                    id="ccc"
                    list={this.state.list}
                    selected={this.state.selected}
                    onSearch={this.handleSearchAjax}
                    onSelect={this.handleSelect}
                    placeholder="搜索"
                />
            </div>
        );
    }
}
```
```jsx
<FilterSelect2/>
```
:::

::: demo 按组分
```js
class FilterSelect3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            list: [...filterSelectGroupData]
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
        const list = JSON.parse(JSON.stringify(filterSelectGroupData));
        
        if(this.state.selected && this.state.selected.name === value){
            this.setState({
                list: [...filterSelectGroupData]
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
                <FilterSelect
                    id="cc"
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
<FilterSelect3/>
```
:::

::: demo 无搜索框的MultipleFilterSelect
```js
class FilterSelect4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: filterSelectData,
            list: filterSelectData
        };
        this.handleSelect = ::this.handleSelect;
    }
    
    handleSelect(selected) {
        console.log(selected);
        this.setState({
            selected
        });
    }
    
    render() {
        return (
            <div style={{width: '500px'}}>
                <MultipleFilterSelect
                    disableSearch
                    id="aa"
                    list={this.state.list}
                    selected={this.state.selected}
                    onSelect={this.handleSelect}
                    placeholder="搜索"
                />
            </div>
        );
    }
}
```
```jsx
<FilterSelect4/>
```
:::


### FilterSelect Props

- `id (string|isRequired)`
- `disabled (bool)`
- `list (array|isRequired)` 搜索待选数据，是过滤后的数据。结构`{'[{name: \'aaaaa\'}]'}` ，name用来显示
- `isGroupList (bool)` list数据是否分组数据，此时list的结构为`{'[{label: "一组", children: [{name: \'aaaaa\'}]}]'}`
- `selected (any)` 选中了什么，`list`中某条数据(引用！)
- `onSelect (func|isRequired)` 选中后触发，提供和`selected`一样的数据结构，一般直接设置`selected`即可
- `onSearch (func|isRequired)` 搜索触发函数，以便过滤重新得出`list`数据。
- `withFilter (func|isRequired)` render会调用对列表过滤，直接return过滤后数据即可。
- `delay (number)` 搜索过程中延迟多少ms才出触发`onSearch`， 默认500
- `listMaxHeight (string)` 搜索待选数据的高度，默认250px
- `placeholder (string)`
- `isScrollToSelected (bool)` focus后列表是否滚动到选择的位置
- `disableSearch (bool)` 是否显示搜索框

### MultipleFilterSelect Props

只列和FilterSelect不同的地方

- `selected (array|isRequired)` 选中了什么，`list`中数据(引用！)的集合
- `onSelect (func|isRequired)` 选中后触发，提供和`selected`一样的数据结构，一般直接设置`selected`即可
