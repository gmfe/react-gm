---
imports:
    import {Menu} from '../../src/index.js';
---
## Menu

导航菜单组件。


::: demo 以下 example 依赖的数据
```js
const data = [{
       name: '订单管理',
       sub: [
            {name: '订单异常'},
            {name: '每日订单'},
            {name: '流转单异常'}
       ]
    }, {
        name: '商户管理',
        sub: [
            {name: '商户信息'},
            {name: '商户报表'},
            {name: '商户对账单'},
            {name: '新商户邀请'}
        ]
    }]
```
:::

::: demo 导航菜单
```js
class NavLeft extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = ::this.handleClick;
        
        this.state = {
            selected: {}
        }
    }
    
    handleClick(selected) {
        this.setState({
            selected: selected
        })
    }
    
    render() {
        const {selected} = this.state;
        return (
            <div className="b-app-nav-left" style={{width: 200}}>
                <Menu
                    id="menu_id"
                    data={data}
                    onSelect={this.handleClick}
                    selected={selected}
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
- `id (string|isRequired)` 作为组件 `key`， 请保证其唯一性
- `data (array|isRequired)` 菜单数据。数据结构 `{'[{name: "订单管理",sub: [{name: "订单异常"},{name: "每日订单"}]}]'}`
- `onSelect (func | isRequired)` 点击菜单子项后回调，返回点击的节点数据
- `selected (object)` 选中的数据