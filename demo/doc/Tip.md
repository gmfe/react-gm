---
imports:
    import {Tip} from '../../src/index';
---
## Tip

提示框，右上角

::: demo 几种类型
```jsx
<div>
    <Tip type="success">啊啊啊</Tip>
    <Tip type="info">啊啊啊</Tip>
    <Tip type="warning">啊啊啊</Tip>
    <Tip type="danger">啊啊啊</Tip>
    <Tip type="success" title="错误">啊啊啊</Tip>
</div>
```
:::

::: demo 浮层形式
```jsx
<div>
    <button className="btn btn-primary" onClick={() => window.___lastTip = Tip.info('提示啦，提示啦')}>默认 3s 关闭</button>
    <button className="btn btn-default" onClick={() => window.___lastTip = Tip.success({
        children: '需要用户自行关闭的',
        time: 0,
        onClose: () => console.log('tip closed by user')
    })}>需要用户自行关闭的</button>
    <button className="btn btn-default" onClick={() => Tip.clear(window.___lastTip)}>关闭指定 tip （比如最后一个tip）</button>  
</div>
```
:::


### Props
- `title (string)` 标题啦
- `type (string)` 类型，有`success` `info` `warning` `danger`四种
- `onClose` (func) 关闭后触发
- `children` 显示的内容，一般提供字符串，也可以是其他

### Static

方法返回 id ,可以通过 clear(id) 来关闭指定的 tip

- `success()`
- `info()`
- `warning()`
- `danger()`
- `clear(id)`
- `clearAll()`
