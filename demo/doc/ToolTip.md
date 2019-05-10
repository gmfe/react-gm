---
imports:
    import { ToolTip } from '../../src/index';
---
## ToolTip

::: demo
```jsx
<div>
    <ToolTip popup={<div>hello</div>}/>
    <ToolTip popup={<div>hello</div>}><span>hover tip</span></ToolTip>
</div>
```
:::


### Props
- `title (string)` 
- `children` 显示的内容，一般提供字符串，也可以是其他
