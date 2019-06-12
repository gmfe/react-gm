---
imports:
    import {EditableText, Popover} from '../../src/index';
---
## EditableText

`EditableText`在表格编辑中比较常用

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
                    disabled={true}
                />
                <EditableText
                    onOk={this.handleOkClick}
                    content={this.state.content}
                >
                    <Popover
                        showArrow
                        top
                        component={<div/>}
                        type='hover'
                        popup={<div className='gm-border gm-padding-5 gm-bg gm-text-12' style={{ width: '130px' }}>来源：{this.state.content}</div>}>
                        <div className='gm-inline-block'>
                          {this.state.content}
                        </div>
                      </Popover>
                </EditableText>
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
- `children` 可选参数，若没有，则显示`content`
- `disabled` 是否可编辑
