---
imports:
    import {Loading} from '../../src/index';
---
## Loading

Loading组件使用场景：  当页面进入某一个业务时，向后台请求数据，同时前端UI渲染需要依赖的数据还没有完全从后台返回，这时需要呈现一个Loading来告知用户需要等待一小会。

::: demo 默认size 50
```jsx
<div>
    <Loading size={30}/>
    <Loading size={40}/>
    <Loading />
</div>
```
:::

### Props
- `size(number)` 默认50

