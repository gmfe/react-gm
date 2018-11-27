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
        Price.setCurrency('$')
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
              <Price value={400022.82222} currencyScale={.8} style={{fontSize:'28px',color:'red'}}/>
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

- `value` 传入的价格,单位为 **分**
- `precision` 保留几位小数，默认是**2**位
- `useGrouping` 是否使用千分符。可能的值是**true**和**false**,默认值是**true**.
- `currencyScale` 货币符号的缩放大小，可能的值是**0-1**，默认值是**1**
- `keepZero` 是否保留小数点后无效的零，可能的值是**true**和**false**,默认值是**true**.
- `...rest`

### 静态方法

- `Price.setCurrency(currency)` 'currency'为**货币符号**，如“￥”。

