---
imports:
    import {ImagePreview} from '../../src/index.js';
---

## ImagePreview

图片预览

::: demo 以下example依赖的数据

```js
  const srcList = ['./demo/images/chrome.jpeg', './demo/images/chrome.jpeg','./demo/images/layout-1.png',
    './demo/images/layout-2.png', './demo/images/chrome.jpeg','./demo/images/layout-3.png',
    './demo/images/layout-4.png',  './demo/images/chrome.jpeg', './demo/images/layout-1.png',
    './demo/images/layout-1.png', './demo/images/layout-1.png', './demo/images/chrome.jpeg', './demo/images/layout-1.png', 
    './demo/images/chrome.jpeg', './demo/images/chrome.jpeg','./demo/images/layout-1.png',
    './demo/images/layout-2.png', './demo/images/chrome.jpeg','./demo/images/layout-3.png',
    './demo/images/layout-4.png',  './demo/images/chrome.jpeg', './demo/images/layout-1.png',
    './demo/images/chrome.jpeg', './demo/images/chrome.jpeg','./demo/images/layout-1.png',
    './demo/images/layout-2.png', './demo/images/chrome.jpeg','./demo/images/layout-3.png',
    './demo/images/layout-4.png',  './demo/images/chrome.jpeg', './demo/images/layout-1.png',
    ];
```

:::


::: demo 打开模态框后带缩略图

```js
class ImagePreviewWrap extends React.Component {
    render() {
        return (
            <div style={{width: '898px'}}>
                <ImagePreview images={srcList} thumbnails={srcList} />
            </div>
        );
    }
}
```

```jsx
<ImagePreviewWrap />
```

:::

::: demo 打开模态框后没有缩略图

```js
class ImagePreviewWrap2 extends React.Component {
    render() {
        return (
            <div style={{width: '898px'}}>
                <ImagePreview images={srcList} />
            </div>
        );
    }
}
```

```jsx
<ImagePreviewWrap2 />
```

:::

### Props

- `images (array|isRequired)` 原图src数组
- `thumbnails (array)` 缩略图src数组