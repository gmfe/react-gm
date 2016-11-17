日历组件

![](http://7xlnio.com1.z0.glb.clouddn.com/16-7-29/46885177.jpg)

## 组件介绍

### Calendar

- `selected (object)` 一个Date对象
- `onSelect (func)` 回调，提供已选日期回来
- `disabledDate (func)` 提供date参数，返回true or false。 有此属性min max无效。
- `min (object)` 一个Date对象，最小日期
- `max (object)` 一个Date对象，最大日期


```jsx
class CalendarWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        };
        this.handleSelect = ::this.handleSelect;
    }

    render() {
        return (
            <Flex>
                <div>
                    <div>一般情况</div>
                    <Calendar selected={this.state.selected} onSelect={this.handleSelect}/>
                </div>
                <div>
                    <div>带min max</div>
                    <Calendar
                        selected={this.state.selected}
                        onSelect={this.handleSelect}
                        min={moment().toDate()}
                        max={moment().add(10, 'd').toDate()}
                    />
                </div>
                <div>
                    <div>自定义日期是否可用 disabledDate</div>
                    <Calendar
                        selected={this.state.selected}
                        onSelect={this.handleSelect}
                        disabledDate={d => {
                            return d < new Date();
                        }}
                    />
                </div>
            </Flex>
        );
    }

    handleSelect(date) {
        this.setState({
            selected: date
        });
        console.log(arguments);
    }
}
```