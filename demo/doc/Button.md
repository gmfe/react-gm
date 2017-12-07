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
        return new Promise(resolve => setTimeout(() => resolve('12'), 2000));
    }
    
    render() {
        return (
            <div>
                <h2>Button 没有 loading</h2>
                <Button onClick={this.handleClick} style={{
                    'background': '#7ab155',
                    'borderRadius': '4px',
                    'height': '32px',
                    'width': '120px',
                    'outline': 0
                }}
                >加载更多</Button>
                <h2>Button 只封装了loading (loading 2s)</h2>
                <Button hasLoading onClick={this.handleClick} style={{
                    'background': 'white',
                    'borderRadius': '4px',
                    'height': '32px',
                    'width': '120px',
                    'outline': 0
                }}
                >加载更多</Button>
                <h2>Button 只封装了loading (loading 2s，改变菊花转颜色)</h2>
                <Button hasLoading onClick={this.handleClick} color={'white'} style={{
                    'background': '#1890ff',
                    'borderRadius': '4px',
                    'height': '32px',
                    'width': '120px',
                    'outline': 0
                }}
                >加载更多</Button>
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
