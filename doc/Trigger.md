类似react-bootstrap的 `OverlayTrigger`，背景是`OverlayTrigger`的浮层会两次触发，暂时没有排查出来原因。故造个轮子。

## 组件介绍

### Trigger

- `popup (node)` 触发浮层的元素，如果元素有disabled，则不会出发浮层
- `component (node)` 包括触发浮层的元素的父亲，一般给`div`
- `children (node)` 必须单个元素
- `disabled` 不会出发浮层，优先级比`popup`的 disabled 高
- `target (node)` TODO
- `widthFull (bool)` TODO 是否100%宽度

```jsx
<Trigger component={<div />} popup={popup}>
    {children ? children : (
        <input
            type="text"
            className={inputClassName}
            ref="target"
            disabled={disabled}
            value={render(date)}
            onChange={noop}
        />
    )}
</Trigger>
```