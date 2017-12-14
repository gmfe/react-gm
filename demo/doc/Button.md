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
        this.handleClick2 = ::this.handleClick2;
    }
    
    handleClick() {
        console.log('click');
        return new Promise(resolve => setTimeout(() => resolve('12'),2000));
    }
    
    handleClick2() {
        console.log('click');
        return false;
    }
    
    render() {
        return (
            <div>
                <h2>Button 没有 loading, 回调函数返回 false</h2>
                <Button onClick={this.handleClick2} style={{'background': '#7ab155'}} className='demo-button'>加载更多</Button>
                <h2>Button loading ，回调函数返回一个 Promise ， 改变菊花转颜色</h2>
                <Button key='2' onClick={this.handleClick} iconColor='white' style={{'background': '#1890ff'}} className='demo-button'>加载更多</Button>
                <h2>Button loading , 回调函数返回一个 Promise,  改变菊花转大小和颜色</h2>
                <Button key='1' 
                    onClick={this.handleClick} 
                    iconColor='gray' 
                    iconSize={15}
                    style={{'background': 'white', fontSize: '12px', height: 'auto', padding: '2px 16px'}} 
                    className='demo-button'
                >加载</Button>
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
