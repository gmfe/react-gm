---
imports:
    import {Loading, Sheet, SheetColumn, Flex, LoadingFullScreen, LoadingChunk} from '../../src/index';
---
## Loading

Loading组件使用场景：  当页面进入某一个业务时，向后台请求数据，同时前端UI渲染需要依赖的数据还没有完全从后台返回，这时需要呈现一个Loading来告知用户需要等待一小会。


::: demo 默认形态
```js
class LoadingWrap extends React.Component {
    constructor(props) {
      super(props);
    
      this.state = {
        fullscreen: false,
        loading: true
      };
      
      this.onClick = ::this.onClick;
      
      setTimeout(()=>{
          this.setState({
            loading: false
          })
      }, 3000);
    }
    
    onClick() {      
      LoadingFullScreen.render({
          text: '玩命加载中...'
      });
      setTimeout(() => {LoadingFullScreen.hide()}, 3000); 
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
                <div>
                    <Loading size={30} />
                    <Loading/>
                </div> 
                

                <h2>区域加载 size 60</h2>
                <LoadingChunk loading={true} size={60}>
                    <Sheet list={list}>
                        <SheetColumn field="id" name="id"/>
                        <SheetColumn field="name" name="名字"/>
                        <SheetColumn field="age" name="年龄"/>
                    </Sheet>
                </LoadingChunk>
                
                <h2>区域加载,自定义文案,3秒后关闭</h2>
                <LoadingChunk text='拼命加载中...' loading={this.state.loading}>
                    <Sheet list={list}>
                        <SheetColumn field="id" name="id"/>
                        <SheetColumn field="name" name="名字"/>
                        <SheetColumn field="age" name="年龄"/>
                    </Sheet>
                </LoadingChunk>
                
                <h2>全屏加载,自定义文案, 静态方法，3秒后关闭</h2>
                <button className="btn btn-default"  onClick={this.onClick}>整页加载</button>
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
#### Loading
- `size (number)` 默认 50
-  `text (string)` loading 文案
- `...rest`

#### LoadingFullScreen (静态方法)
- `size (number)` 默认 50
-  `text (string)` loading 文案
- `...rest`

#### LoadingChunk
- `loading (bool)` 默认 `false`,
- `size (number)` 默认 50
-  `text (string)` loading 文案
- `...rest`
