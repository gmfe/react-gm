---
imports:
    import {FlipNumber} from '../../src/index';
---
## FlipNumber

FlipNumber

::: demo
```js
class FlipNumberWrap extends React.Component {
    constructor (props) {
        super(props)
        this.state= {
            to: 0,
            from: 0
        }
    }
    
    componentDidMount() {
        setTimeout(() => this.setState({to: 709394, from: 234.2343}), 1300)
    }
    
    render() {
        return (
            <div>
                <FlipNumber useGroup delay={1000} decimal={2} from={this.state.from} to={this.state.to} className='gm-text-red gm-font-20'/>
            </div>
        );
    }
}
```

```jsx
<FlipNumberWrap/>
```

:::

### Props
- `to(number | isRequired)`: 最后要显示的数字
- `from(number)`: 滚动的起始数，默认为 0
- `delay(number)`: 延迟，默认为 0
- `duration(number)`: 滚动时长，默认为 1500 毫秒
- `easeFn(func)`: 缓动函数，控制滚动的加速度，默认起末慢，中间快
- `individually(bool)`: 是否逐个数字滚动, 默认 true
- `decimal(number)`: 小数点个数，默认无小数点
- `useGroup(bool)`: 是否启用大数逗号分组