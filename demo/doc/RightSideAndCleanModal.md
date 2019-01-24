---
imports:
    import {RightSideModal, CleanModal} from '../../src/index';

---
## Modal

干净模态框 & 右侧模态框.(modal的高阶组件)

::: demo 干净的Modal
```js
class ModalWrap4 extends React.Component {
    handleModal(){
        CleanModal.render({
            children: <div>啦啦啦啦阿里<br/>干净的modal</div>,
            onHide: CleanModal.hide,
            style: {
                width: 'auto',
                background: '#fff',
                margin: '50px',
                height: 'calc(100% - 100px)'
            }
        });
    }

    render() {
            return (
                <div>
                    <button
                        className="btn btn-default"
                        onClick={this.handleModal}
                    >clean Modal</button>
                </div>
            );
        }
}
```
```jsx
<ModalWrap4/>
```
:::

::: demo 右侧的modal
```js
class ModalWrap5 extends React.Component {
    handleModal(){
        RightSideModal.render({
            children:
            <div>
                {Array(100).fill(<div>这是一行</div>)}
            </div>,
            title: '右侧弹出modal',
            onHide: RightSideModal.hide,
            opacityMask: true,
            style: {
                width: '600px'
            }
        });
    }

    render() {
            return (
                <div>
                    <button
                        className="btn btn-default"
                        onClick={this.handleModal}
                    >right-side Modal</button>
                </div>
            );
        }
}
```
```jsx
<ModalWrap5/>
```
:::

### Props
基于modal二次封装,用法上和modal保持一致
- `show (bool|isRequired)` 是否显示
- `disableMaskClose (bool)` 是否启用点击mask关闭modal
- `onHide (func)` 隐藏触发回调
- `size (string ['lg', 'md', 'sm'])` modal尺寸，默认md
- `title (string|element)` 标题
- `children` 模态框里面的内容
- `noContentPadding` 内容没有padding

### Static
- `render`
- `hide`