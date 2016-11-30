---
imports:
    import {Modal} from '../../src/index';
---
## Modal

模态框，出Modal浮层

::: demo Modal
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
            show: true,
            children: '我是内容',
            title: '我是标题',
            onHide: () => {
                Modal.render({
                    show: false
                });
            }
        });
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
            show: true,
            children: '我是内容',
            title: '我是标题',
            size,
            onHide: () => {
                Modal.render({
                    show: false
                });
            }
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
            </div>
        );
    }
}
```
```jsx
<ModalWrap2/>
```
:::
