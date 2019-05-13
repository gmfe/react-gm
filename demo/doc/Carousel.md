---
imports:
    import {Carousel, Flex} from '../../src/index';
---
## Carousel

Carousel 纯轮播(默认模式)(轮播区域自定义)

::: demo Carousel
```js
class CarouselExample extends React.Component {
    render() {
        return (
        <Carousel
          style={{width:'1000px',height:'200px'}}
        >
            <div style={{backgroundColor: 'red', height:'100%',width:'100%'}}>
               <Flex justifyCenter>
                 <img style={{height:'200px',width:'800px'}} src='https://img.guanmai.cn/product_pic/da32d562de124462.png'/>
               </Flex>
            </div>
            <div style={{backgroundColor: 'green', height:'100%'}}>showCarousel1</div>
            <div style={{backgroundColor: 'yellow', height:'100%'}}>showCarousel2</div>
            <div style={{backgroundColor: 'blue', height:'100%'}}>showCarousel3</div>
            <div style={{backgroundColor: 'orange', height:'100%'}}>showCarousel4</div>
        </Carousel>
        )
    }
}
```

```jsx
<CarouselExample/>
```
:::

### Props
- `delay（number）` 轮播间隔时间
- `transitionTime（number）` 单个切换过程时间（ms）  
- `defaultIndex（number）` 设置初始索引
- `...rest` 

### Default Props
- `delay`: 7000, 轮播间隔时间（ms）
- `transitionTime`: 2000, 单个切换过程时间（ms）
- `defaultIndex`: 0, 设置初始索引
