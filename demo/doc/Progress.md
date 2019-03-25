---
imports:
    import {Progress} from '../../src/index';
---

## Progress

进度条
::: demo
```jsx
<div style={{width: '400px'}}>
    <Progress percentage={10}/>
    <Progress percentage={10} showText={false}/>
  
    <Progress percentage={0} textInside strokeWidth={18}/>
  
    <Progress percentage={30}/>
    <Progress percentage={70} textInside strokeWidth={18}/>
    <Progress percentage={70} textInside textAlignInside="center" strokeWidth={18}/>
    <Progress percentage={20} text="20斤/100斤" strokeWidth={18}/>
  
    <Progress percentage={100}/>
    <Progress percentage={100} status="success" />
    <Progress percentage={50} status="exception" />
</div>
```
:::

### Props
- `percentage (number|isRequire)` 进度条百分比
- `text（string）` 替换percentage的百分比文案
- `status (string)` 进度条状态，值 `success` or `exception`
- `strokeWidth (number)` 进度条宽度
- `textInside（bool）` 文字位置是否嵌在里面，默认 `false`
- `textAlignInside（string）` 内嵌文字位置，可指定为`left`/`right`/`center`，默认 `right`
- `showText（bool）` 是否显示文字，默认 `true`
- `...rest`