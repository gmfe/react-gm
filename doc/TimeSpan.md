时间段选择

![](http://7xlnio.com1.z0.glb.clouddn.com/16-7-29/51587400.jpg)

## 组件介绍

### TimeSpan

- min (object) Date对象 默认一天的开始
- max (object) Date对象 默认一天的结束
- span (number) 时间跨度，默认是30分钟
- selected (object) Date对象，选中的时间
- render (func) 渲染出来的时间文本，默认是HH:mm
- onSelect (func) 选择回调，参数是Date对象

```jsx
<TimeSpan max={moment().hour(20).minute(0)}
          selected={this.state.date}
          onSelect={this.handleChange}/>
```

单独对Hour做选择

```jsx
<TimeSpan max={moment().hour(20).minute(0)}
          span={60 * 60 * 1000}
          render={value => moment(value).format('HH')}
          selected={this.state.date}
          onSelect={this.handleChange}/>
```

### TimeSpanPicker

- min 同
- max 同
- span 同
- date 同
- render 同
- onChange 同 TimeSpan onSelect
- inputClassName (string) 自定义input的className
- target (func) 触发时间选择的目标，返回一个ref

```jsx
<TimeSpanPicker date={this.state.date}
                onChange={this.handleChange}/>
```

如果不想是一个输入框，你还可以这样

![](http://7xlnio.com1.z0.glb.clouddn.com/16-7-29/12665748.jpg)

```jsx
<TimeSpanPicker
    date={this.state.date}
    target={() => this.refs.target}
    onChange={this.handleChange}>
    <span ref="target">
        {this.state.date ? moment(this.state.date).format('HH:mm') : '请点击选择'}
    </span>
</TimeSpanPicker>
```