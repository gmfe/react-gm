---
imports:
    import {Loading, Sheet, SheetColumn, Flex} from '../../src/index';
---
## Loading

Loading组件使用场景：  当页面进入某一个业务时，向后台请求数据，同时前端UI渲染需要依赖的数据还没有完全从后台返回，这时需要呈现一个Loading来告知用户需要等待一小会。


::: demo 默认形态
```js
class LoadingWrap extends React.Component {
    constructor(props) {
      super(props);
    
      this.state = {
        fullscreen: false
      };
      
      this.onClick = ::this.onClick;
    }
    
    onClick() {
      clearTimeout(this.timeout);
    
      this.timeout = setTimeout(() => {
        this.setState({
          fullscreen: false
        });
      }, 3000);
    
      this.setState({
        fullscreen: true
      });
    }

    
    render() {
        const list= [{
            id: 3,
            name: '小明',
            age: '10'
        }, {
            id: 4,
            name: '小红',
            age: '15',
            _gm_select: true
        }, {
           id: 5,
           name: '小蓝',
           age: '20'
        }];
        return (
            <div>
                <h2>加载</h2>
                <Loading loading={true}></Loading>
                
                <h2>区域加载</h2>
                <Loading>
                    <Sheet list={list}>
                        <SheetColumn field="id" name="id"/>
                        <SheetColumn field="name" name="名字"/>
                        <SheetColumn field="age" name="年龄"/>
                    </Sheet>
                </Loading>
                
                <h2>区域加载,自定义文案</h2>
                <Loading text='拼命加载'>
                    <Sheet list={list}>
                        <SheetColumn field="id" name="id"/>
                        <SheetColumn field="name" name="名字"/>
                        <SheetColumn field="age" name="年龄"/>
                    </Sheet>
                </Loading>
                
                <h2>全屏加载,自定义文案</h2>
                <button onClick={this.onClick}>整页加载</button>
                {
                    this.state.fullscreen && <Loading fullscreen={true} text='玩命加载中' />
                }
            </div>       
        );
    }
}
```
```jsx
<LoadingWrap/>
```
:::

### Props
- `size(number)` 默认 42
- `loading (bool)` 默认 `true`,
- `fullscreen (bool)` 默认 `false`， 全屏加载
-  `text (string)` loading 文案

