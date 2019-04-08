---
imports:
    import {Sheet, SheetColumn, SheetSelect, Flex} from '../../src/index';
---
## SheetSelect `(注意: selectAllTip只要__gm_select都为true就会出现)`

::: demo 操作行为
```js
class SheetWrap extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            list: [{
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
                  }]
        };
        
        this.handleSelect = ::this.handleSelect;
        this.handleSelectAll = ::this.handleSelectAll;
        this.isDisabled = ::this.isDisabled;
    }
    
    handleSelect(checked, index){
        console.log('onSelect', checked, index);
        const list = [...this.state.list];
        
        list[index]._gm_select = checked;
        this.setState({
            list
        });
    }
    
    handleSelectAll(checked, index){
        const list = [...this.state.list];
        list.map(line => {
            if(!this.isDisabled(line))
                line._gm_select = checked;
        });
        this.setState({
            list
        });
    }
    
    isDisabled(line){
        return line.age > 18;
    }
    
    render() {
        return (
           <Sheet list={this.state.list}>
               <SheetColumn field="id" name="id"/>
               <SheetColumn field="name" name="名字"/>
               <SheetColumn field="age" name="年龄"/>
               <SheetSelect 
                   onSelect={this.handleSelect} 
                   onSelectAll={this.handleSelectAll}
                   isDisabled={this.isDisabled}
                   hasSelectTip={true}
                   selectAllTip="选中当前页面中所有list"
               />
           </Sheet>
        );
    }
}

class SheetWrap2 extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            list: [{
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
                  }]
        };
        
        this.isDisabled = ::this.isDisabled;
    }
    
    handleChange = (list) => {
          this.setState({list});
    };
    
    isDisabled(line){
        return line.age > 18;
    }
    
    render() {
        return (
           <Sheet list={this.state.list}>
               <SheetColumn field="id" name="id"/>
               <SheetColumn field="name" name="名字"/>
               <SheetColumn field="age" name="年龄"/>
               <SheetSelect 
                   onChange={this.handleChange}
                   isDisabled={this.isDisabled}
                   isRadio
               />
           </Sheet>
        );
    }
}
```
```jsx
<SheetWrap/>
<SheetWrap2/>
```
:::

### Props
- `onSelect (func|isRequired)`
- `onSelectAll (func)`
- `onChange (func)` 如果提供，则 onSelect onSelectAll 无效。 参数是设置好gm_select的列表数据，直接用重新 render 即可。相对 onSelect onSelectAll 简单很多
- `isDisabled (func)`
- `isRadio (bool)`
- `hasSelectTip (bool)` 是否显示选择所有后的tip
- `selectAllTip (string)` 选择所有后的tip文案

一但用到`SheetSelect`，就约定了数据eList中的`_gm_select`字段，`_gm_select`为bool是选中。
`onSelect`当选择一行时触发，参数为是否选中`checked`，和当前索引`index`。
`onSelectAll`当选择所有的时候触发，参数为是否选择`checked`。
需要根据select事件自动修改_gm_select属性。
`isDisabled`参数为当前行数据，返回`true`or`false`，表示是当前行是否可被选中
