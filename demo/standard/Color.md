---
imports:
    import {Label} from 'react-bootstrap';
---
## 颜色规范

::: demo Color

```js
class ColorWrap extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="demo-box">
                <div className="item" style={{backgroundColor: '#fb9447'}}><span>#fb9447</span>@gm-color-stress 强调色：模块顶部点缀、导航选中态、功能性按钮</div>
                <div className="item" style={{backgroundColor: '#29a7e4'}}><span>#29a7e4</span>@gm-color-action 链接、操作文字</div>
                <div className="item" style={{backgroundColor: '#333333'}}><span>#333333</span>@gm-color-primary 左侧导航、panel标题、页面正文文字</div>
                <div className="item" style={{backgroundColor: '#666666'}}><span>#666666</span>@gm-color-second 辅助文字</div>
                <div className="item" style={{backgroundColor: '#f5f5f5', color: '#333333'}}><span>#f5f5f5</span>@gm-color-back 页面、hover背景色等</div>
            </div>
        );
    }
}
```
```jsx
<ColorWrap/>
```
:::

## 字体规范
::: demo Font

```js
class FontWrap extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="demo-box">
                <div className="item text" style={{fontSize: '16px'}}><span>16px</span>顶部一级导航</div>
                <div className="item text" style={{fontSize: '14px'}}><span>14px</span>左侧二级导航</div>
                <div className="item text" style={{fontSize: '12px'}}><span>12px</span>左侧二级导航、表格等</div>
            </div>
        );
    }
}
```
```jsx
<FontWrap/>
```
:::

## 边距规范
station定义了5，10，15三种大小的padding和margin。
- `gm-padding0`， `gm-padding5`，`gm-padding10`，`gm-padding15`
- `gm-paddingLeft5`，`gm-paddingLeft10`，`gm-paddingLeft15`
- `gm-paddingRight5`，`gm-paddingRight10`，`gm-paddingRight15`
- `gm-margin0`， `gm-margin5`，`gm-margin10`，`gm-margin15`
- `gm-marginLeft5`，`gm-marginLeft10`，`gm-marginLeft15`
- `gm-marginRight5`，`gm-marginRight10`，`gm-marginRight15`
