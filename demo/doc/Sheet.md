---
imports:
    import {Sheet, SheetColumn} from '../../src/index';
---
## Sheet

取代Grid组件。更React风格化。给开发者更多控制，更多灵活。

::: demo 一个简单的demo
```jsx
<Sheet list={[{
     id: 3,
     name: '小明',
     age: '10'
 }, {
     id: 4,
     name: '小红',
     age: '15',
     _gm_select: true
 }]}>
    <SheetColumn field="id" name="id"/>
    <SheetColumn field="name" name="名字"/>
    <SheetColumn field="age" name="年龄"/>
</Sheet>
```
:::

### Props

- `list (Array|isRequired)` 是列表的数据，最好是数组。 当然有人没注意传了obj（非常不推荐）。
- `loading (bool)` true显示loading状态，false显示数据
- `enableEmptyTip (bool|string|element)` true则显示默认的“没有数据”文案，其他值string or element则直接显示 
- `getTrProps (func)` 自定义`tr`的props，提供`index`索引，返回 object。
- `scrollX (bool)` 是否允许table横向滚动。 但是table是否具备横向滚动的条件要调用方保证

```jsx
// 一般用法
<Sheet list={list}>...</Sheet>
 
// loading 状态
<Sheet list={list} loading={true}>...</Sheet>

// 如果数据为空则显示“没有数据”
<Sheet list={list} loading={false} enableEmptyTip>...</Sheet>

<Sheet list={list} loading={false} enableEmptyTip="没有数据，请重新查询">...</Sheet>

// 如果数据为空则显示“没有数据”
<Sheet list={list} loading={false} enableEmptyTip={<div>啊啊啊啊啊啊啊啊啊啊</div>}>...</Sheet>
```

### SheetColumn

- `field (string|isRequired)` 某列读取数据的字段名
- `name (string|isRequired)` 某列表头的名字
- `children (func)` 返回任意东西，自定义单元格展现 

SheetColumn的顺序决定table列的顺序

```jsx
// 一般用法
<SheetColumn field="id" name="id"/>

// 可以传入各种className style自定义
<SheetColumn field="name" name="name" style={{
    width: '150px'
}}/>

// 可以自定义显示，children传入一个func，func提供当前数据值，返回要显示的结果
<SheetColumn field="name" name="name">
    {value => '你好 ' + value}
</SheetColumn>

// 不止文本，可以返回任何东西。 可交互的input啊，button啊等
<SheetColumn field="name" name="name">
    {value => <strong>你好 {value}</strong>}
</SheetColumn>

// func第二个参数提供当前数据的索引，通过索引你可以找到当前的数据
<SheetColumn field="name" name="name">
    {(value, i) => <strong>你好 {value}，你的id是 {list[i].id}</strong>}
</SheetColumn>

// field你也可以乱来，你喜欢
<SheetColumn field="asfafasfas" name="field乱来">
    {(value, i) => <strong>你好 {list[i].name}，你的id是 {list[i].id}</strong>}
</SheetColumn>
```

### SheetAction

- `children (func)` func提供当前数据和当前数据的索引，返回值为渲染内容。返回任意东西，自定义操作区域

行的操作。Sheet会自动放到表格最后面

```jsx
<SheetAction>
    {(eList, i) => (
        <div>
            <button className="btn btn-xs btn-default gm-marginRight5"
                    onClick={this.handleAction.bind(this, eList, i)}>删除
            </button>
        </div>
    )}
</SheetAction>
```

### SheetSelect

- `onSelect (func|isRequired)`
- `onSelectAll (func|isRequired)`

行的操作。Sheet会自动放到表格最前列

一但用到`SheetSelect`，就约定了数据eList中的`_gm_select`字段，`_gm_select`为bool是选中。
`onSelect`当选择一行时触发，参数为是否选中`checked`，和当前索引`index`。
`onSelectAll`当选择所有的时候触发，参数为是否选择`checked`。
需要根据select事件自动修改_gm_select属性。

```
<SheetSelect onSelect={this.handleSelect} onSelectAll={this.handleSelectAll}/>
```

### SheetBatchAction

批量操作按钮，Sheet会自动放到table的上面。

当存在`SheetSelect`才有效。没啥功能，纯粹一个位置约定而已。
在`handleBatchAction`中要自己判断哪些被选中，做想要的操作（哪些被选中其实也可以交给组件做，犹豫)

```jsx
<SheetBatchAction>
    <button className="btn btn-primary btn-sm gm-marginRight5" onClick={this.handleBatchAction}>批量操作
    </button>
    <button className="btn btn-default btn-sm" onClick={this.handleBatchAction}>批量操作2</button>
</SheetBatchAction>
```

### Pagination PaginationText

如需页码传入`Pagination`或者`PaginationText`组件。 
Sheet会自动安排在页码应该什么位置。一般只用Pagination就好。

```jsx
<Pagination data={this.state.pagination} toPage={this.handlePage}/>
<PaginationText data={this.state.pagination}/>
```