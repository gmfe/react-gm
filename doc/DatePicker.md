日期选择

![](http://7xlnio.com1.z0.glb.clouddn.com/16-7-29/77667212.jpg)

## 组件介绍

### DatePicker

- date (object) Date对象
- onChange (func|isRequired) 选择后回调，参数是Date对象
- inputClassName 自定义input的样子
- target (func) 触发日期选择的目标，返回一个ref

```jsx
<DatePicker date={this.state.date}
            placeholder="adfasdf"
            onChange={this.handleChange}
            inputClassName="form-control input-sm"/>
```

如果不想是一个输入框，你还可以这样

![](http://7xlnio.com1.z0.glb.clouddn.com/16-7-29/56544845.jpg)

```jsx
<DatePicker date={this.state.date} 
            onChange={this.handleChange} 
            target={() => this.refs.target}>
    <span ref="target">
    {this.state.date ? moment(this.state.date).format('YYYY-MM-DD') : '请点击选择'}
    </span>
</DatePicker>
```

### DaterangePicker

没多大区别，date 缓存 begin 和 end 而已。

- begin
- end
- onChange
- inputClassName
- target