---
imports:
    import {Sheet, SheetColumn, Flex} from '../../src/index';
    import ReactDOM from 'react-dom';
---
## Sheet

更React风格化。给开发者更多控制，更多灵活。

配合的组件[SheetColumn](#/doc/SheetColumn) [SheetAction](#/doc/SheetAction) [SheetSelect](#/doc/SheetSelect) [SheetBatchAction](#/doc/SheetBatchAction) [Pagination](#/doc/Sheet?anchor=pagination-paginationtext)

::: demo 一个简单的demo
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
    <SheetColumn field="age" name={<div style={{background: 'red'}}>自定义head</div>}/>
</Sheet>
```
:::

::: demo loading 和 没有数据
```jsx
<Flex>
    <Flex flex column> 
        <Sheet list={list} loading={true}>
            <SheetColumn field="id" name="id"/>
            <SheetColumn field="name" name="名字"/>
            <SheetColumn field="age" name="年龄"/>
        </Sheet>
    </Flex>
    <div className="gm-padding-5"/>
    <Flex flex column> 
        <Sheet list={[]} enableEmptyTip>
            <SheetColumn field="id" name="id"/>
            <SheetColumn field="name" name="名字"/>
            <SheetColumn field="age" name="年龄"/>
        </Sheet>
    </Flex>
</Flex> 
```
:::

::: demo tr传props自定义行
```jsx
<Sheet list={list} getTrProps={index => (index === 1 ? {
    className: 'warning'
} : {})}>
    <SheetColumn field="id" name="id"/>
    <SheetColumn field="name" name="名字"/>
    <SheetColumn field="age" name="年龄"/>
</Sheet>
```
:::

::: demo table 滚动。但是要调用方保证可滚动。 比如没有足够的宽度。
```jsx
<div style={{width: '300px'}}>
    <Sheet list={list} scrollX>
        <SheetColumn field="id" name="id"/>
        <SheetColumn field="name" name="名字"/>
        <SheetColumn field="age" name="年龄"/>
        <SheetColumn field="id" name="id"/>
        <SheetColumn field="name" name="名字"/>
        <SheetColumn field="age" name="年龄"/>
        <SheetColumn field="id" name="id"/>
        <SheetColumn field="name" name="名字"/>
        <SheetColumn field="age" name="年龄"/>
        <SheetColumn field="id" name="id"/>
        <SheetColumn field="name" name="名字"/>
        <SheetColumn field="age" name="年龄"/>
        <SheetColumn field="id" name="id"/>
        <SheetColumn field="name" name="名字"/>
        <SheetColumn field="age" name="年龄"/>
        <SheetColumn field="id" name="id"/>
        <SheetColumn field="name" name="名字"/>
        <SheetColumn field="age" name="年龄"/>
    </Sheet>
</div>
```
:::

::: demo sheet 套 sheet
```js
class SheetInSheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
               {
                   id: 3,
                   name: '小明',
                   age: '10'
               }, {
                   id: 4,
                   name: '小红',
                   age: '15',
                   __gm_expanded: true
               }, {
                  id: 5,
                  name: '小蓝',
                  age: '20'
               }
            ]
        };

        this.renderExpandedRowRender = ::this.renderExpandedRowRender;
        this.handleExpand = ::this.handleExpand;
    }

    renderExpandedRowRender() {
        return (
            <Sheet list={this.state.data}>
                <SheetColumn name="id" field="id"/>
                <SheetColumn name="name" field="name"/>
            </Sheet>
        );
    }

    handleExpand(index) {
        const {data} = this.state;
        data[index].__gm_expanded = !data[index].__gm_expanded;
        this.setState({
            data
        });
    }

    render() {
        return (
            <div style={{width: '500px'}}>
                <Sheet
                    list={this.state.data}
                    expandedRowRender={this.renderExpandedRowRender}
                    onExpand={this.handleExpand}
                >
                    <SheetColumn name="id" field="id"/>
                    <SheetColumn name="name" field="name"/>
                    <SheetColumn name="name" field="name"/>
                </Sheet>
            </div>
        );
    }
}
```
```jsx
<SheetInSheet/>
```
:::

::: demo find
```js
class SheetWithTableDom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
               {
                   id: 3,
                   name: '小明',
                   age: '10'
               }, {
                   id: 4,
                   name: '小红',
                   age: '15',
                   __gm_expanded: true
               }, {
                  id: 5,
                  name: '小蓝',
                  age: '20'
               }
            ]
        };

        this.getDOM = ::this.getDOM;
    }

    getDOM() {
        console.log(Sheet.findTableDOM(this.refSheet));
    }

    render() {
        return (
            <div style={{width: '500px'}}>
                <Sheet
                    list={this.state.data}
                    ref={ref => this.refSheet = ref}
                >
                    <SheetColumn name="id" field="id"/>
                    <SheetColumn name="name" field="name"/>
                    <SheetColumn name="name" field="name"/>
                </Sheet>
                <button onClick={this.getDOM}>获取table dom</button>
            </div>
        );
    }
}
```
```jsx
<SheetWithTableDom/>
```
:::

### Props
- `list (Array|isRequired)`
- `loading (bool)` true显示loading状态，false显示数据
- `enableEmptyTip (bool|string|element)` true则显示默认的“没有数据”文案，其他值string or element则直接显示 
- `getTrProps (func)` 自定义`tr`的props，提供`index`索引，返回 object。
- `scrollX (bool)` 是否允许table横向滚动。 但是table是否具备横向滚动的条件要调用方保证
- `expandedRowRender(func)` sheet in sheet，通过此方法渲染另外一个table
- `onExpand(func)` 相应sheet in sheet的展开/收起。 直接操作数据的 __gm_expanded 字段，具体见demo
- `className (string)`

### Static

- `findTableDOM (func)` 传 Sheet 的 ref 进去，返回 table 的 dom

### Pagination PaginationText

如需页码传入`Pagination`或者`PaginationText`组件。 
Sheet会自动安排在页码应该什么位置。一般只用Pagination就好。

```jsx
<Pagination data={this.state.pagination} toPage={this.handlePage}/>
<PaginationText data={this.state.pagination}/>
```