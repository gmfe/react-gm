---
imports:
    import {Flex, Pagination, PaginationText} from '../../src/index';
---
## Pagination【新规范】

提前阅读[新分页规范](https://doc.guanmai.cn/%E5%88%86%E4%BA%AB%E5%9F%B9%E8%AE%AD/%E7%9F%A5%E8%AF%86%E5%88%86%E4%BA%AB/%E5%88%86%E9%A1%B5%E8%A7%84%E8%8C%83/)

::: demo 新分页规范 带页码
```js
class PaginationNew extends React.Component{
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
                    pageobj:'pageobj',
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
                        pageobj:`pageobj ${count}`,
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
                <Pagination nextVersion pagination={this.state.pagination} onChange={this.handlePageChange.bind(this)}/>
            </Flex>
        );
    }
}
```
```jsx
<PaginationNew/>
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
                    pageobj:'pageobj',
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
                        pageobj:`pageobj ${count}`,
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
                <Pagination nextVersion pagination={this.state.pagination} onChange={this.handlePageChange.bind(this)} showCount={false}/>
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

- `data (shape)` 
    * `count (number|isRequired)` 出于性能考虑，有些接口不会返回`count`
    * `offset (number|isRequired)`
    * `limit (number|isRequired)`
- `toPage (func|isRequired)` 提供 `offset` 和 `limit` 回去，直接用此数据请求后台即可


## Pagination【老规范】

两种形式，Pagination PaginationText

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
    <PaginationText data={pagination}/>
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
    <PaginationText data={pagination1}/>
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

# PaginationText

同上，只是没有回调