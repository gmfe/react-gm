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
    <button className="btn btn-primary" onClick={() => Tip.info('提示啦，提示啦')}>需要用户自行关闭的</button>
    <button className="btn btn-default" onClick={() => Tip.success({
        children: '需要用户自行关闭的',
        time: 0,
        onClose: () => console.log('tip closed by user')
    })}>需要用户自行关闭的</button>
    <button className="btn btn-default" onClick={() => Tip.info({
        children: '提示啦,提示啦',
        onClose: () => console.log('tip closed')
    })}>onClose时间回调</button>
</div>
```
:::

### Props
- `title (string)` 标题啦
- `type (string)` 类型，有`success` `info` `warning` `danger`四种
- `onClose` (func) 关闭后触发
- `children` 显示的内容，一般提供字符串，也可以是其他

### Static
参数同`TipOverlay`，同时提供只传string的快捷方法。
- `success()`
- `info()`
- `warning()`
- `danger()`

### TipOverlay
浮层形式的Tip。没有对外暴露。 一般是通过`Tip`提供的静态方法来调用`TipOverlay`在右上角做提示用。
- `title` 同上
- `type` 同上
- `onClose` 同上
- `time (number)` 多长时间自动关闭，默认3000，0表示不自动关闭（用户手动触发）