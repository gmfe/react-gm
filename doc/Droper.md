上传文件

![](http://7xlnio.com1.z0.glb.clouddn.com/16-7-31/16118211.jpg)

## 组件介绍

### Droper

- `multiple (bool)` 是否多选，默认false。 **Android微信**不支持多选，内部已经判断是微信就不开放多选功能
- `accept (string)` 选择的类型，比如图片 `image/*`，excel `.xlsx`，具体见HTML5规范
- `onDrop (func)` 历史原因，名字就这样定了，选择图片后触发函数
- `classNames (string)` 如果不想用默认ui，传进来自定义
- `children` 提供自定义选择图片的触发区域

```jsx
<Droper onDrop={this.handleDrop} accept="image/jpg, image/png"/>

<Droper className="gm-droper-wrap" onDrop={this.handleDrop} accept=".xlsx">
    <button className="btn btn-default">upload</button>
</Droper>
```

也许你看了源码，还有很多参数，请忽略（droper是copy过来的）