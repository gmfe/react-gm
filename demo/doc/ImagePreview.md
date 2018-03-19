---
imports:
    import {ImagePreview} from '../../src/index.js';
---

## ImagePreview

图片预览

::: demo 以下example依赖的数据

```js
    const demo2 = 'http://7xlnio.com1.z0.glb.clouddn.com/18-3-9/55189630.jpg';
    const demo3 = 'http://7xlnio.com1.z0.glb.clouddn.com/18-3-9/92456680.jpg';
    const long = 'http://7xlnio.com1.z0.glb.clouddn.com/18-3-9/94425102.jpg';
    const node = 'http://7xlnio.com1.z0.glb.clouddn.com/18-3-9/19643068.jpg';
    const react1 = 'http://7xlnio.com1.z0.glb.clouddn.com/18-3-9/92330201.jpg';
    const react2 = 'http://7xlnio.com1.z0.glb.clouddn.com/18-3-9/14452818.jpg';
    const react3 = 'http://7xlnio.com1.z0.glb.clouddn.com/18-3-9/38213335.jpg';
    const react4 = 'http://7xlnio.com1.z0.glb.clouddn.com/18-3-9/38181942.jpg';
    const react5 = 'http://7xlnio.com1.z0.glb.clouddn.com/18-3-9/40298099.jpg';
    const vue = 'http://7xlnio.com1.z0.glb.clouddn.com/18-3-9/39193365.jpg';
    const srcList = [
        demo2, demo3, long, node, react1, react2, react3, react4, react5, vue,
        demo2, demo3, long, node, react1, react2, react3, react4, react5, vue,
        demo2, demo3, long, node, react1, react2, react3, react4, react5, vue,
        demo2, demo3, long, node, react1, react2, react3, react4, react5, vue
    ];
```

:::


::: demo 打开模态框后带缩略图

```js
class ImagePreviewWrap extends React.Component {
    handlePreviewWithThumbnails() {
        ImagePreview({
            images: srcList,
            thumbnails: srcList,
            index: 0
        });
    }
    
    handlePreview(index) {
        ImagePreview({
            images: srcList,
            index: 0
        });
    }

    handlePreviewSingle() {
        ImagePreview({
            images: ['http://7xlnio.com1.z0.glb.clouddn.com/18-3-9/55189630.jpg'],
            index: 0
        });
    }

    render() {
        return (
            <div>
               <button 
                    className="btn btn-default gm-marginRight10" 
                    onClick={::this.handlePreviewWithThumbnails}
                >带缩略图</button>
                <button 
                    className="btn btn-primary" 
                    onClick={::this.handlePreview}
                >不带缩略图</button>
                <button 
                    className="btn btn-default" 
                    onClick={::this.handlePreviewSingle}
                >单张图片</button>
            </div>
        );
    }
}
```

```jsx
<ImagePreviewWrap />
```

:::

### Static

- `ImagePreview(object|isRequired)`   参数详情请看下方

```javascript
    object = { 
        images: (array | isRequired),   // 原图数组
        thumbnails: (array),            // 缩略图数组
        index: (number | isRequired)    // 当前图片下标
    }
```