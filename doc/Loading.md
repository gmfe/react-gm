Loading组件使用场景：  当页面进入某一个业务时，向后台请求数据，同时前端UI渲染需要依赖的数据还没有完全从后台返回，这时需要呈现一个Loading来告知用户需要等待一小会。


## 组件介绍

### Loading
```javascript
Loading.propTypes = {
    style: PropTypes.object,
    size: PropTypes.number
};
```

```javascript
Loading.defaultProps = {
    size: 50
};
```


Loading的默认样式：
// background-color: @brand-primary    （#6dc3ec）
//  若需要更改Loading大小，set size  （default size = 50）
