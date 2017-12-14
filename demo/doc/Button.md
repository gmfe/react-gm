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
    }
    
    handleClick() {
        console.log('click');
        return new Promise(resolve => setTimeout(() => resolve('12'),2000));
    }
    
    render() {
        return (
            <div>
                <h2>Button 没有 loading</h2>
                <Button onClick={this.handleClick} style={{'background': '#7ab155'}} className='demo-button'>加载更多</Button>
                <h2>Button 只封装了loading (loading 2s，改变菊花转颜色)</h2>
                <Button hasLoading key='2' onClick={this.handleClick} iconColor='white' style={{'background': '#1890ff'}} className='demo-button'>加载更多</Button>
                <h2>Button 只封装了loading (loading 2s， 改变菊花转大小)</h2>
                <Button hasLoading key='1' 
                    onClick={this.handleClick} 
                    iconColor='gray' 
                    style={{'background': 'white', fontSize: '12px', height: 'auto', padding: '2px 16px'}} 
                    className='demo-button'
                    iconSize={15}
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
