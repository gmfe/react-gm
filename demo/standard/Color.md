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
                <div className="item bg-stress"><span>#409d39</span>@gm-color-stress 强调色：模块顶部点缀、导航选中态、功能性按钮</div>
                <div className="item bg-action"><span>#2182CC</span>@gm-color-action 链接、操作文字</div>
                <div className="item bg-first"><span>#333333</span>@gm-color-first 左侧导航、panel标题、页面正文文字</div>
                <div className="item bg-second"><span>#666666</span>@gm-color-second 辅助文字</div>
                <div className="item bg-back" style={{color: '#333333'}}><span>#f5f5f5</span>@gm-color-back 页面、hover背景色等</div>
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
                <div className="item text" style={{fontSize: '14px'}}><span>14px</span>左侧二级导航、tab、panel title等</div>
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
station定义了0，5，10，15三种大小的padding和margin。
一般来说，模块（如panel）之间的距离为15px，按钮为5px。
- `gm-padding-0`， `gm-padding-5`，`gm-padding-10`，`gm-padding-15`
- `gm-padding-left-0`，`gm-padding-left-5`，`gm-padding-left-10`，`gm-padding-left-15`
- `gm-padding-right-0`，`gm-padding-right-5`，`gm-padding-right-10`，`gm-padding-right-15`
- `gm-padding-top-0`，`gm-padding-top-5`，`gm-padding-top-10`，`gm-padding-top-15`
- `gm-padding-bottom-0`，`gm-padding-bottom-5`，`gm-padding-bottom-10`，`gm-padding-bottom-15`
- `gm-margin-0`， `gm-margin-5`，`gm-margin-10`，`gm-margin-15`
- `gm-margin-left-0`，`gm-margin-left-5`，`gm-margin-left-10`，`gm-margin-left-15`
- `gm-margin-right-0`，`gm-margin-right-5`，`gm-margin-right-10`，`gm-margin-right-15`
- `gm-margin-top-0`，`gm-margin-top-5`，`gm-margin-top-10`，`gm-margin-top-15`
- `gm-margin-bottom-0`，`gm-margin-bottom-5`，`gm-margin-bottom-10`，`gm-margin-bottom-15`
