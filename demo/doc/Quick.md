---
imports:
    import {QuickPanel, QuickTab, QuickFilter, QuickDesc, DateRangePicker, Flex} from '../../src/index.js';
    import _ from 'lodash';
---
## Quick

各种Panel面板

## QuickPanel
::: demo
```js
class QuickPanelDemo extends React.Component{
    render(){
        return (
            <div>
                <QuickPanel title={"运营时间设置"} right={(
                    <button disabled>adfasf</button>
                )}>
                    <div>内容</div>
                </QuickPanel>
                <hr/>
                <div>quick panel 一起会相连</div>
                <QuickPanel title={"运营时间设置"} collapse>
                    <div>内容</div>
                </QuickPanel>
                <QuickPanel title={"运营时间设置"} collapse in={false}>
                    <div>内容</div>
                </QuickPanel>
            </div>
        );
    }
}
```
```jsx
<QuickPanelDemo/>
```
:::


### Props
- `title (string|element|isRequired)` 标题
- `collapse (bool)` 是否具有明细收拢展开功能
- `right (element)` 头部右边内容
- `in (bool)` true 默认展开
- `icon (string)` 标题左边icon
- `iconColor (string)` icon颜色，默认 #fd5271

## QuickTab

::: demo
```js
class Tab extends React.Component{
    renderCollapseFilter(){
        return <div>
                   <form className="form-horizontal">
                       <Flex alignCenter className="form-group">
                           <Flex alignCenter className="col-md-2">
                               <div className="gm-inline-block">
                                   <select className="form-control" style={{border: 'none'}}>
                                       <option value="1">按日期</option>
                                       <option value="1">按周期</option>
                                   </select>
                               </div>
                           </Flex>
                           <div className="col-md-10">
                               <DateRangePicker
                                   begin={new Date()}
                                   end={new Date()}
                                   onChange={_.noop}
                                   inputClassName="form-control"
                               />
                           </div>
                       </Flex>
                       <Flex alignCenter className="form-group">
                           <Flex alignCenter className="col-md-2">商品筛选：</Flex>
                           <div className="col-md-10">
                               <div className="gm-inline-block">
                                   <input type="text" style={{width: '120px'}} placeholder="全部一级分类" className="form-control gm-inline-block gm-margin-right-5"/>
                               </div>
                               <div className="gm-inline-block">
                                   <input type="text" style={{width: '120px'}} placeholder="全部二级分类" className="form-control gm-inline-block gm-margin-right-5"/>
                               </div>
                               <div className="gm-inline-block">
                                   <input type="text" style={{width: '120px'}} placeholder="全部三级分类" className="form-control gm-inline-block"/>
                               </div>
                           </div>
                       </Flex>
                       <Flex alignCenter className="form-group">
                           <Flex alignCenter className="col-md-2">任务筛选：</Flex>
                           <div className="col-md-10">
                               <div className="gm-inline-block gm-margin-right-5">
                                   <select className="form-control">
                                       <option value="1">全部分拣备注</option>
                                       <option value="2">全部分拣备注</option>
                                   </select>
                               </div>
                               <div className="gm-inline-block gm-margin-right-5">
                                   <select className="form-control">
                                       <option value="1">全部任务类型</option>
                                       <option value="1">全部任务类型</option>
                                   </select>
                               </div>
                               <div className="gm-inline-block">
                                   <select className="form-control">
                                       <option value="1">全部任务状态</option>
                                       <option value="1">全部任务状态</option>
                                   </select>
                               </div>
                           </div>
                       </Flex>
                       <div className="form-group">
                           <Flex alignCenter className="col-md-2">订单筛选：</Flex>
                           <div className="col-md-10">
                               <div className="gm-inline-block">
                                   <select className="form-control">
                                       <option value="1">选择运营配置</option>
                                       <option value="1">选择XX配置</option>
                                   </select>
                               </div>
                           </div>
                       </div>
                       <Flex alignCenter className="form-group">
                           <Flex alignCenter className="col-md-2">搜索：</Flex>
                           <div className="col-md-10">
                               <input style={{width: '350px'}} className="form-control" placeholder="输入订单号、分拣号、商户信息、商品信息搜索等"/>
                           </div>
                       </Flex>
                       <Flex alignCenter className="form-group gm-padding-left-15">
                           <button type="submit" className="btn btn-primary">搜索</button>
                           <div className="gm-gap-10"></div>
                           <a href="" className="btn btn-default">导出</a>
                       </Flex>
                   </form>
               </div>;
    }

    render() {
        return (
            <QuickTab tabs={['按订单查看', '按商品查看']} className="gm-padding-15" isStatic={true}>
                <QuickTab.QuickTabItem>
                    <QuickFilter className="gm-border-top-0" collapseRender={this.renderCollapseFilter}>
                        <form className="form-inline">
                            <select className="form-control gm-margin-right-10 gm-border-0">
                                <option value="1">按周期</option>
                                <option value="1">按日期</option>
                            </select>
                            <select className="form-control gm-margin-right-10">
                                <option value="1">选择运营配置</option>
                                <option value="1">选择XX配置</option>
                            </select>
                            <div className="input-group gm-margin-right-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="请输入订单号"
                                    style={{minWidth: '250px'}}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">搜索</button>
                            <div className="gm-gap-10"></div>
                            <a href="" className="btn btn-default">导出</a>
                        </form>
                    </QuickFilter>
                </QuickTab.QuickTabItem>
                <QuickTab.QuickTabItem>
                    <QuickFilter className="gm-border-top-0">
                        <form className="form-inline">
                            <div className="input-group gm-margin-right-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="请输入商户名称"
                                    style={{minWidth: '250px'}}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">搜索</button>
                            <div className="gm-gap-10"></div>
                            <a href="" className="btn btn-default">导出</a>
                        </form>
                    </QuickFilter>
                </QuickTab.QuickTabItem>
            </QuickTab>
         )
    };
 }
```

```jsx
<Tab/>
```
:::

### Props
- `tabs (array)` tab 名称数组
- `onChange (func)`
- `active (number)` 当前激活的tab
- `right (element)` 头部右边内容
- `justified (bool)` 平分
- `isStatic (bool)` tab 内容切换的时候是否不被卸载
- `children` 尽量提供`QuickTabItem`组件数组，这样语义化好点

### Component
- `QuickTabItem` 语义化，为children每个实例增加的一个wrap