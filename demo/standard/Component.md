---
imports:
    import {DropDown, DropDownItems, DropDownItem, DateRangePicker, QuickFilter, SearchSelect, Pagination} from '../../src/index';
    import _ from 'underscore';
---

# 颜色规范
::: demo Color
```js
const ColorWrap = () => 
    <div className="demo-box">
        <div className="item" style={{backgroundColor: '#409d39'}}><span>#409d39 @brand-primary</span>模块顶部点缀，导航选中态，功能性按钮</div>
        <div className="item" style={{backgroundColor: '#2182cc'}}><span>#2182cc @link-color</span>文字链接颜色</div>
        <div className="item" style={{backgroundColor: '#333333'}}><span>#333333 @gm-color-first</span>用于导航，列表头部，模块标题，需突出说明的文字（非列表）的文本配色</div>
        <div className="item" style={{backgroundColor: '#666666'}}><span>#666666 @gm-color-second</span>用于列表内容，辅助性标题，表单内容中的填写项目的文本配色</div>
        <div className="item" style={{color: '#333333', backgroundColor: '#f9f9f9'}}><span>#f9f9f9 @gm-table-bg-accent</span>表头背景</div>
        <div className="item" style={{color: '#333333', backgroundColor: '#f5f5f5'}}><span>#f5f5f5 @gm-back-body-bg</span>页面背景色，hover背景色</div>
    </div>
```
```jsx
<ColorWrap/>
```
:::
<br />

# 文字规范
::: demo Font

