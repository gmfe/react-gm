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
          10839,
          2345454545,
          1000,
          10000000,
          -10,
          -226,
          -1000,
          -1000002323
          ]
        }

        //初始化
        Price.setCurrency('CNY')
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
              <Price value={400022.82222} style={{fontSize:'28px',color:'red'}}/>
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

- `value` 传入的价格,单位是”分“
- `precision` 保留几位小数，默认是2位
- `useGrouping` 是否使用千分符。可能的值是true和false,默认值是true.
- `...rest`

### 静态方法

- `Price.setCurrency(currency)` 'currency'为ISO 4217的**字母代码**，如”CNY“（中国），货币符号是“￥”。

### ISO 4217

  <table border="1" width="800px">
    <thead>
        <td>字母代码</td>
        <td>国家和地区</td>
        <td>货币符号</td>
    </thead>
    <tr>
        <td>CNY</td>
        <td>中国</td>
        <td>￥</td>
    </tr>
    <tr>
        <td>EUR</td>
        <td>欧盟</td>
        <td>€</td>
    </tr>
    <tr>
        <td>GBP</td>
        <td>英国</td>
        <td>£</td>
    </tr>
    <tr>
        <td>USD</td>
        <td>美国</td>
        <td>$</td>
    </tr>
    <tr>
        <td>INR</td>
        <td> 印度、 不丹、 尼泊尔、 津巴布韦</td>
        <td>₹</td>
    </tr>
    <tr>
        <td>KRW</td>
        <td>韩元</td>
        <td>₩</td>
    </tr>
  </table>

-  更多货币代码请访问[维基百科ISO 4217](https://zh.wikipedia.org/wiki/ISO_4217)

