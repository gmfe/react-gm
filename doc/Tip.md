提示框，右上角

![](http://7xlnio.com1.z0.glb.clouddn.com/16-7-31/87143687.jpg)

## 组件介绍

### Tip

- `title (string)` 标题啦
- `type (string)` 类型，有`success` `info` `warning` `danger`四种
- `onClose` (func) 关闭后触发
- `children` 显示的内容，一般提供字符串，也可以是其他

```jsx
<Tip type="success">啊啊啊</Tip>
<Tip type="info">啊啊啊</Tip>
<Tip type="warning">啊啊啊</Tip>
<Tip type="danger">啊啊啊</Tip>
<Tip type="success" title="错误">啊啊啊</Tip>
```

### TipOverlay

浮层形式的Tip。没有对外暴露。 一般是通过`Tip`提供的静态方法来调用`TipOverlay`在右上角做提示用。

- `title` 同上
- `type` 同上
- `onClose` 同上
- `time (number)` 多长时间自动关闭，默认3000，0表示不自动关闭（用户手动触发）

### Tip 静态方法

提供了4个静态方法 `success` `info` `warning` `danger`。
参数同`TipOverlay`，同时提供只传string的快捷方法。

```
Tip.success({
    children: '需要用户自行关闭的',
    time: 0,
    onClose: () => console.log('tip closed by user')
});
Tip.info({
    children: '提示啦,提示啦',
    onClose: () => console.log('tip closed')
});
Tip.info('提示啦，提示啦');
```