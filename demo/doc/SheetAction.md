---
imports:
    import {Sheet, SheetColumn, Flex} from '../../src/index';
---
## SheetAction

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