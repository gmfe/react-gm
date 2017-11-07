---
imports:
    import {Progress} from '../../src/index';
---

## Progress

进度条
::: demo
```jsx
    <Progress percent={50} />
    <Progress percent={50} text="warning-50%" type="warning" style={{marginTop: '10px'}}/>
    <Progress percent={50} type="danger" style={{marginTop: '10px'}}/>
```
:::

### Props
- `percent (number)` 进度
- `type (string)` 类型 `success`,`warning`,`danger`,默认`success
- `text (string)` 进度文字
