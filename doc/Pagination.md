两种形式，Pagination PaginationText

![](http://7xlnio.com1.z0.glb.clouddn.com/16-8-1/32865143.jpg)

提前阅读[分页规范](https://github.com/gmfe/react-gm/wiki/%E5%88%86%E9%A1%B5%E6%A0%BC%E5%BC%8F%E8%A7%84%E8%8C%83)

## 组件介绍

### Pagination 

- `data (shape)` 
    * `count (number|isRequired)`
    * `offset (number|isRequired)`
    * `limit (number|isRequired)`
- `toPage (func|isRequired)` 提供 `offset` 和 `limit` 回去，直接用此数据请求后台即可

```jsx
const pagination = {
    count: 60,
    offset: 30,
    limit: 10
}

<Pagination data={pagination} toPage={this.handlePage}/>

<PaginationText data={pagination}/>
```

# PaginationText

同上，只是没有回调