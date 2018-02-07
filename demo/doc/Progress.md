---
imports:
    import {Progress} from '../../src/index';
---

## Progress

进度条
::: demo
```jsx
<div style={{width: '400px'}}>
  <Progress percentage={0} showText={false}/>
  <Progress percentage={0}/>
  <Progress percentage={0} textInside strokeWidth={18}/>
  
  <Progress percentage={30}/>
  <Progress percentage={70} textInside strokeWidth={18}/>
  
  <Progress percentage={100}/>
  <Progress percentage={100} status="success" />
  
  <Progress percentage={50} status="exception" />
</div>
```
:::

### Props
- `percentage (number)` 进度条百分比，必传
- `status (string)` 进度条状态，值 `success`,`exception`
- `strokeWidth (number)` 进度条宽度
- `textInside（bool）` 文字位置是否嵌在里面，默认 `false`
- `showText（bool）` 是否显示文字，默认 `true`
