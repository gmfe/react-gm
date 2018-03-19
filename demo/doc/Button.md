---
imports:
    import {Button} from '../../src/index';
---
## Button

Button Loading

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
