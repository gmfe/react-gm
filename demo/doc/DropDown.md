---
imports:
    import {DropDown} from '../../src/index';
---
## DropDown

下拉框

::: demo DropDown
```js
class DropDownWrap extends React.Component {
    handleClick() {
        console.log('click');
    }
    
    render() {
        return (
            <div>
                <DropDown
                    popup={(
                        <DropDown.Items>
                            <DropDown.Item onClick={this.handleClick}>aaa</DropDown.Item>
                            <DropDown.Item>aaa</DropDown.Item>
                            <DropDown.Item>aaa</DropDown.Item>
                            <DropDown.Item/>
                            <DropDown.Item>aaa</DropDown.Item>
                        </DropDown.Items>
                    )}
                >
                    <button className="btn btn-default">
                        drop down <span className="caret"/>
                    </button>
                </DropDown>
                
                <DropDown
                    popup={(
                        <DropDown.Items>
                            <DropDown.Item onClick={this.handleClick}>aaa</DropDown.Item>
                            <DropDown.Item>aaa</DropDown.Item>
                            <DropDown.Item>aaa</DropDown.Item>
                            <DropDown.Item/>
                            <DropDown.Item>aaa</DropDown.Item>
                        </DropDown.Items>
                    )}
                >
                    <button className="btn btn-primary">
                        drop down <span className="caret"/>
                    </button>
                </DropDown>
                
                <DropDown
                    popup={(
                        <DropDown.Items>
                            <DropDown.Item onClick={this.handleClick}>aaa</DropDown.Item>
                            <DropDown.Item>aaa</DropDown.Item>
                            <DropDown.Item>aaa</DropDown.Item>
                            <DropDown.Item/>
                            <DropDown.Item>aaa</DropDown.Item>
                        </DropDown.Items>
                    )}
                >
                    <button className="btn btn-default btn-sm">
                        drop down <span className="caret"/>
                    </button>
                </DropDown>
                
                <div>
                分裂式按钮
                    <DropDown
                        split
                        cartClassName="btn-sm"
                        popup={(
                            <DropDown.Items>
                                <DropDown.Item onClick={this.handleClick}>aaa</DropDown.Item>
                                <DropDown.Item>aaa</DropDown.Item>
                                <DropDown.Item>aaa</DropDown.Item>
                                <DropDown.Item/>
                                <DropDown.Item>aaa</DropDown.Item>
                            </DropDown.Items>
                        )}
                    >
                        <button className="btn btn-default btn-sm">
                            drop down
                        </button>
                    </DropDown>
                </div>
            </div>
        );
    }
}
```
```jsx
<DropDownWrap/>
```
:::

### Props
- `popup (element|isRequired)` 对应的浮层
- `split (bool)` 是否分裂式按钮
- `cartClassName (string)` split true时有效，设置cart的样式

### DropDown.Items

用来包裹 DropDown.Item

### DropDown.Item

如果没有children，则是分割线
