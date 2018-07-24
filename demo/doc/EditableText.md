---
imports:
    import {EditableText} from '../../src/index';
---
## EditableText

EditableText

::: demo
```js
class EditableTextWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: 'hello world'
        };
    }
    
    handleOkClick = (value) => {
        this.setState({
            content: value
        });
    }
    
    render() {
        return (
            <div>
                <EditableText
                    onOk={this.handleOkClick}
                    content={this.state.content}
                />
            </div>
        );
    }
}
```

```jsx
<EditableTextWrap/>
```

:::

### Props
- `content` 字符串，必须项，显示的内容
- `onOk` 确定事件的回调，返回输入框当前的内容，可能会有空值，需要调用方根据实际情况处理空值
- `onCancel` 取消事件的回调方法，无返回值，输入框失去焦点也会回调该方法