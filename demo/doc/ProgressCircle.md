---
imports:
    import {ProgressCircle} from '../../src/index';
---
## ProgressCircle

环形进度条

::: demo 环形进度条
```js
class ProgressCircleWrap extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            percentage: 0
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({ percentage: 80 })
        }, 0)   
    }
    render() {
        return (
            <div>
                <ProgressCircle percentage={this.state.percentage} showText={false} />

                <ProgressCircle percentage={this.state.percentage} status="exception" showText={false} />
            
                <ProgressCircle percentage={this.state.percentage} textPosition="right" />

                <ProgressCircle percentage={this.state.percentage} textPosition="left" text={this.state.percentage + '/100'} />

                <ProgressCircle percentage={this.state.percentage} size="100" />

                <ProgressCircle percentage={this.state.percentage} size="100" lineWidth={20} />

                <ProgressCircle percentage={this.state.percentage} size="100" lineWidth={20} progressColor="orange" />

                <ProgressCircle percentage={this.state.percentage} size="100" lineWidth={20} progressColor="orange" bgColor="gray" />

            </div>
        );
    }
}
```

```jsx
<ProgressCircleWrap/>
```

:::

### Props

- `percentage (number|isRequire)` 进度条百分比
- `text（string）` 自定义百分比文案
- `showText (bool)` 是否显示文案
- `textPosition (string)` 文案显示位置，可取值 `left`/`center`/`right` 
- `status (string)` 进度条状态，值 `success` or `exception`
- `size (string|number)` 图形尺寸，默认 `40`
- `lineWidth (string|number)` 进度条描边宽度，默认 `60` 
- `progressColor (string)` 自定义进度条颜色