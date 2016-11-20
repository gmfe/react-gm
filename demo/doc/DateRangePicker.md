---
imports:
    import{DateRangePicker} from '../../src/index';
---
## DateRangePicker

::: demo demo
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
                <DateRangePicker
                    begin={this.state.begin}
                    end={this.state.end}
                    onChange={this.handleChange}
                    inputClassName="form-control input-sm"
                    endProps={{
                        min: this.state.begin
                    }}
                />

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

### Props
和`DatePicker`没多大区别，`date` 换成 `begin` 和 `end` 而已。
- `begin (object|isRequired)`
- `end (object|isRequired)`
- `onChange (func|isRequired)`
- `inputClassName (string)`
- `disabled (bool)` 不可用
- `className (string)`
- `beginProps (shape)` 结构是DatePicker的 {'{min max disabledDate}'}
- `endProps (shape)` 同上