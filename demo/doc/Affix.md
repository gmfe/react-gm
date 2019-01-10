---
imports:
    import {Affix} from '../../src/index';
---
## Affix

::: demo Affix
```js
class AffixWrap extends React.Component {
    render() {
        return (
            <div style={{display:'flex',justifyContent:'space-between'}}>
              <div>
                <div style={{width:'400px', height:'100px', background:'#ccc'}}></div>
                <div style={{width:'400px', height:'100px', background:'#ccc'}}></div>
                <div style={{width:'400px', height:'100px', background:'#ccc'}}></div>
                <div style={{width:'400px', height:'100px', background:'#ccc'}}></div>
                <div style={{width:'400px', height:'100px', background:'#ccc'}}></div>
                <div style={{width:'400px', height:'100px', background:'#ccc'}}></div>
                <div style={{width:'400px', height:'100px', background:'#ccc'}}></div>
                <div style={{width:'400px', height:'100px', background:'#ccc'}}></div>
                <div style={{width:'400px', height:'100px', background:'#ccc'}}></div>
                <div style={{width:'400px', height:'100px', background:'#ccc'}}></div>
                <Affix bottom={0}>
                  <div style={{width:'400px', height:'50px', background:'pink'}}></div>
                </Affix>
                <div style={{width:'400px', height:'100px', background:'#ccc'}}></div>
                <div style={{width:'400px', height:'100px', background:'#ccc'}}></div>
                <div style={{width:'400px', height:'100px', background:'#ccc'}}></div>
                <div style={{width:'400px', height:'100px', background:'#ccc'}}></div>
                <div style={{width:'400px', height:'100px', background:'#ccc'}}></div>
              </div>
              <div>
                <div style={{width:'400px', height:'100px', background:'#ccc'}}></div>
                <div style={{width:'400px', height:'100px', background:'#ccc'}}></div>
                <div style={{width:'400px', height:'100px', background:'#ccc'}}></div>
                <Affix top={40}>
                  <div style={{width:'400px', height:'50px', background:'pink'}}></div>
                </Affix>
                <div style={{width:'400px', height:'100px', background:'#ccc'}}></div>
                <div style={{width:'400px', height:'100px', background:'#ccc'}}></div>
                <div style={{width:'400px', height:'100px', background:'#ccc'}}></div>
                <div style={{width:'400px', height:'100px', background:'#ccc'}}></div>
                <div style={{width:'400px', height:'100px', background:'#ccc'}}></div>
                <div style={{width:'400px', height:'100px', background:'#ccc'}}></div>
                <div style={{width:'400px', height:'100px', background:'#ccc'}}></div>
                <div style={{width:'400px', height:'100px', background:'#ccc'}}></div>
                <div style={{width:'400px', height:'100px', background:'#ccc'}}></div>
                <div style={{width:'400px', height:'100px', background:'#ccc'}}></div>
                <div style={{width:'400px', height:'100px', background:'#ccc'}}></div>
                <div style={{width:'400px', height:'100px', background:'#ccc'}}></div>
              </div>
            </div>
        );
    }
}
```

```jsx
<AffixWrap/>
```

:::

### Props
- `top(number)` 设置top值
- `bottom(number)` 设置bottom值
