## tableX 踩的坑，阅读后改代码更自信

- 注意不要随意升级版本，目前使用 7.0.0-rc.11
- 7.0.0-rc.11 天然不支持 column.show, 所以自行实现了 column.show 的支持.[issue](https://github.com/tannerlinsley/react-table/issues/1665)
- defaultColumn 的值不要轻易改动，具体看代码。目前实现了 minWidth，width，maxWidth 逻辑与 v6 一致，且需语义一致。
- 使用 useResizeColumns 后，无法兼容到 v6 的 minWidth，width，maxWidth 的实现，所以去掉了 useResizeColumns
- 斑马线，不能用 css 的 `:even` 和 `:odd` 实现。因为在使用虚拟列表的时候有坑。
- 使用.gm-table-x-td 定义 background 是有原因的，比如 使用 fixedColumnHOC 时候的背景穿透问题
- 虚拟列表的实现是 copy 了一份 TableX，请保证一致
- 改动需要考虑 keyboard 那边
- keyboard 测试 向上下左右是否有问题，特别是不在显示区域的是否可以滚动到显示区域
- keyboard 新增一行的性能，行数很大的时候的性能
- keyboard 的 input 不会因为新增而换掉 dom。即 控制台打出该 dom，在新增后 hover 到控制台的 dom 还能找到
