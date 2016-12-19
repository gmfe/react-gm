## 颜色规范

::: demo Color

```js
class ColorWrap extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
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
        );
    }
}
```
 
```jsx
<ColorWrap/>
```
:::
