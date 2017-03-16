---
imports:
    import{DateRangePicker} from '../../src/index';
---
## DateRangePicker

::: demo
```js
class DaterangepickerWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            begin: new Date(),
            end: new Date()
        };
        this.handleChange = ::this.handleChange;
    }
    
    render() {
        return (
            <div>
                可用
                <DateRangePicker
                    begin={this.state.begin}
                    end={this.state.end}
                    onChange={this.handleChange}
                    inputClassName="form-control input-sm"
                    endProps={{
                        min: this.state.begin
                    }}
                />
                <br/>
                disabled
                <DateRangePicker
                    begin={this.state.begin}
                    end={this.state.end}
                    onChange={this.handleChange}
                    disabled={true}
                    inputClassName="form-control input-sm"
                />
            </div>
        );
    }
    
    handleChange(begin, end) {
        console.log(begin, end);
        this.setState({
            begin: begin,
            end: end
        });
    }
}
```
```jsx
<DaterangepickerWrap/>
```
:::

::: demo 不传begin end
```js
class DaterangepickerWrap2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            begin: null,
            end: null
        };
        this.handleChange = ::this.handleChange;
    }
    
    render() {
        return (
            <div>
                <DateRangePicker
                    begin={this.state.begin}
                    end={this.state.end}
                    onChange={this.handleChange}
                    inputClassName="form-control input-sm"
                />
            </div>
        );
    }
    
    handleChange(begin, end) {
        console.log(begin, end);
        this.setState({
            begin: begin,
            end: end
        });
    }
}
```
```jsx
<DaterangepickerWrap2/>
```
:::

::: demo 自定义value的显示
```js
class DaterangepickerWrap3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            begin: new Date(),
            end: new Date()
        };
        this.handleChange = ::this.handleChange;
    }

    render() {
        return (
            <div>
                <DateRangePicker
                    begin={this.state.begin}
                    end={this.state.end}
                    onChange={this.handleChange}
                    inputClassName="form-control input-sm"
                    beginRenderInputValue={begin => begin.getFullYear() + '年'}
                />
            </div>
        );
    }

    handleChange(begin, end) {
        console.log(begin, end);
        this.setState({
            begin: begin,
            end: end
        });
    }
}
```
```jsx
<DaterangepickerWrap3/>
```
:::

### Props
和`DatePicker`没多大区别，`date` 换成 `begin` 和 `end` 而已。
- `begin (object)`
- `end (object)`
- `onChange (func)`
- `inputClassName (string)`
- `disabled (bool)` 不可用
- `className (string)`
- `beginProps (shape)` 结构是DatePicker的 {'{min max disabledDate}'}
- `endProps (shape)` 同上
- `beginRenderInputValue (shape)` input框的value
- `endRenderInputValue (shape)` 同上
