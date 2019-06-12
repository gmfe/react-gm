---
imports:
    import {Button} from '../../src/index';
---
## Button
背景: `原生button`在处理异步事件的时候,容易造成重复点击. 使用`Button`有效解决该类问题,还带有loading哦

::: demo Button
```js
class ButtonWrap extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = ::this.handleClick;
        this.handleClick1 = ::this.handleClick1;
    }
    
    handleClick() {
        console.log('click');
        return false;
    }
    
    handleClick1() {
        console.log('click');
        return new Promise(resolve => setTimeout(() => resolve('12'),2000));
    }     
    
    render() {
        return (
            <div>
                <h2>Button 没有 loading, 回调函数返回 false</h2>
                <Button onClick={this.handleClick} className='btn btn-default'>加载更多</Button>
                <h2>Button loading ，回调函数返回一个 Promise</h2>
                <Button onClick={this.handleClick1} className='btn btn-default'>加载更多</Button>
            </div>
        );
    }
}
```

```jsx
<ButtonWrap/>
```

:::

### Props
- `onClick(func)` 点击回调函数
- `...rest`
