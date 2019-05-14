---
imports:
    import{ DateRangePickerV2 } from '../../src/index';
    import moment from 'moment';
---
## DateRangePickerV2

::: demo 一般使用方式
```js
class Demo extends React.Component {
  state = {
    begin: new Date(),
    end: new Date()
  }
  
  render () {
    const { begin, end } = this.state
    return <DateRangePickerV2 begin={begin} end={end}
        onChange={(b, e) => {
          console.log(b, e) 
          this.setState({begin: b, end: e})
        }}
    />
  }
}
```
```jsx
<Demo/>

```
:::

::: demo 自定义显示
```js
class Demo2 extends React.Component {
  state = {
    begin: new Date(),
    end: new Date()
  }
  
  render () {
    const { begin, end } = this.state
    return <DateRangePickerV2 begin={begin} end={end} 
            onChange={(b, e) => {
              console.log(b, e) 
              this.setState({begin: b, end: e})
            }}
    >
      {(b, e) => `${moment(b).format('YYYY/MM/DD')}  至  ${moment(e).format('YYYY/MM/DD')}`}
    </DateRangePickerV2>
  }
}
```
```jsx
<Demo2/>

```
:::

::: demo 可以清除 和 disabled
```js
class Demo3 extends React.Component {
  state = {
    begin: new Date(),
    end: new Date()
  }
  
  render () {
    const { begin, end } = this.state
    return <DateRangePickerV2 begin={begin} end={end} canClear disabled
        onChange={(b, e) => {
          console.log(b, e) 
          this.setState({begin: b, end: e})
        }}
    />
  }
}
```
```jsx
<Demo3/>

```
:::

::: demo 日期为null
```js
class Demo4 extends React.Component {
  state = {
    begin: null,
    end: null
  }
  
  render () {
    const { begin, end } = this.state
    return <DateRangePickerV2 begin={begin} end={end}
        onChange={(b, e) => {
          console.log(b, e) 
          this.setState({begin: b, end: e})
        }}
    />
  }
}
```
```jsx
<Demo4/>

```
:::

### Props
和`DateRangePicker`区别不大
- `begin (object)` 开始日期
- `end (object)` 结束日期
- `beginProps (shape)` 结构是DatePicker的 {'{min max disabledDate}'}
- `endProps (shape)` 同上
- `children (func)` 自定义日期渲染 func(开始日期, 结束日期)
- `onChange (func)` 日期变化 func(开始日期, 结束日期)
- `disabled (bool)` 不可用
- `canClear (bool)` 是否可以清除所选date
- `beginPlaceholder (string)` 开始日期占位符: 默认为'开始日期'
- `endPlaceholder (string)` 结束日期占位符: 默认为'结束日期'
- `className (string)` 
- `style (object)` 
