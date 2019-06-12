---
imports: import { Price } from '../../src/index';
---

## Price
使用场景: 价格处理所需的 `货币符号` 和 `货币单位` 都在这个组件中统一提供. 还有统一价格的UI展示

::: demo Price

```js
class PriceWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
          valArr: [
          0,
          10839,
          2345454545,
          1000,
          12310,
          10000000,
          -10,
          -226,
          -1000,
          -1000002323
          ]
        }

        //初始化
        Price.setCurrency('¥')
    }

    priceArr = () => {
      return this.state.valArr.map(item=>{
        return (
          <div key={item}>
            <Price value={item}/>
          </div>
        )
      })
    }

    render() {
        return (
            <div>
              {this.priceArr()}
              <Price isFenUnit value={1234} style={{fontSize:'28px',color:'red'}}/> <br/>
              <Price value={40002288} currencyScale={.8} style={{fontSize:'28px',color:'red'}}/>
              <br/>
            </div>
        );
    }
}
```

```jsx
<PriceWrap />
```

:::

### Props

- `value(number|isRequired)` 传入的价格
- `isFenUnit(boolean)` value 是否以分为单位，默认是**false**, 以元为单位
- `precision(number)` 保留几位小数，默认是**2**位
- `useGrouping(boolean)` 是否使用千分符。默认值是**true**.
- `currencyScale(number)` 货币符号的缩放大小,可能的值是**0-1**,默认值是**0.85**
- `keepZero(boolean)` 是否保留小数点后无效的零，默认值是**true**.
- `...rest`

### 静态方法

- `Price.setCurrency(currency)` 'currency'为**货币符号**，如“￥”。

