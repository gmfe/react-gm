---
imports:
    import {QuickPanel, QuickTab, QuickFilter, QuickDesc } from '../../src/index.js';
    import _ from 'underscore';
---
## Quick

各种Panel面板

## QuickTab

::: demo
```js
const Tab = () =>
    <QuickTab tabs={['按订单查看', '按商品查看']} className="gm-padding-15" isStatic={true}>
        <QuickTab.QuickTabItem>
            <QuickFilter className="gm-border-top-0">
                <form className="form-inline">
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
```

```jsx
<Tab/>
```
:::

### Props
- `tabs (array)` tab 名称数组,
- `onChange (func)`
- `active (number)` 当前激活的tab,
- `right (element)` 头部右边内容,
- `isStatic (bool)` tab 内容切换的时候是否不被卸载
- `children` 尽量提供`QuickTabItem`组件数组，这样语义化好点

### Component
- `QuickTabItem` 语义化，为children每个实例增加的一个wrap