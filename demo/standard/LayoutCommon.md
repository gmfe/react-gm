---
imports:
    import {QuickPanel, QuickDesc, Sheet, SheetColumn} from '../../src/index';
---

## 布局规范
参见bootstrap的[栅格系统](http://getbootstrap.com/css/#grid)
<br/>
<br/>

## 常用布局
::: demo 常用布局-QuickPanel

```js
const list= [{
    id: 3,
    name: '小明',
    age: '10'
}, {
    id: 4,
    name: '小红',
    age: '15',
    _gm_select: true
}, {
   id: 5,
   name: '小蓝',
   age: '20'
}];

class PanelWrap extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <QuickPanel title={`学生列表${list.length}`}>
                <Sheet list={list}>
                    <SheetColumn field="id" name="id"/>
                    <SheetColumn field="name" name="名字"/>
                    <SheetColumn field="age" name="年龄"/>
                </Sheet>
            </QuickPanel>
        );
    }
}
```
```jsx
<PanelWrap/>
```
:::
<br/>
<br/>

::: demo 常用布局-QuickDesc

```js
class QuickDescWrap extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const headerLeft = "我是标题",
        headerRight = <div className="gm-padding-15">
            <div>描述1：1234567890</div>
            <div>描述2：asdfghjkl</div>
        </div>;
        
        return (
            <QuickDesc
                left={headerLeft}
                right={headerRight}
                leftFlex={1}
                rightFlex={4}
            >
                <div className="gm-padding-15">我是内容...</div>
            </QuickDesc>
        );
    }
}
```
```jsx
<QuickDescWrap/>
```
:::