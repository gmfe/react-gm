---
imports:
    import {Drawer} from '../../src/index';

---
##  Drawer

::: demo Drawer
```js
class ModalWrap extends React.Component {
  handleModal(){
    Drawer.render({
      children: <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
        <div style={{flex: '1', overflowY: 'auto'}}>
          示例示例<br/>右侧右侧的示例示例<br/>右侧右侧的示例示例<br/>右侧右侧的示例示例<br/>右侧右侧的示例示例<br/>右侧右侧的示例示例<br/>右侧右侧的
          示例示例<br/>右侧右侧的示例示例<br/>右侧右侧的示例示例<br/>右侧右侧的示例示例<br/>右侧右侧的示例示例<br/>右侧右侧的示例示例<br/>右侧右侧的
        </div>
        <div style={{height: '50px', backgroundColor: '#64DD17'}}>btn</div>
      </div>,
      onHide: Drawer.hide,
      opacityMask: true,
      noCloseBtn: false,
      title: '示例',
      noContentPadding: true,
      style: {width: '600px', height: '100%'}}
    );
  }

  render() {
    return (
    <div>
      <button
        className="btn btn-default"
        onClick={this.handleModal.bind(this)}
        >Drawer
      </button>
    </div>);
  }
}
```
```jsx
<ModalWrap />
```
:::


### Props
- `disableMaskClose (bool)` 是否启用点击mask关闭drawer
- `onHide (func)` 隐藏触发回调
- `title (string)` 标题
- `children` 抽屉内容
- `opacityMask (bool)` 遮罩透明
- `style (object)` drawer的样式
- `animation (bool)` 是否使用动画, 默认为ture
- `noContentPadding (bool)` content没有padding

### Static
- `render`
- `hide`