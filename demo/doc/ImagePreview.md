---
imports:
    import {ImagePreview} from '../../src/index.js';
---

## ImagePreview

图片预览

::: demo 以下example依赖的数据

```js
    const demo2 = require('../images/image_preview/demo2.png');
    const demo3 = require('../images/image_preview/demo3.jpg');
    const long = require('../images/image_preview/long.jpg');
    const node = require('../images/image_preview/node.jpg');
    const react1 = require('../images/image_preview/react1.png');
    const react2 = require('../images/image_preview/react2.jpg');
    const react3 = require('../images/image_preview/react3.png');
    const react4 = require('../images/image_preview/react4.png');
    const react5 = require('../images/image_preview/react5.png');
    const vue = require('../images/image_preview/vue.jpg');
    const srcList = [
        demo2, demo3, long, node, react1, react2, react3, react4, react5, vue,
        demo2, demo3, long, node, react1, react2, react3, react4, react5, vue,
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
            images: ['./demo/images/image_preview/demo2.png'],
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