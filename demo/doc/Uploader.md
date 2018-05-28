---
imports:
    import {Uploader} from '../../src/index';
---
## Uploader

上传文件

::: demo 默认样式
```jsx
<div>
    <Uploader onUpload={(datas, e) => console.log(datas, e)} accept="image/*" />

</div>
```
:::
::: demo 自定义样式
```jsx
<div>
    <Uploader onUpload={(datas, e) => console.log(datas, e)}  accept=".xlsx">
        <button className="btn">自定义</button>
    </Uploader>
</div>
```
:::

### Props
- `multiple (bool)` 是否多选，默认false。 **Android微信**不支持多选，内部已经判断是微信就不开放多选功能
- `accept (string)` 选择的类型，比如图片 `image/*`，excel `.xlsx`，具体见HTML5规范
- `onUpload (func|isRequired)` 选择图片后触发函数
- `classNames (string)` 如果不想用默认ui，传进来自定义
- `children` 提供自定义选择图片的触发区域