---
imports:
    import {Sheet, SheetColumn, Flex} from '../../src/index';
---
## SheetColumn

SheetColumn的顺序决定table列的顺序

::: demo 自定义
```js
const list= [{
    id: 3,
    name: '小明',
    age: '10'
}, {
    id: 4,
    name: '小红',
    age: '15',
    _gm_select: true
}, {
   id: 5,
   name: '小蓝',
   age: '20'
}];
```
```jsx
<Sheet list={list}>
    <SheetColumn field="id" name="id"/>
    <SheetColumn field="name" name={<div>1换行<br/>2</div>}/>
    <SheetColumn field="age" name="年龄" style={{width: '100px', backgroundColor: 'red'}}/>
    {/*可以自定义显示，children传入一个func，func提供当前数据值，返回要显示的结果*/}
    <SheetColumn field="name" name="name">
        {value => '你好 ' + value}
    </SheetColumn>
    {/*不止文本，可以返回任何东西。 可交互的input啊，button啊等*/}
    <SheetColumn field="name" name="name">
        {value => <strong>你好 {value}</strong>}
    </SheetColumn>
    {/*func第二个参数提供当前数据的索引，通过索引你可以找到当前的数据*/}
    <SheetColumn field="name" name="name">
        {(value, i) => <strong>你好 {value}，你的id是 {list[i].id}</strong>}
    </SheetColumn>
    {/*field你也可以乱来，你喜欢*/}
    <SheetColumn field="asfafasfas" name="field乱来">
        {(value, i) => <strong>你好 {list[i].name}，你的id是 {list[i].id}</strong>}
    </SheetColumn>
</Sheet>
```
:::

### Props

- `field (string|isRequired)` 某列读取数据的字段名
- `name (string|element|isRequired)` 某列表头的名字
- `children (func)` 返回任意东西，自定义单元格展现
- ...rest