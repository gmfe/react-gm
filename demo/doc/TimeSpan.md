---
imports:
    import {TimeSpan, TimeSpanPicker} from '../../src/index';
    import moment from 'moment';
---
## TimeSpan

时间段选择

::: demo demo
```js
class TimeSpanWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: moment().startOf('day').toDate()
        };
        this.handleChange = ::this.handleChange;
    }
    
    handleChange(date) {
        console.log(date);
        this.setState({
            date
        });
    }
    
    render() {
        return (
            <div>
                <div>
                    <TimeSpan
                        max={null}
                        selected={this.state.date}
                        onSelect={this.handleChange}
                    />
                    <TimeSpan
                        max={moment().hour(20).minute(0)}
                        selected={this.state.date}
                        onSelect={this.handleChange}
                    />
                    <TimeSpan
                        max={moment().hour(20).minute(0)}
                        span={60 * 60 * 1000}
                        render={value => moment(value).format('HH')}
                        selected={this.state.date}
                        onSelect={this.handleChange}
                    />
                </div>
                <div>
                    <TimeSpanPicker
                        date={this.state.date}
                        onChange={this.handleChange}
                    />
                    <TimeSpanPicker
                        disabled={true}
                        date={this.state.date}
                        onChange={this.handleChange}
                    />
                    <TimeSpanPicker
                        date={this.state.date}
                        onChange={this.handleChange}
                    >
                        <span>
                        {this.state.date ? moment(this.state.date).format('HH:mm') : '请点击选择'}
                        </span>
                    </TimeSpanPicker>
                </div>
            </div>
        );
    }
}
```
```jsx
<TimeSpanWrap/>
```
:::


### Props
- `min (object)` Date对象 默认一天的开始
- `max (object)` Date对象 默认一天的结束
- `span (number)` 时间跨度，默认是30分钟，单位ms
- `selected (object)` Date对象，选中的时间
- `render (func)` 渲染出来的时间文本，默认是HH:mm
- `onSelect (func)` 选择回调，参数是Date对象

### TimeSpanPicker

- `min (object)` 同
- `max (object)` 同
- `span (number)` 同
- `date (object)` 同 TimeSpan selected
- `render (func)` 同
- `onChange (func)` 同 TimeSpan onSelect
- `inputClassName (string)` 自定义input的className
- `disabled (bool)` 不可编辑
