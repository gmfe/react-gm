Flex布局工具，使用之前请认真阅读 认真阅读 认真阅读 [Flex布局实战](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

## 组件介绍

### FLex

具体定义看上面的链接，不过多介绍

- `flex (number|bool)` 项目放大比例，默认`true`，也即flex等于1。
- `auto (bool)` 即 `flex: 1 1 auto`
- `none (bool)` 即 `flex: 0 0 auto` 当不希望剩余空间不足时不被压缩用
- `width (string)` 如果定义了width，额外使用了`none`(不会被放大和缩小)
- `height (string)` 同上
- `row (bool)`
- `column (bool)`
- `wrap (bool)`
- `nowrap (bool)`
- `justifyStart (bool)` 
- `justifyEnd (bool)`
- `justifyCenter (bool)`
- `justifyBetween (bool)`
- `justifyAround (bool)`
- `alignStart (bool)`
- `alignEnd (bool)`
- `alignCenter (bool)`
- `alignBaseline (bool)`
- `alignStretch (bool)`
- `classNames`
- `style`

以上只列了写常用的特性，还有些很有用的特性，不妨直接用style来处理。

比如 `flex: 1 0 auto` ，如果空间足够则撑满，如果空间不足也不会被压缩，特别适合用在内滚动容器（然而经试验当内容多的适合在pc会出现滚动条(设置了overflow:auto)，在移动端却没有，神了个奇）。

Flex 组件默认是

```less
.gm-flex {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: stretch;
  box-sizing: border-box;
}
```