# 9.x

## breaking changes

### component

Framework 不内嵌 LayoutRoot，调用方自行放 LayoutRoot 位置
Breadcrumb 改了
Info 改了

Framework 不内嵌 LayoutRoot，调用方自行放 LayoutRoot 位置

Nav 改了

移除 Menu

DateRangePicker props 和 UI 有变动，请查阅

Pagination toPage 移除第一个参数。（扫了station，没人用）

PaginationNew => PaginationFuck

PaginationBox limit => defaultLimit

### css

移除 .ifont- .xfont- 等功能性样式，替换为 .gm-svg-icon-

Framework 不内嵌 LayoutRoot，调用方自行放 LayoutRoot 位置

# 8.x

## breaking changes

remove Emitter

remove src/framework

List 的 data 改为 [{value, text}] ,renderName 改为 renderItem
remove ListGroup，统统在 List 里
