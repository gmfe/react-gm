---
imports:
    import {Nav} from '../../src/index.js';
---
## Menu

导航菜单组件。


::: demo 以下 example 依赖的数据
```js
const data = [{
      link: '/customer_manage',
      name: '商户管理',
      sub: [{
          name: '商户管理',
          sub: [
              {link: '/customer_manage/customer/manage', name: '商户信息', auth: 'view_customer'},
              {link: '/customer_manage/customer/report', name: '商户报表', auth: 'view_customerreport'},
              {link: '/customer_manage/customer/bill', name: '商户对账单', auth: 'view_customeraccount'},
              {link: '/customer_manage/customer/invitation_code', name: '新商户邀请', auth: 'edit_invitation'}
          ],
          link: '/customer_manage/customer'
      }]
  },{
      link: '/operational_data',
      name: '运营数据',
      sub: [{
          name: '利润分析',
          sub: [
              {link: '/operational_data/profit/profit_report', name: '销售利润', auth: 'view_saleprofit'},
              {link: '/operational_data/profit/order_report', name: '订单分析', auth: 'view_customerorder'},
              {link: '/operational_data/profit/product_report', name: '商品分析', auth: 'view_orderskus'}
          ],
          link: '/operational_data/profit'
      }, {
          name: '异常分析',
          sub: [
              {link: '/operational_data/abnormal/order_abnormal', name: '订单异常', auth: 'view_abnormal_customer_order'},
              {link: '/operational_data/abnormal/product_abnormal', name: '商品异常', auth: 'view_abnormal_skus'}
          ],
          link: '/operational_data/abnormal'
      }]
  }];
```
:::

::: demo 导航菜单
```js
class NavLeft extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = ::this.handleClick;
        
        this.state = {
            // selected: '/customer_manage/customer/report'
            selected: ''
        }
    }
    
    handleClick(selected) {
        this.setState({
            selected: selected.link
        });
    }
    
    render() {
        const {selected} = this.state;
        return (
            <div className="b-app-nav-left" style={{width: 200}}>
                <Nav
                    data={data}
                    onSelect={this.handleClick}
                    selected={selected}
                    widths={['100px', '100px']}
                />
            </div>
        );
    }
}

```


```jsx
<NavLeft/>
```
:::

### Props
- `logo (element)`
- `data (array|isRequired)` 菜单数据。结构 `{'[{link, name, sub: [{...}]}]'}`
- `onSelect (func|isRequired)` 返回节点数据
- `selected (object)` 选中的数据
- `...rest`