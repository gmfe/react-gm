# 开发文档

## z-index层级管理

### 布局流

- chunk loading 90
- header 100
- trigger popup 900
- nav 910
- sticky 950

### 浮层

- mask 1000
- drawer 1030 drawer_mask 1020
- modal 1050 modal mask 1040
- popup 2000
- tip 7000
- full_screen loading 8000
- nprogress 9999

待整理

- drop_select 1000

## 组件规范

重要 props 放上面
props children 不写
尽量使用 docgen 描述组件

