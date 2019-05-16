---
imports:
    import {Calendar, Flex} from '../../src/index';
    import moment from 'moment';
---
## Calendar

日历组件

::: demo 一般
```js
class Calendar1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        };
        this.handleSelect = ::this.handleSelect;
    }
    
    render() {
        return (
            <Calendar selected={this.state.selected} onSelect={this.handleSelect}/>
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
```jsx
<Calendar1/>
```
:::

::: demo 带 min max
```js
class Calendar2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        };
        this.handleSelect = ::this.handleSelect;
    }
    
    render() {
        return (
            <Calendar
                selected={this.state.selected}
                onSelect={this.handleSelect}
                min={moment().toDate()}
                max={moment().add(10, 'd').toDate()}
            />
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
```jsx
<Calendar2/>
```
:::

::: demo disabledDate 自定义日期是否可用。
```js
class Calendar3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        };
        this.handleSelect = ::this.handleSelect;
    }
    
    render() {
        return (
            <Calendar
                selected={this.state.selected}
                onSelect={this.handleSelect}
                disabledDate={d => {
                    return moment(d).get('day') === 5;
                }}
            />
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
```jsx
<Calendar3/>
```
:::


### Props

- `selected (object)` 一个Date对象
- `onSelect (func)` 回调，提供已选日期回来
- `disabledDate (func)` 提供date参数，返回true or false。 有此属性min max无效。
- `min (object)` 一个Date对象，最小日期
- `max (object)` 一个Date对象，最大日期
