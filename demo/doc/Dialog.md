---
imports:
    import {Dialog} from '../../src/index';
---
## Dialog

对话框

::: demo Dialog
```js
class DialogWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            show2: false,
            show3: false,
            bsSize: 'sm'
        };
        this.handleAlert = ::this.handleAlert;
        this.handleConfirm = ::this.handleConfirm;
        this.handlePrompt = ::this.handlePrompt;
        this.handleComponent = ::this.handleComponent;
        this.handleComponentSize = ::this.handleComponentSize;
        this.handleDialogOK = ::this.handleDialogOK;
    }
    
    handleAlert() {
        Dialog.alert({
            children: 'adsf'
        }).then(() => {
            console.log('resolve');
        }, () => {
            console.log('reject');
        });
    }
    
    handleConfirm() {
        // Dialog.confirm({
        //     children: 'asdf',
        //     title: 'title'
        // }).then(() => {
        //     console.log('resolve');
        // }, () => {
        //     console.log('reject');
        // });
        
        Dialog.dialog({
            title: 'title',
            bsSize: 'md',
            children: <div>something</div>,
            onOK: () => {
                console.log('onOK');
                return Promise.resolve('a'); // return false
            }
        }).then(() => {
            console.log('promise resolve');
        });
    }
    
    handleConfirmWithLoading() {
        Dialog.confirm({
            title: 'title',
            bsSize: 'md',
            children: <div>something</div>,
            onOK: () => {
                return new Promise((resove) => {
                    setTimeout(() => {
                        resove('a');
                    }, 1000);
                });
            }
        }).then(() => {
            console.log('promise resolve');
        });
    }
    
    handlePrompt() {
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
    }
    
    handleComponent() {
        this.setState({
            show: !this.state.show
        });
    }
    
    handleComponentSize(bsSize) {
        console.log(bsSize, this.state);
        this.setState({
            show2: !this.state.show2,
            bsSize
        });
    }
    
    handleComponentSizeWithLoading(bsSize) {
        console.log(bsSize);
        this.setState({
            show3: !this.state.show3,
            bsSize
        });
    }

    handleDialogOK() {
        return new Promise((resove) => {
            setTimeout(() => {
                this.setState({
                    show3: false
                });
                resove('a');
            }, 1000);
        });
    }
    
    render() {
        return (
            <div>
                <div>
                    <button className="btn btn-default" onClick={this.handleAlert}>alert</button>
                    <button className="btn btn-default" onClick={this.handleConfirm}>confirm</button>
                    <button className="btn btn-default" onClick={this.handleConfirmWithLoading}>
                        confirm with loading state
                    </button>
                    <button className="btn btn-default" onClick={this.handlePrompt}>prompt</button>
                </div>
                <div>
                    <button className="btn btn-default" onClick={this.handleComponent}>toggle Component</button>
                </div>
                <div>
                    <button className="btn btn-default" onClick={this.handleComponentSize.bind(this, 'lg')}>
                        toggle Component size lg
                    </button>
                    <button className="btn btn-default" onClick={this.handleComponentSize.bind(this, 'md')}>
                        toggle Component size md
                    </button>
                    <button className="btn btn-default" onClick={this.handleComponentSize.bind(this, 'sm')}>
                        toggle Component size sm(default)
                    </button>
                </div>
                <div>
                    <button
                        className="btn btn-default"
                        onClick={this.handleComponentSizeWithLoading.bind(this, 'md')}
                    >
                        toggle Component with loading state
                    </button>
                </div>
                <Dialog
                    show={this.state.show}
                    onCancel={this.handleComponent}
                >
                    asdfa
                </Dialog>
                <Dialog
                    show={this.state.show2}
                    bsSize={this.state.bsSize}
                    onCancel={this.handleComponentSize.bind(this, this.state.bsSize)}
                >
                    bsSize {this.state.bsSize}
                </Dialog>
                <Dialog
                    show={this.state.show3}
                    bsSize={this.state.bsSize}
                    onCancel={this.handleComponentSizeWithLoading.bind(this, this.state.bsSize)}
                    onOK={this.handleDialogOK}
                >
                    bsSize {this.state.bsSize}
                </Dialog>
            </div>
        );
    }
}
```
```jsx
<DialogWrap/>
```
:::

### Props
- `show (bool|isRequired)` 是否显示
- `title (string)` 标题，默认"提示"
- `type (string)` 对话框类型，`alert` `confirm` `prompt`和无。默认无，其实有点像`confirm`
- `onCancel (func)` 对话框消失前触发，可能点取消按钮，可能点浮层，可能close按钮。
- `onOK (func)` 点确认按钮，之后对话框关闭。但返回 false 或者 Promise.reject() 则不会关闭。
- `bsSize (string)` 对话框大小，`lg` `md` `sm`。 默认`md`
- `cancelBtn (bool|string)` 为false则不显示cancel按钮，为字符串则替换按钮文案
- `OKBtn (bool|string)` 同上
- `promptDefaultValue (string)` 当type为`prompt`时有效，初始化输入框
- `promptPlaceholder (string)` 当type为`prompt`时有效，输入框的placeholder
- `children`


### Static
当然更多的时候是用其静态化方法 `alert` `confirm` `prompt`，返回一个promise，确定则resolve，取消则reject。之后对话框自动关闭。

在`confirm`时，用户输入可能不符合你的要求，不要求对话框自动关闭。可以在onOK中返回false（或者Promise.reject()）即可。
