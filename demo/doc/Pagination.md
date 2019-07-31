---
imports:
    import {Flex, PaginationBox, Pagination, PaginationFuck} from '../../src/index';
---

## PaginationBox

封装 【新规范】 的容器

[最新规范 2018.08.29](https://doc.guanmai.cn/%E6%A8%A1%E5%9D%97%E6%96%87%E6%A1%A3/%E5%88%86%E9%A1%B5/)
::: demo 最新分页规范
```js
class PaginationBoxDemo extends React.Component{
    constructor(){
        super();
        this.state = {
            list:{}
        };
    }
    componentDidMount(){
        this.pagination.doFirstRequest();
    }
    requestSomething = (pagination) => {
        return new Promise((resolve) => {
           setTimeout(()=>{
                let json = {
                data:['111','222'],
                pagination:{
                    page_obj:'xxx',
                    peek: 55,
                    more: true,
                    count: 173
                },
            }
            this.setState({list:json.data})
            resolve(json)
           },1000)
        })
    }
    render(){
        return (
            <PaginationBox onRequest={this.requestSomething} ref={ref => (this.pagination = ref)} /* disablePage 不显示页码 */>
                    <div>
                        Some content
                    </div>
            </PaginationBox>
        );
    }
}
```
```jsx
<PaginationBoxDemo/>
```
:::

### Props 
- `onRequest (func|isRequired)`  用于发请求的function，接收pagination。要返回 promise，且 resolve json
- `limit (number|isRequired)` 返回条数，默认10
- `disablePage (bool)` 不显示页码，默认false
- `children (element|func)` 页码上方区域




## PaginationFuck【新规范】(PaginationFuck已废弃)

提前阅读[新分页规范](https://doc.guanmai.cn/%E5%88%86%E4%BA%AB%E5%9F%B9%E8%AE%AD/%E7%9F%A5%E8%AF%86%E5%88%86%E4%BA%AB/%E5%88%86%E9%A1%B5%E8%A7%84%E8%8C%83/)

::: demo 新分页规范 带页码
```js
class PaginationNewComponent1 extends React.Component{
    constructor(){
        super();
        this.state = {
           pagination: {},
           count: 0
        };
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                pagination:{
                    page_obj:'page_obj',
                    peek:55,
                    more: true
                }
            });
        },1000);
    }
    handlePageChange(params){
        console.log('handlePageChange:', params);

        const {count } = this.state;

        if(count < 5){
            setTimeout(() => {
                this.setState({
                    pagination:{
                        page_obj:`page_obj ${count}`,
                        peek: count < 4  ? 20 * (5-count) : 23,
                        more: count < 4
                    },
                    count:count +1
                });
            },1000);
        }
    }
    render(){
        return (
            <Flex alignCenter column>
                <PaginationFuck nextVersion pagination={this.state.pagination} onChange={this.handlePageChange.bind(this)}/>
            </Flex>
        );
    }
}
```
```jsx
<PaginationNewComponent1/>
```
:::

::: demo 新分页规范 不带页码
```js
class PaginationNewWithoutCount extends React.Component{
    constructor(){
        super();
        this.state = {
           pagination: {},
           count: 0
        };
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                pagination:{
                    page_obj:'page_obj',
                    peek:55,
                    more: true
                }
            });
        },200);
    }
    handlePageChange(params){
        console.log('handlePageChange:', params);

        const {count } = this.state;

        if(count < 5){
            setTimeout(() => {
                this.setState({
                    pagination:{
                        page_obj:`page_obj ${count}`,
                        peek: count < 4  ? 20 * (5-count) : 23,
                        more: count < 4
                    },
                    count:count +1
                });
            },200);
        }
    }
    render(){
        return (
            <Flex alignCenter column>
                <PaginationFuck nextVersion pagination={this.state.pagination} onChange={this.handlePageChange.bind(this)} showCount={false}/>
            </Flex>
        );
    }
}
```
```jsx
<PaginationNewWithoutCount/>
```
:::

### Props 

- `pagination (shape)` 
    * `page_obj (number|isRequired)` 起始页（不包含），默认第0页
    * `peek (number|isRequired)` 实际peek到的条数。
- `limit (number|isRequired)` 返回条数，默认10
- `onChange (func|isRequired)` 提供 `page_obj`、`limit`、`offset`、`reverse`、`peek` 回去，直接用此数据请求后台即可


## Pagination【老规范】

两种形式，Pagination

提前阅读[分页规范](https://github.com/gmfe/react-gm/wiki/%E5%88%86%E9%A1%B5%E6%A0%BC%E5%BC%8F%E8%A7%84%E8%8C%83)

::: demo 带count
```js
const pagination = {
    count: 70,
    offset: 0,
    limit: 10
};
```
```jsx
<Flex alignCenter>
    <Pagination data={pagination} toPage={data => console.log(data)}/>
</Flex>
```
:::

::: demo 不带count
```js
const pagination1 = {
    offset: 0,
    limit: 10
};
```
```jsx
<Flex column>
    <Pagination data={pagination1} toPage={data => console.log(data)}/>
</Flex>
```
:::

::: demo 不带count，下一步disable，当前页不足10条（包括0条）的时候
```jsx
<Flex column>
    <Pagination data={pagination1} toPage={data => console.log(data)} nextDisabled={true}/>
</Flex>
```
:::

### Props 

- `data (shape)` 
    * `count (number|isRequired)` 出于性能考虑，有些接口不会返回`count`
    * `offset (number|isRequired)`
    * `limit (number|isRequired)`
- `toPage (func|isRequired)` 提供 `offset` 和 `limit` 回去，直接用此数据请求后台即可
