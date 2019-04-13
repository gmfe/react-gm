---
imports:
    import {Drawer, Dialog} from '../../src/index';

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
        <div style={{height: '50px', backgroundColor: '#64DD17'}} onClick={() => {
          Dialog.confirm({
          children: 'asdfasf'
          }).then(() => {
            Drawer.hide()
          })
        }}>btn</div>
        
        
        
      </div>,
      onHide: Drawer.hide,
      opacityMask: true,
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
- `onHide (func)` 隐藏触发回调
- `opacityMask (bool)` 遮罩透明
- `children` 抽屉内容
- `style (object)` drawer的样式
- `animation (bool)` 是否使用动画, 默认为ture

### Static
- `render`
- `hide`
