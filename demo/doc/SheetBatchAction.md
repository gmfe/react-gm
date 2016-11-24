---
imports:
    import {Sheet, SheetColumn, SheetSelect, SheetBatchAction, Flex} from '../../src/index';
---
## SheetBatchAction

批量操作按钮，Sheet会自动放到table的上面。

当存在`SheetSelect`才有效。没啥功能，纯粹一个位置约定而已。
在`handleBatchAction`中要自己判断哪些被选中，做想要的操作（哪些被选中其实也可以交给组件做，犹豫)

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
    <SheetBatchAction>
        <button 
            className="btn btn-primary btn-sm gm-marginRight5" 
            onClick={() => console.log('batch action')}
        >批量操作</button>
        <button 
            className="btn btn-default btn-sm" 
            onClick={() => console.log('batch action')}
        >批量操作2</button>
    </SheetBatchAction>
</Sheet>
```
:::