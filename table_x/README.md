## tableX 踩的坑，阅读后改代码更自信

- 注意不要随意升级版本，目前使用7.0.0-rc.11
- 7.0.0-rc.11天然不支持 column.show, 所以自行实现了column.show的支持.[issue](https://github.com/tannerlinsley/react-table/issues/1665)
- defaultColumn的值不要轻易改动，具体看代码。目前实现了minWidth，width，maxWidth逻辑与v6一致。
- 使用 useResizeColumns 后，无法兼容到v6的minWidth，width，maxWidth的实现，所以去掉了 useResizeColumns
- 斑马线，不能用css的 `:even` 和 `:odd` 实现。因为在使用虚拟列表的时候有坑。
- 使用.gm-table-x-td 定义 background 是有原因的，比如 使用 fixedColumnHOC 时候的背景穿透问题
