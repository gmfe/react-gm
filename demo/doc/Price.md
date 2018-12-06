---
imports: import { Price } from '../../src/index';
---

## Price

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
              <Price divRatio={10} value={1234} style={{fontSize:'28px',color:'red'}}/> <br/>
              <Price divRatio={100} value={40002288} currencyScale={.8} style={{fontSize:'28px',color:'red'}}/>
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
- `divRatio(number)` value与要显示价格的比值 display value = value / divRatio
- `precision(number)` 保留几位小数，默认是**2**位
- `useGrouping(boolean)` 是否使用千分符。默认值是**true**.
- `currencyScale(number)` 货币符号的缩放大小,可能的值是**0-1**,默认值是**0.85**
- `keepZero(boolean)` 是否保留小数点后无效的零，默认值是**true**.
- `...rest`

### 静态方法

- `Price.setCurrency(currency)` 'currency'为**货币符号**，如“￥”。

