---
imports:
    import {Modal} from '../../src/index';
---
## Modal

模态框，出Modal浮层

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
    
    handleModal(size){
        Modal.render({
            children: '我是内容',
            title: '我是标题',
            size,
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

### Props
- `show (bool|isRequired)` 是否显示
- `disableMaskClose (bool)` 是否启用点击mask关闭modal
- `onHide (func)` 隐藏触发回调
- `size (string ['lg', 'md', 'sm'])` modal尺寸，默认md
- `title (string|element)` 标题
- `children` 模态框里面的内容


### Static
- `render`
- `hide`