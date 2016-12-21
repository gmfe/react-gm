---
imports:
    import {DropDown, DropDownItems, DropDownItem} from '../../src/index';
---

### 颜色规范
::: demo Color
```js
const ColorWrap = () => 
    <div className="demo-box">
        <div className="item" style={{backgroundColor: '#409d39'}}><span>#409d39</span>模块顶部点缀，导航选中态，功能性按钮</div>
        <div className="item" style={{backgroundColor: '#2182cc'}}><span>#2182cc</span>文字链接颜色</div>
        <div className="item" style={{backgroundColor: '#333333'}}><span>#333333</span>用于导航，列表头部，模块标题，需突出说明的文字（非列表）的文本配色</div>
        <div className="item" style={{backgroundColor: '#666666'}}><span>#666666</span>用于列表内容，辅助性标题，表单内容中的填写项目的文本配色</div>
        <div className="item" style={{color: '#333333', backgroundColor: '#f9f9f9'}}><span>#f9f9f9</span>表头背景</div>
        <div className="item" style={{color: '#333333', backgroundColor: '#f5f5f5'}}><span>#f5f5f5</span>页面背景色，hover背景色</div>
    </div>
```
```jsx
<ColorWrap/>
```
:::


### 文字规范
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



### 按钮规范
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


### 边距规范
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
