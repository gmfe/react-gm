---
imports:
    import {NProgress} from '../../src/index';
---

## NProgress

顶部进度条

::: demo 一般用其静态方法，`start` `done`。

```jsx
<div>
    <button className="btn btn-primary" onClick={() => NProgress.start()}>start</button>
    <button className="btn btn-primary" onClick={() => NProgress.done()}>end</button>
</div>
```
:::

如果想改变样式，覆盖css。

```css
.gm-nprogress {
    background: green;
}
.gm-nprogress-head {
    box-shadow: 0 0 10px green, 0 0 5px green;
}
```

### Static
- `start()` 开始跑进度条
- `done()` 结束进度条