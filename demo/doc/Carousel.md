---
imports:
    import {Carousel} from '../../src/index';
---
## Carousel
::: demo 以下example依赖的数据
```js
const imgData=[
    'https://img.guanmai.cn/product_pic/da32d562de124462.png',
    'https://img.guanmai.cn/product_pic/ec206dc3750fe865.jpeg',
    'http://lorempixel.com/400/200',
    '//img.guanmai.cn/station_pic/gm_banner.jpg',
    '//img.guanmai.cn/station_pic/sha1_ef0537da1c01453dd680f7c558a12aa9d520354b.jpg',
]
const colorData = ['red','white','white','grey','pink']
```
:::

Carousel 纯轮播(默认模式)

::: demo Carousel
```js
class CarouselExample extends React.Component {
    render() {
        return (
        <Carousel
          imgData={imgData}
        />
        )
    }
}
```

```jsx
<CarouselExample/>
```
:::

Carousel 滑动模式
::: demo Carousel
```js
class CarouselExample1 extends React.Component {
    render() {
        return (
        <Carousel
          imgData={imgData}
          switchType='move'
        />
        )
    }
}
```

```jsx
<CarouselExample1/>
```
:::

Carousel 点击事件,背景颜色, 显示控制按钮
::: demo Carousel
```js
class CarouselExample2 extends React.Component {
    handleClick = (index) => {
        alert(index)
    }
    render() {
        return (
        <Carousel
          imgData={imgData}
          colorData={colorData}
          onSelect={this.handleClick} 
          hasSideSwitch         
        />
        )
    }
}
```

```jsx
<CarouselExample2/>
```
:::

### Props
- `width（string）` 轮播区域宽度 
- `height (string)` 轮播区域高度
- `imgData` 轮播图数据 (array) 格式：`{'[\'\',\'\']'}`
- `colorData` 对应的背景颜色数据 (array) 格式：`{'[\'\',\'\']'}`
- `switchType（string）` 轮播类型 （'move','fade'）例：switchType='move'
- `delay（number）` 轮播间隔时间
- `speed（number）` 单个切换过程时间（ms） 
- `onSelect （func）` 点击事件 
- `defaultIndex（number）` 设置初始索引
- `isAutoPlay（bool）` 是否自动轮播 
- `isStopCarousel（bool）` 鼠标悬空和点击取消轮播，鼠标离开则继续轮播（需开启轮播才有效）
- `hasSideSwitch（bool）` 是否显示左右控制 
- `hasFooterSwitch（bool）` 是否显示下标控制 
- `className` 自定义样式 
- `...rest` 

### Default Props
- `width`: '500px', 轮播区域宽度
- `height`: '300px', 轮播区域高度
- `switchType`: 'fade', 轮播类型
- `delay`: 7000, 轮播间隔时间
- `speed`: 2000, 单个切换过程时间（ms）
- `onSelect`: _.noop, 点击事件
- `isAutoPlay`: true, 是否自动轮播
- `defaultIndex`: 0, 设置初始索引
- `isStopCarousel`: true, 鼠标悬空和点击取消轮播，鼠标离开则开始轮播
- `hasSideSwitch`: false, 是否显示左右控制
- `hasFooterSwitch`: true 是否显示下标控制

### Tips
- 建议`delay`的值大于`speed`的值，不然`move`模式下会出现意想不到的轮播顺序
