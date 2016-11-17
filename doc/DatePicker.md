日期选择

![](http://7xlnio.com1.z0.glb.clouddn.com/16-7-29/77667212.jpg)

## 组件介绍

### DatePicker

只能选择，不能编辑

- `date (object)` Date对象
- `onChange (func|isRequired)` 选择后回调，参数是Date对象
- `inputClassName (string)` 自定义input的样子
- `placeholder (string)`
- `disabled (bool)` 是否不可用
- `className (string)`
- `disabledDate (func)` 提供date参数，返回true or false
- `min (object)` 一个Date对象，最小日期
- `max (object)` 一个Date对象，最大日期

```jsx
// 一般
<DatePicker 
    date={this.state.date}
    placeholder="adfasdf"
    onChange={this.handleChange}
    inputClassName="form-control input-sm"
/>

// 不可用
<DatePicker
    date={this.state.date}
    placeholder="adfasdf"
    disabled={true}
    onChange={this.handleChange}
    inputClassName="form-control input-sm"
/>

// 日期范围
<DatePicker
    date={this.state.date}
    placeholder="非周五"
    onChange={this.handleChange}
    inputClassName="form-control input-sm"
    disabledDate={m => {
        return moment(m).get('day') === 5;
    }}
/>
```

如果不想是一个输入框，你还可以这样

![](http://7xlnio.com1.z0.glb.clouddn.com/16-7-29/56544845.jpg)

```jsx
<DatePicker 
    date={this.state.date} 
    onChange={this.handleChange} 
>
    <span>
    {this.state.date ? moment(this.state.date).format('YYYY-MM-DD') : '请点击选择'}
    </span>
</DatePicker>
```

### DaterangePicker

没多大区别，`date` 换成 `begin` 和 `end` 而已。

- `begin (object|isRequired)`
- `end (object|isRequired)`
- `onChange (func|isRequired)`
- `inputClassName (string)`
- `disabled (bool)` 不可用
- `className (string)`
- `beginProps (shape)` 结构是DatePicker的 {min max disabledDate}
- `endProps (shape)` 同上

```jsx
<DateRangePicker
    begin={this.state.begin}
    end={this.state.end}
    onChange={this.handleChange}
    inputClassName="form-control input-sm"
    endProps={{
        min: this.state.begin
    }}
/>
```