```js
const FontWrap = () => 
    <div className="demo-box">
        <div className="item text" style={{fontSize: '16px'}}><span>16px</span>一级导航</div>
        <div className="item text" style={{fontSize: '14px'}}><span>14px</span>二级导航、模块标题、主要内容</div>
        <div className="item text" style={{fontSize: '12px'}}><span>12px</span>提示文案、表单、表格等</div>
    </div>
```
```jsx
<FontWrap/>
```
:::
* (文字说明样式）：
微软雅黑 16px 用于一级导航中的文本
微软雅黑 14px 用于二级导航，筛选器，模块头部，需突出说明的文本
微软雅黑 12px 用于列表，辅助性标题，面包屑，提示性的文本
<br />
<br />
<br />

# 按钮规范
::: demo btn-primary
```jsx
<div className="demo-box">
    <div className="item text">
        <button className="btn btn-primary">保存</button>
    </div>
</div>
```
:::
* 应用场景：搜索、数据添加、保存等强指向性按钮的样式
* 注意事项：
    1.  “保存”、“编辑”按钮通常与“取消”按钮同时出现，且“取消”在前，“保存”或“编辑”在后；
    2.  同一个模块中的强指向性按钮不宜过多
<br />
<br />

::: demo btn-default
```jsx
<div className="demo-box">
    <div className="item text">
        <button className="btn btn-default">取消</button>
    </div>
</div>
```
:::
* 应用场景：取消、导出按钮的样式
* 注意事项：
 “保存”、“编辑”按钮通常与“取消”按钮同时出现，且“取消”在前，“保存”或“编辑”在后
<br />
<br />

::: demo btn-primary btn-plain
```jsx
<div className="demo-box">
   <div className="item text">
        <button className="btn btn-sm btn-primary btn-plain">批量操作 <i className="ifont ifont-pi-liang"/></button>
   </div>
</div>
```
:::
* 应用场景： 
 在列表头部的按钮样式，用于一级页面中的功能性按钮（无明显倾向性），按钮功能间逻辑并列
<br />
<br />

::: demo btn-primary
```jsx
<div className="demo-box">
    <div className="item text">
        <button className="btn btn-primary" style={{width: '90px'}}>修改</button>
    </div>
</div>
```
:::
* 应用场景： 用于1.2中的详情页面中顶部基本信息的强指向性按钮，如“保存”“修改”“提交入库单”“审核通过”等
* 注意事项： 
    同一个详情页面中的顶部信息仅可有一个强指向性按钮，判定方式如下：如存在多个按钮，将涉及正向流程的“状态修改”、“内容更改”的按钮（如“审核通过”“保存”等正向流程）确认为“强指向性”，其他功能性按钮采用工具栏的方式呈现
<br />
<br />

::: demo btn-default
```jsx
<div className="demo-box">
   <div className="item text">
        <button className="btn btn-default" style={{width: '90px'}}>取消</button>
   </div>
</div>
```
:::
* 应用场景： 
用于1.2中的详情页面中顶部基本信息中的“取消”按钮，
* 注意事项：
 仅在基本信息栏变为“可编辑态”时展现取消按钮，通常与“保存”按钮一起出现
<br />
<br />

::: demo disabled
```jsx
<div className="demo-box">
   <div className="item text">
        <button className="btn btn-primary gm-margin-right-15" disabled>确定</button>
        <button className="btn btn-default" disabled>导出</button>
   </div>
</div>
```
:::
* 应用场景： 不可点击按钮(bootstrap默认颜色规范)
<br />
<br />

::: demo DropDown
```jsx
    <DropDown
        popup={(
            <DropDownItems>
                <DropDownItem>导出</DropDownItem>
                <DropDownItem>删除</DropDownItem>
            </DropDownItems>
        )}
    >
        <button className="btn btn-primary btn-plain">打印 <span className="caret"/></button>
    </DropDown>
```
:::
* 应用场景：
用于1.2中的详情页面中顶部基本信息的功能性按钮，通过工具栏下拉的方式聚合展现
<br />
<br />

::: demo DropDown disabled
```jsx
<DropDown
    popup={(
        <DropDownItems>
            <DropDownItem>导出</DropDownItem>
            <DropDownItem className="disabled">删除</DropDownItem>
        </DropDownItems>
    )}
>
    <button className="btn btn-primary btn-plain">打印 <span className="caret"/></button>
</DropDown>
```
:::
* 应用场景：
选项不可点样式
<br />
<br />

::: demo 链接
```jsx
<div className="demo-box">
   <div className="item text">
        <a href="javascript:;">详情</a>
   </div>
</div>
```
:::
* 应用场景：
用于模块详情中的功能性操作
<br />
<br />

::: demo 分页
```js
const pagination = {
    count: 60,
    offset: 0,
    limit: 10
};
```
```jsx
<div className="demo-box">
    <Pagination data={pagination}/>
</div>
```
:::
* 应用场景：用于列表的分页操作
* 注意事项：
    1. 如模块内如存在“分页”展现的场景，在当前页面如存在多个模块，则采用“展开更多”样式，不展现为“分页”
    2. 如页面仅有单个的数据模块，且存在较多的跨页批量操作，采用“展开更多”样式，不展现为“分页”
<br />
<br />

::: demo icon
```jsx
<div className="demo-box">
    <div className="item text"><span><i className="glyphicon glyphicon-pencil"/></span>编辑</div>
    <div className="item text"><span><i className="glyphicon glyphicon-trash"/></span>删除</div>
    <div className="item text"><span><i className="glyphicon glyphicon-plus"/></span>增加</div>
    <div className="item text"><span><i className="glyphicon glyphicon-cog"/></span>设置</div>
</div>
```
:::
<br />
<br />

# 筛选器
::: demo 时间搜索
```jsx
<DateRangePicker
    begin={new Date()}
    end={new Date()}
    inputClassName="form-control"
/>
```
:::
<br/>

::: demo 搜索栏
```jsx
<QuickFilter className="b-border-top-0">
    <form className="form-inline">
        <div className="input-group gm-margin-right-10">
            <input
                type="text"
                className="form-control"
                placeholder="请输入订单号、商户名称或商户ID"
                style={{minWidth: '250px'}}
            />
        </div>
        <button type="submit" className="btn btn-primary">搜索</button>
    </form>
</QuickFilter>
```
:::
<br/>

::: demo 输入框禁用状态
```jsx
<QuickFilter className="b-border-top-0">
    <form className="form-inline">
         <DateRangePicker
                begin={new Date()}
                end={new Date()}
                inputClassName="form-control"
                disabled
         />
        <div className="input-group gm-margin-lr-10">
            <input
                type="text"
                className="form-control"
                placeholder="disabled状态"
                style={{minWidth: '100px'}}
                disabled
            />
        </div>
        <button type="submit" className="btn btn-primary">搜索</button>
    </form>
</QuickFilter>
```
:::
<br/>

::: demo 单项筛选器
```jsx
<select className="form-control" style={{width:'125px'}}>
    <option value="0">全部报价单状态</option>
    <option value="1">已激活</option>
    <option value="2">未激活</option>
</select>
```
:::
<br/>

::: demo 多项筛选器
```js
const searchSelectData = [
    {name: '华侨城'},
    {name: '世界之窗'},
    {name: '南山'},
    {name: '梧桐山'},
    {name: '欢乐海岸'},
    {name: '东部华侨城'},
    {name: '深圳湾'},
    {name: '华中科技大学'}
];
class SearchSelect2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: searchSelectData,
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
<br/>

# 边距规范
station定义了0，5，10，15三种大小的padding和margin。
一般来说，模块（如panel）之间的距离为15px，按钮为5px。
- `gm-padding-0`， `gm-padding-5`，`gm-padding-10`，`gm-padding-15`
- `gm-padding-left-0`，`gm-padding-left-5`，`gm-padding-left-10`，`gm-padding-left-15`
- `gm-padding-right-0`，`gm-padding-right-5`，`gm-padding-right-10`，`gm-padding-right-15`
- `gm-padding-top-0`，`gm-padding-top-5`，`gm-padding-top-10`，`gm-padding-top-15`
- `gm-padding-bottom-0`，`gm-padding-bottom-5`，`gm-padding-bottom-10`，`gm-padding-bottom-15`
- `gm-margin-0`， `gm-margin-5`，`gm-margin-10`，`gm-margin-15`
- `gm-margin-left-0`，`gm-margin-left-5`，`gm-margin-left-10`，`gm-margin-left-15`
- `gm-margin-right-0`，`gm-margin-right-5`，`gm-margin-right-10`，`gm-margin-right-15`
- `gm-margin-top-0`，`gm-margin-top-5`，`gm-margin-top-10`，`gm-margin-top-15`
- `gm-margin-bottom-0`，`gm-margin-bottom-5`，`gm-margin-bottom-10`，`gm-margin-bottom-15`
