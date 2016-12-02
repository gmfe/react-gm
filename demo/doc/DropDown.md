---
imports:
    import {DropDown, DropDownItems, DropDownItem} from '../../src/index';
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
                        <DropDownItems>
                            <DropDownItem onClick={this.handleClick}>aaa</DropDownItem>
                            <DropDownItem>aaa</DropDownItem>
                            <DropDownItem>aaa</DropDownItem>
                            <DropDownItem/>
                            <DropDownItem>aaa</DropDownItem>
                        </DropDownItems>
                    )}
                >
                    <button className="btn btn-default">
                        drop down <span className="caret"/>
                    </button>
                </DropDown>
                
                <DropDown
                    popup={(
                        <DropDownItems>
                            <DropDownItem onClick={this.handleClick}>aaa</DropDownItem>
                            <DropDownItem>aaa</DropDownItem>
                            <DropDownItem>aaa</DropDownItem>
                            <DropDownItem/>
                            <DropDownItem>aaa</DropDownItem>
                        </DropDownItems>
                    )}
                >
                    <button className="btn btn-primary">
                        drop down <span className="caret"/>
                    </button>
                </DropDown>
                
                <DropDown
                    popup={(
                        <DropDownItems>
                            <DropDownItem onClick={this.handleClick}>aaa</DropDownItem>
                            <DropDownItem>aaa</DropDownItem>
                            <DropDownItem>aaa</DropDownItem>
                            <DropDownItem/>
                            <DropDownItem>aaa</DropDownItem>
                        </DropDownItems>
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
                            <DropDownItems>
                                <DropDownItem onClick={this.handleClick}>aaa</DropDownItem>
                                <DropDownItem>aaa</DropDownItem>
                                <DropDownItem>aaa</DropDownItem>
                                <DropDownItem/>
                                <DropDownItem>aaa</DropDownItem>
                            </DropDownItems>
                        )}
                    >
                        <button className="btn btn-default btn-sm">
                            drop down
                        </button>
                    </DropDown>
                </div>
                <div>
                右边对齐
                    <DropDown
                        split
                        right
                        cartClassName="btn-sm"
                        popup={(
                            <DropDownItems>
                                <DropDownItem onClick={this.handleClick}>aaa</DropDownItem>
                                <DropDownItem>aaa</DropDownItem>
                                <DropDownItem>aaa</DropDownItem>
                                <DropDownItem/>
                                <DropDownItem>aaa</DropDownItem>
                            </DropDownItems>
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

::: demo 分裂式
```js
class DropDownWrap2 extends React.Component {
    handleClick() {
        console.log('click');
    }
    
    render() {
        return (
            <div>
                分裂式按钮
                <DropDown
                    split
                    cartClassName="btn-sm"
                    popup={(
                        <DropDownItems>
                            <DropDownItem onClick={this.handleClick}>aaa</DropDownItem>
                            <DropDownItem>aaa</DropDownItem>
                            <DropDownItem>aaa</DropDownItem>
                            <DropDownItem/>
                            <DropDownItem>aaa</DropDownItem>
                        </DropDownItems>
                    )}
                >
                    <button className="btn btn-default btn-sm">
                        drop down
                    </button>
                </DropDown>
            </div>
        );
    }
}
```
```jsx
<DropDownWrap2/>
```
:::

::: demo 其他
```js
class DropDownWrap4 extends React.Component {
    handleClick() {
        console.log('click');
    }
    
    render() {
        return (
            <div>
                第二个选项disabled
                <DropDown
                    split
                    cartClassName="btn-sm"
                    popup={(
                        <DropDownItems>
                            <DropDownItem onClick={this.handleClick}>aaa</DropDownItem>
                            <DropDownItem className="disabled">aaa</DropDownItem>
                            <DropDownItem>aaa</DropDownItem>
                            <DropDownItem/>
                            <DropDownItem>aaa</DropDownItem>
                        </DropDownItems>
                    )}
                >
                    <button className="btn btn-default btn-sm">
                        drop down
                    </button>
                </DropDown>
                选项header
                <DropDown
                    split
                    cartClassName="btn-sm"
                    popup={(
                        <DropDownItems>
                            <DropDownItem className="dropdown-header">我是header</DropDownItem>
                            <DropDownItem onClick={this.handleClick}>aaa</DropDownItem>
                            <DropDownItem className="disabled">aaa</DropDownItem>
                            <DropDownItem>aaa</DropDownItem>
                            <DropDownItem/>
                            <DropDownItem>aaa</DropDownItem>
                        </DropDownItems>
                    )}
                >
                    <button className="btn btn-default btn-sm">
                        drop down
                    </button>
                </DropDown>
            </div>
        );
    }
}
```
```jsx
<DropDownWrap4/>
```
:::

### Props
- `popup (element|isRequired)` 对应的浮层
- `split (bool)` 是否分裂式按钮
- `cartClassName (string)` split true时有效，设置cart的样式

### DropDownItems

用来包裹 DropDownItem

### DropDownItem

如果没有children，则是分割线
