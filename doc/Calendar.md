日历组件

![](http://7xlnio.com1.z0.glb.clouddn.com/16-7-29/46885177.jpg)

## 组件介绍

### Calendar

- selected (object) 一个Date对象
- onSelect (func) 回调，提供已选对象回来

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
            <div>
                <Calendar selected={this.state.selected} onSelect={this.handleSelect}/>
            </div>
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