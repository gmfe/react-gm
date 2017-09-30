---
imports:
    import {ImagePreview} from '../../src/index.js';
---

## ImagePreview

图片预览

::: demo 以下example依赖的数据

```js
    const srcList = ['./demo/images/image_preview/react5.png','./demo/images/image_preview/demo2.png',
        './demo/images/image_preview/width.jpg','./demo/images/image_preview/long.jpg',
        './demo/images/image_preview/node.jpg','./demo/images/image_preview/node_big.png',
        './demo/images/image_preview/react1.png', './demo/images/image_preview/react2.jpg',
        './demo/images/image_preview/react3.png', './demo/images/image_preview/react4.png',
        './demo/images/image_preview/react5.png', './demo/images/image_preview/vue.jpg',
        './demo/images/image_preview/width.jpg','./demo/images/image_preview/demo2.png',
        './demo/images/image_preview/demo3.jpg','./demo/images/image_preview/long.jpg',
        './demo/images/image_preview/node.jpg','./demo/images/image_preview/node_big.png',
        './demo/images/image_preview/react1.png', './demo/images/image_preview/react2.jpg',
        './demo/images/image_preview/react3.png', './demo/images/image_preview/react4.png',
        './demo/images/image_preview/react5.png', './demo/images/image_preview/vue.jpg',
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

- `ImagePreview()` 
