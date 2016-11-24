---
imports:
    import {Sheet, SheetColumn, Flex} from '../../src/index';
---
## SheetBatchAction

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