---
imports:
    import {TimeSpan, TimeSpanPicker} from '../../src/index';
    import moment from 'moment';
---
## TimeSpan

时间段选择

::: demo
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
            <div className="doc-time-span-container">
                <div>
                    <h5>不设置时间最大值，禁用某时间段点击</h5>
                    <TimeSpan
                        max={null}
                        disabledSpan={spanMoment => spanMoment.isSameOrAfter(moment('11:00', 'HH:mm')) && spanMoment.isSameOrBefore(moment('18:30', 'HH:mm'))}
                        selected={this.state.date}
                        onSelect={this.handleChange}
                    />
                </div>
                <div>
                    <h5>设置最大时间值为 20:00</h5>
                    <TimeSpan
                        max={moment().hour(20).minute(0)}
                        selected={this.state.date}
                        onSelect={this.handleChange}
                    />
                </div>
                <div>
                    <h5>设置时间跨度为 1 小时（默认 30 分钟）</h5>
                    <TimeSpan
                        max={moment().hour(20).minute(0)}
                        span={60 * 60 * 1000}
                        render={value => moment(value).format('HH')}
                        selected={this.state.date}
                        onSelect={this.handleChange}
                    />
                </div>
                <div>
                    <div>
                        <h5>时间选择</h5>
                        <TimeSpanPicker
                            date={this.state.date}
                            onChange={this.handleChange}
                            disabledSpan={spanMoment => spanMoment.isSameOrAfter(moment('11:00', 'HH:mm')) && spanMoment.isSameOrBefore(moment('18:30', 'HH:mm'))}
                        />
                    </div>
                    <div>
                        <h5>禁用</h5> 
                        <TimeSpanPicker
                           disabled={true}
                           date={this.state.date}
                           onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <h5>时间选择（不显示输入框）</h5> 
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
- `disabledSpan (func)` 同
- `span (number)` 同
- `date (object)` 同 TimeSpan selected
- `render (func)` 同
- `onChange (func)` 同 TimeSpan onSelect
- `inputClassName (string)` 自定义input的className
- `disabled (bool)` 不可编辑
