#控件规范：
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
::: demo Color

```js
const BottonWrap = () =>
    <div className="demo-box">
        <div className="item text">
            <button className="btn btn-primary">保存</button> btn btn-primary 用于搜索、登录、保存、添加按钮
        </div>
       <div className="item text">
            <button className="btn btn-sm btn-primary btn-plain">批量操作 <i className="ifont ifont-pi-liang"/></button> btn btn-primary 用于列表标题栏（右上角）
       </div>
       <div className="item text">
            <button className="btn btn-primary btn-sm">修改</button>&nbsp;&nbsp;
            <button className="btn btn-primary btn-plain btn-sm">打印</button>
            &nbsp;&nbsp;用于二级页面、如订单详情、锁价详情、进销存单据详情
       </div>
       <div className="item text">
            <button className="btn btn-default">取消</button> btn btn-default 用于导出、取消按钮
       </div>
       <div className="item text">
            <a href="javascript:;">详情</a> 用于列表中内容的编辑
       </div>
    </div>
```
```jsx
<BottonWrap/>
```
:::
* 应用场景： 搜索、数据添加、保存等强指向性按钮的样式
* 注意事项： 
    1.  “保存”、“编辑”按钮通常与“取消”按钮同时出现，且“取消”在前，“保存”或“编辑”在后；
    2.  同一个模块中的强指向性按钮不宜过多


* siqi插入样式2
* 应用场景： 取消、导出按钮的样式
* 注意事项：
 “保存”、“编辑”按钮通常与“取消”按钮同时出现，且“取消”在前，“保存”或“编辑”在后

* siqi插入样式3
* 应用场景： 
 在列表头部的按钮样式，用于一级页面中的功能性按钮（无明显倾向性），按钮功能间逻辑并列

* siqi插入样式4:
* 应用场景： 用于1.2中的详情页面中顶部基本信息的强指向性按钮，如“保存”“修改”“提交入库单”“审核通过”等
* 注意事项： 
 同一个详情页面中的顶部信息仅可有一个强指向性按钮，判定方式如下：如存在多个按钮，将涉及正向流程的“状态修改”、“内容更改”的按钮（如“审核通过”“保存”等正向流程）确认为“强指向性”，其他功能性按钮采用工具栏的方式呈现


* siqi插入样式5：
* 应用场景： 
用于1.2中的详情页面中顶部基本信息中的“取消”按钮，
* 注意事项：
 仅在基本信息栏变为“可编辑态”时展现取消按钮，通常与“保存”按钮一起出现


* siqi插入样式6：
* 应用场景：
用于1.2中的详情页面中顶部基本信息的功能性按钮，通过工具栏下拉的方式聚合展现


* siqi插入样式7：
* 应用场景：
不可点按钮样式


* siqi插入样式8：
* 应用场景：
用于模块详情中的功能性操作


* siqi插入样式9：
* 应用场景：
用于列表的分页操作
* 注意事项：
1. 如模块内如存在“分页”展现的场景，在当前页面如存在多个模块，则采用“展开更多”样式，不展现为“分页”
2. 如页面仅有单个的数据模块，且存在较多的跨页批量操作，采用“展开更多”样式，不展现为“分页”


* siqi插入样式10：
* 应用场景：可替换为模块详情中（如列表详情）的文字链接，基于页面的交互拍板进行确认，无特定倾向于
* 注意事项：
同一个页面中样式统一


####3.4 组合控件样式：
#####3.4.1 多tab切换的样式：

#####3.4.2 表单/独立模块：

#####3.4.3 时间模板选择：

#####3.4.4 详情页面基本信息模块：

#####3.4.5 销售单、采购单样式：


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
