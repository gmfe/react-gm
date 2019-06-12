---
imports:
    import {Drawer, Dialog} from '../../src/index';

---
##  Drawer
背景: `Drawer`的出现,是为了在Drawer之上再次弹出浮层,例如Dialog

::: demo Drawer
```js
class ModalWrap extends React.Component {
  handleModal(){
    Drawer.render({
      children: <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
        <div style={{flex: '1', overflowY: 'auto'}}>
          {Array(100).fill(<div>一行</div>)}
        </div>
        <div style={{height: '50px', backgroundColor: '#64DD17'}} onClick={() => {
          Dialog.confirm({
          children: '我是Dialog'
          }).then(() => {
            Drawer.hide()
          })
        }}>弹出Dialog</div>
        
        
        
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
