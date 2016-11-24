---
imports:
    import {Sheet, SheetColumn, SheetAction, Flex} from '../../src/index';
---
## SheetAction

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
    <SheetAction>
        {(eList, i) => (
            <div>
                <button 
                    className="btn btn-xs btn-default gm-marginRight5"
                    onClick={() => alert('dosomething')}
                >删除</button>
            </div>
        )}
    </SheetAction>
</Sheet>
```
:::

### Props
- `children (func)` func提供当前数据和当前数据的索引，返回值为渲染内容。