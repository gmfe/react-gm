---
imports:
    import {Sheet, SheetColumn, Flex} from '../../src/index';
---
## SheetSelect

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