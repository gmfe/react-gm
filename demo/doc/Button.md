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
        this.handleClick2 = ::this.handleClick2;
    }
    
    handleClick() {
        console.log('click');
        return false;
    }
    
    handleClick1() {
        console.log('click');
        return new Promise(resolve => setTimeout(() => resolve('12'),2000));
    }
        
        
    handleClick2() {
        console.log('click');
        return new Promise(resolve => setTimeout(() => resolve('12'),2000));
    }          
    
    render() {
        return (
            <div>
                <h2>Button 没有 loading, 回调函数返回 false</h2>
                <Button onClick={this.handleClick} style={{'background': '#7ab155'}} className='demo-button'>加载更多</Button>
                <h2>Button loading ，回调函数返回一个 Promise</h2>
                <Button key='1' onClick={this.handleClick1} style={{'background': '#20a0ff', color: 'white'}} className='demo-button'>加载更多</Button>
                <br/>
                <Button key='2' onClick={this.handleClick2} style={{'background': 'white', marginTop: '4px'}} className='demo-button'>加载更多</Button>
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
- `hasLoading(bool)`  是否显示 loadding
- `onClick(func)` 点击回调函数
