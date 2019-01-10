---
imports:
    import {Button,Affix} from '../../src/index';
---
## Button

Button Loading

::: demo Button
```js
class ButtonWrap extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = ::this.handleClick;
        this.handleClick1 = ::this.handleClick1;
    }
    
    handleClick() {
        console.log('click');
        return false;
    }
    
    handleClick1() {
        console.log('click');
        return new Promise(resolve => setTimeout(() => resolve('12'),20000));
    }     
    
    render() {
        return (
            <div>
                <h2>Button 没有 loading, 回调函数返回 false</h2>
                <Button onClick={this.handleClick} className='btn btn-default'>加载更多</Button>
                <h2>Button loading ，回调函数返回一个 Promise</h2>
                <Button onClick={this.handleClick1} className='btn btn-default'>加载更多</Button>
                  <div style={{width:'400px', height:'100px', background:'orange'}}></div>
                  <div style={{width:'400px', height:'100px', background:'orange'}}></div>
                  <div style={{width:'400px', height:'100px', background:'orange'}}></div>
                  <div style={{width:'400px', height:'100px', background:'orange'}}></div>
                  <div style={{width:'400px', height:'100px', background:'orange'}}></div>
                  <div style={{width:'400px', height:'100px', background:'orange'}}></div>
                  <div style={{width:'400px', height:'100px', background:'orange'}}></div>
                  <div style={{width:'400px', height:'100px', background:'orange'}}></div>
                  <div style={{width:'400px', height:'100px', background:'orange'}}></div>
                  <div style={{width:'400px', height:'100px', background:'orange'}}></div>
                  <div style={{width:'400px', height:'100px', background:'orange'}}></div>
                  <Affix top bottom={false}>
                    <div style={{width:'200px', height:'50px', background:'pink'}}></div>
                  </Affix>
                  <div style={{width:'400px', height:'100px', background:'orange'}}></div>
                  <div style={{width:'400px', height:'100px', background:'orange'}}></div>
                  <div style={{width:'400px', height:'100px', background:'orange'}}></div>
                  <div style={{width:'400px', height:'100px', background:'orange'}}></div>
                  <div style={{width:'400px', height:'100px', background:'orange'}}></div>
                  <div style={{width:'400px', height:'100px', background:'orange'}}></div>
                  <div style={{width:'400px', height:'100px', background:'orange'}}></div>
                  <div style={{width:'400px', height:'100px', background:'orange'}}></div>
                  <div style={{width:'400px', height:'100px', background:'orange'}}></div>
                  <div style={{width:'400px', height:'100px', background:'orange'}}></div>
                  <div style={{width:'400px', height:'100px', background:'orange'}}></div>
                  <div style={{width:'400px', height:'100px', background:'orange'}}></div>
                  <div style={{width:'400px', height:'100px', background:'orange'}}></div>
                  <div style={{width:'400px', height:'100px', background:'orange'}}></div>
            </div>
        );
    }
}
```

```jsx
<ButtonWrap/>
```

:::

### Props
- `onClick(func)` 点击回调函数
- `...rest`
