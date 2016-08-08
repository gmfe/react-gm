日期选择

![](http://7xlnio.com1.z0.glb.clouddn.com/16-7-29/77667212.jpg)

## 组件介绍

### DatePicker

只能选择，不能编辑

- `date (object)` Date对象
- `onChange (func|isRequired)` 选择后回调，参数是Date对象
- `inputClassName (string)` 自定义input的样子
- `disabled (bool)` 不可用
- `className (string)`

```jsx
<DatePicker 
    date={this.state.date}
    placeholder="adfasdf"
    onChange={this.handleChange}
    inputClassName="form-control input-sm"
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

```jsx
<DateRangePicker 
    begin={this.state.begin}
    end={this.state.end}
    onChange={this.handleChange}
    inputClassName="form-control input-sm"
/>
```