---
imports:
    import {Droper} from '../../src/index';
---
## Droper

上传文件

::: demo
```jsx
<div>
    <Droper onDrop={() => console.log(arguments)} accept="image/*"/>

    <Droper className="gm-droper-wrap" onDrop={() => console.log(arguments)} accept=".xlsx">
        <button className="btn btn-default">upload</button>
    </Droper>
</div>
```
:::

### Props
- `multiple (bool)` 是否多选，默认false。 **Android微信**不支持多选，内部已经判断是微信就不开放多选功能
- `accept (string)` 选择的类型，比如图片 `image/*`，excel `.xlsx`，具体见HTML5规范
- `onDrop (func)` 历史原因，名字就这样定了，选择图片后触发函数
- `classNames (string)` 如果不想用默认ui，传进来自定义
- `children` 提供自定义选择图片的触发区域