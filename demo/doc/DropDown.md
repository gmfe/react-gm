---
imports:
    import {DropDown, DropDownItems, DropDownItem} from '../../src/index';
---
## DropDown

下拉框

::: demo DropDown 色系 default primary success info warning danger
```js
class DropDownWrap extends React.Component {
    handleClick() {
        console.log('click');
    }
    
    render() {
        return (
            <div>
                <div>普通，要自己加caret</div>
                默认
                <DropDown
                    popup={(
                        <DropDownItems>
                            <DropDownItem onClick={this.handleClick}>aaa</DropDownItem>
                            <DropDownItem>aaa</DropDownItem>
                        </DropDownItems>
                    )}
                >
                    <button className="btn btn-default">drop down <span className="caret"/></button>
                </DropDown>
                主色
                <DropDown
                    popup={(
                        <DropDownItems>
                            <DropDownItem onClick={this.handleClick}>aaa</DropDownItem>
                            <DropDownItem>aaa</DropDownItem>
                        </DropDownItems>
                    )}
                >
                    <button className="btn btn-primary">drop down <span className="caret"/></button>
                </DropDown>
                
                <div>分裂式按钮</div>
                默认
                <DropDown
                    split
                    cartClassName="btn-default"
                    popup={(
                        <DropDownItems>
                            <DropDownItem onClick={this.handleClick}>aaa</DropDownItem>
                            <DropDownItem>aaa</DropDownItem>
                        </DropDownItems>
                    )}
                >
                    <button className="btn btn-default">drop down</button>
                </DropDown>
                主色
                <DropDown
                    split
                    cartClassName="btn-primary"
                    popup={(
                        <DropDownItems>
                            <DropDownItem onClick={this.handleClick}>aaa</DropDownItem>
                            <DropDownItem>aaa</DropDownItem>
                        </DropDownItems>
                    )}
                >
                    <button className="btn btn-primary">drop down</button>
                </DropDown>
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
class DropDownWrap1 extends React.Component {
    handleClick() {
        console.log('click');
    }
    
    render() {
        return (
            <div>           
                大 lg
                <DropDown
                    popup={(
                        <DropDownItems>
                            <DropDownItem onClick={this.handleClick}>aaa</DropDownItem>
                            <DropDownItem>aaa</DropDownItem>
                        </DropDownItems>
                    )}
                >
                    <button className="btn btn-primary">drop down <span className="caret"/></button>
                </DropDown>
                小 sm
                <DropDown
                    popup={(
                        <DropDownItems>
                            <DropDownItem onClick={this.handleClick}>aaa</DropDownItem>
                            <DropDownItem>aaa</DropDownItem>
                        </DropDownItems>
                    )}
                >
                    <button className="btn btn-primary">drop down <span className="caret"/></button>
                </DropDown>
                超小 xs
                <DropDown
                    split
                    cartClassName="btn-xs"
                    popup={(
                        <DropDownItems>
                            <DropDownItem onClick={this.handleClick}>aaa</DropDownItem>
                            <DropDownItem>aaa</DropDownItem>
                        </DropDownItems>
                    )}
                >
                    <button className="btn btn-default btn-xs">drop down</button>
                </DropDown>
            </div>
        );
    }
}
```
```jsx
<DropDownWrap1/>
```
:::

::: demo 对齐
```js
class DropDownWrap3 extends React.Component {
    handleClick() {
        console.log('click');
    }
    
    render() {
        return (
            <div>
                右边对齐
                <DropDown
                    right
                    popup={(
                        <DropDownItems>
                            <DropDownItem onClick={this.handleClick}>aaa</DropDownItem>
                            <DropDownItem>aaa</DropDownItem>
                        </DropDownItems>
                    )}
                >
                    <button className="btn btn-primary">drop down <span className="caret"/></button>
                </DropDown>
                <DropDown
                    split
                    right
                    popup={(
                        <DropDownItems>
                            <DropDownItem onClick={this.handleClick}>aaa</DropDownItem>
                            <DropDownItem>aaa</DropDownItem>
                        </DropDownItems>
                    )}
                >
                    <button className="btn btn-default">drop down</button>
                </DropDown>
            </div>
        );
    }
}
```
```jsx
<DropDownWrap3/>
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
                选项分割
                <DropDown
                    popup={(
                        <DropDownItems>
                            <DropDownItem onClick={this.handleClick}>aaa</DropDownItem>
                            <DropDownItem>aaa</DropDownItem>
                            <DropDownItem/>
                            <DropDownItem>aaa</DropDownItem>
                        </DropDownItems>
                    )}
                >
                    <button className="btn btn-default">drop down <span className="caret"/></button>
                </DropDown>
                第二个选项disabled
                <DropDown
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
                    <button className="btn btn-default">drop down <span className="caret"/></button>
                </DropDown>
                选项header
                <DropDown
                    popup={(
                        <DropDownItems>
                            <DropDownItem className="dropdown-header">我是header</DropDownItem>
                            <DropDownItem onClick={this.handleClick}>aaa</DropDownItem>
                            <DropDownItem className="disabled">aaa</DropDownItem>
                            <DropDownItem>aaa</DropDownItem>
                            <DropDownItem className="dropdown-header">我是header</DropDownItem>
                            <DropDownItem>aaa</DropDownItem>
                        </DropDownItems>
                    )}
                >
                    <button className="btn btn-default">drop down <span className="caret"/></button>
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
