---
imports:
    import { ToolTip } from '../../src/index';
---
## ToolTip

::: demo
```jsx
<div>
    <ToolTip popup={<div style={{ width: "100px", height: "100px" }}>hello</div>}/>
    <ToolTip popup={<div style={{ width: "100px", height: "100px" }}>hello</div>}><span>hover tip</span></ToolTip>
    <br />
    <ToolTip right popup={<div style={{ width: "100px", height: "100px" }}>hello</div>}><span>right hover tip</span></ToolTip>
    <ToolTip center popup={<div style={{ width: "100px", height: "100px" }}>hello</div>}><span>center hover tip</span></ToolTip>
    <br />
    <ToolTip top popup={<div style={{ width: "100px", height: "100px" }}>hello</div>}><span>top hover tip</span></ToolTip>
</div>
```
:::


### Props
- `title (string)` 
- `children` 显示的内容，一般提供字符串，也可以是其他
