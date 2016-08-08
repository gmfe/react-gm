时间段选择

![](http://7xlnio.com1.z0.glb.clouddn.com/16-7-31/56376131.jpg)

## 组件介绍

### TimeSpan

- `min (object)` Date对象 默认一天的开始
- `max (object)` Date对象 默认一天的结束
- `span (number)` 时间跨度，默认是30分钟，单位ms
- `selected (object)` Date对象，选中的时间
- `render (func)` 渲染出来的时间文本，默认是HH:mm
- `onSelect (func)` 选择回调，参数是Date对象

```jsx
<TimeSpan max={moment().hour(20).minute(0)}
          selected={this.state.date}
          onSelect={this.handleChange}/>
```

单独对Hour做选择

![](http://7xlnio.com1.z0.glb.clouddn.com/16-7-31/11873666.jpg)

```jsx
<TimeSpan max={moment().hour(20).minute(0)}
          span={60 * 60 * 1000}
          render={value => moment(value).format('HH')}
          selected={this.state.date}
          onSelect={this.handleChange}/>
```

### TimeSpanPicker

- `min (object)` 同
- `max (object)` 同
- `span (number)` 同
- `date (object)` 同 TimeSpan selected
- `render (func)` 同
- `onChange (func)` 同 TimeSpan onSelect
- `inputClassName (string)` 自定义input的className
- `disabled (bool)` 不可编辑

```jsx
<TimeSpanPicker date={this.state.date}
                onChange={this.handleChange}/>
```

如果不想是一个输入框，你还可以这样

![](http://7xlnio.com1.z0.glb.clouddn.com/16-7-29/12665748.jpg)

```jsx
<TimeSpanPicker
    date={this.state.date}
    onChange={this.handleChange}>
    <span>
        {this.state.date ? moment(this.state.date).format('HH:mm') : '请点击选择'}
    </span>
</TimeSpanPicker>
```