对话框

![](http://7xlnio.com1.z0.glb.clouddn.com/16-7-31/64502931.jpg)

## 组件介绍

## Dialog

功能迭代不是很合理，源码会有点乱

- `show (bool|isRequired)` 是否显示
- `title (string)` 标题，默认"提示"
- `type (string)` 对话框类型，`alert` `confirm` `prompt`和无。默认无，其实有点像`confirm`
- `onCancel (func)` 对话框消失前触发，可能点取消按钮，可能点浮层，可能close按钮。
- `onOK (func)` 点确认按钮，之后对话框关闭。但返回 false 或者 Promise.reject() 则不会关闭。
- `bsSize (string)` 对话框大小，`lg` `md` `sm`。 默认`md`
- `cancelBtn (bool|string)` 为false则不显示cancel按钮，为字符串则替换按钮文案
- `OKBtn (bool|string)` 同上
- `promptDefaultValue (string)` 当type为`prompt`时有效，初始化输入框
- `children`

```jsx
<Dialog show={this.state.show} onCancel={this.handleComponent}>asdfa</Dialog>
```

当然更多的时候是用其静态化方法 `alert` `confirm` `prompt`，返回一个promise，确定则resolve，取消则reject。之后对话框自动关闭。

在`confirm`时，用户输入可能不符合你的要求，不要求对话框自动关闭。可以在onOK中返回false（或者Promise.reject()）即可。

```jsx
Dialog.alert({
    children: 'adsf'
}).then(() => {
    console.log('resolve');
}, () => {
    console.log('reject');
});

Dialog.confirm({
    children: 'asdf',
    title: 'title'
}).then(() => {
    console.log('resolve');
}, () => {
    console.log('reject');
});

Dialog.prompt({
    children: 'sssss',
    title: 'title',
    promptDefaultValue: 123,
    onOK: () => {
        console.log('ok');
        return false; // return Promise.reject();
    }
}).then(value => {
    console.log('resolve', value);
}, () => {
    console.log('reject');
});
```
