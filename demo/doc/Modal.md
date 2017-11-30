---
imports:
    import {Modal, RightSideModal, CleanModal} from '../../src/index';
---
## Modal

模态框，出Modal浮层.  高阶Modal组件:[RightSideModal](#/doc/RightSideAndCleanModal) ,[CleanModal](#/doc/RightSideAndCleanModal)

::: demo
```js
class ModalWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }
    
    handleModal(){
        this.setState({
            show: !this.state.show
        });
    }
    
    handleModalStatic(){
        Modal.render({
            children: '我是内容',
            title: '我是标题',
            onHide: Modal.hide
        });
    }
    
    handleModalRemove(){
        Modal.render({
            children: '我是内容',
            title: '我是标题',
            onHide: Modal.hide
        });
        setTimeout(() => {Modal.hide()}, 2000);
    }
    
    render() {
        return (
            <div>
                <button 
                    className="btn btn-default gm-marginRight10" 
                    onClick={::this.handleModal}
                >component 形式</button>
                <button 
                    className="btn btn-primary" 
                    onClick={::this.handleModalStatic}
                >静态方法形式 + title</button>
                <button 
                    className="btn btn-default" 
                    onClick={::this.handleModalRemove}
                >静态方法形式 + 2s关闭</button>
                <Modal
                    show={this.state.show}
                    onHide={::this.handleModal}
                >
                    我是内容
                </Modal>
            </div>
        );
    }
}
```
```jsx
<ModalWrap/>
```
:::

::: demo 各种尺寸
```js
class ModalWrap2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }
    
    handleModal(size, style){
        Modal.render({
            children: '我是内容',
            title: '我是标题',
            size,
            style,
            onHide: Modal.hide
        });
    }
    
    handleBigModal(){
        Modal.render({
            children: <div style={{height: '1000px', background: 'red'}}>我是内容</div>,
            title: '我是标题',
            onHide: Modal.hide
        });
    }
    
    render() {
        return (
            <div>
                <button 
                    className="btn btn-default" 
                    onClick={this.handleModal.bind(this, 'lg')}
                >lg</button>
                <button 
                    className="btn btn-primary" 
                    onClick={this.handleModal.bind(this, 'md')}
                >默认 md</button>
                <button 
                    className="btn btn-default" 
                    onClick={this.handleModal.bind(this, 'sm')}
                >sm</button>
                <button
                    className="btn btn-default"
                    onClick={this.handleModal.bind(this, 'sm', {width: '750px'})}
                >固定750宽</button>
                <button 
                    className="btn btn-default" 
                    onClick={this.handleBigModal}
                >内容很大</button>
            </div>
        );
    }
}
```
```jsx
<ModalWrap2/>
```
:::

::: demo 各种形态
```js
class ModalWrap3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    handleModal(type, okBtnClassName){
        Modal[type]({
            children: '我是内容我内容我是内容我是内容',
            title: '我是标题题我是标题',
            onHide: Modal.hide,
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            }
        });
    }

    handleModalWithOKBtn(type, okBtnClassName){
        Modal[type]({
            children: '我是内容我内容我是内容我是内容',
            title: '我是标题题我danger',
            onHide: Modal.hide,
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
            okBtnClassName
        });
    }

    render() {
            return (
                <div>
                    <button
                        className="btn btn-default"
                        onClick={this.handleModal.bind(this, 'confirm', '')}
                    >confirm</button>
                    <button
                        className="btn btn-default"
                        onClick={this.handleModalWithOKBtn.bind(this, 'confirm', 'btn-danger')}
                    >confirm danger</button>
                    <button
                        className="btn btn-default"
                        onClick={this.handleModal.bind(this, 'info', '')}
                    >info</button>
                    <button
                        className="btn btn-default"
                        onClick={this.handleModal.bind(this, 'success', '')}
                    >success</button>
                    <button
                        className="btn btn-default"
                        onClick={this.handleModal.bind(this, 'warning', '')}
                    >warning</button>
                </div>
            );
        }
}
```
```jsx
<ModalWrap3/>
```
:::



::: demo 没有padding的modal
```js
class ModalWrap6 extends React.Component {
    handleModal(){
        Modal.render({
            children: <div>示例示例<br/>滴滴滴</div>,
            title: 'content没padding的modal',
            onHide: Modal.hide,
            noContentPadding: true,
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
                    >noContentPadding Modal</button>
                </div>
            );
        }
}
```
```jsx
<ModalWrap6/>
```
:::

### Props
- `show (bool|isRequired)` 是否显示
- `disableMaskClose (bool)` 是否启用点击mask关闭modal
- `onHide (func)` 隐藏触发回调
- `size (string ['lg', 'md', 'sm'])` modal尺寸，默认md
- `title (string|element)` 标题
- `children` 模态框里面的内容
- `noContentPadding` 内容没有padding

### Static
- `render`
- `confirm`
- `success`
- `info`
- `warning`
- `hide`

