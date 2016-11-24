---
imports:
    import {Sheet, SheetColumn, SheetSelect, Flex} from '../../src/index';
---
## SheetSelect

::: demo 操作行为
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
    <SheetColumn field="name" name="名字"/>
    <SheetColumn field="age" name="年龄"/>
    <SheetSelect 
        onSelect={(checked, index) => console.log('onSelect', checked, index)} 
        onSelectAll={(checked, index) => console.log('onSelectAll', checked, index)}
    />
</Sheet>
```
:::

### Props
- `onSelect (func|isRequired)`
- `onSelectAll (func|isRequired)`

一但用到`SheetSelect`，就约定了数据eList中的`_gm_select`字段，`_gm_select`为bool是选中。
`onSelect`当选择一行时触发，参数为是否选中`checked`，和当前索引`index`。
`onSelectAll`当选择所有的时候触发，参数为是否选择`checked`。
需要根据select事件自动修改_gm_select属性。
