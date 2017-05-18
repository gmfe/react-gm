---
imports:
    import {groupByWithIndex} from 'gm-util';
---
## Iconfont


::: demo 图标
```js
const glyphions = [
    'ifont-image',
    'ifont-14052218',
    'ifont-weixin',
    'ifont-iconfontquestion',
    'ifont-star-half',
    'ifont-warning',
    'ifont-star',
    'ifont-location',
    'ifont-bar-chart',
    'ifont-card',
    'ifont-info',
    'ifont-left',
    'ifont-comment',
    'ifont-calendar-1',
    'ifont-info-circle',
    'ifont-bu',
    'ifont-success',
    'ifont-report',
    'ifont-lab',
    'ifont-close',
    'ifont-unstar',
    'ifont-zan',
    'ifont-calendar',
    'ifont-project',
    'ifont-pi-liang',
    'ifont-qian',
    'ifont-hcd',
    'ifont-jian',
    'ifont-jia',
    'ifont-up',
    'ifont-down',
    'ifont-xinhao5',
    'ifont-xinhao1',
    'ifont-xinhao3',
    'ifont-xinhao2',
    'ifont-xinhao4'
];

class Component extends React.Component {
    render() {
        return (
            <div>
                {_.map(glyphions, v => (
                    <div>
                    <i style={{fontSize: '30px', padding: '10px'}} className={"ifont " + v}/>
                    {v}
                    </div>
                ))}
            </div>
        );
    }
}
```
```jsx
<Component/>
```
```
:::
