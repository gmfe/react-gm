类似react-bootstrap的 `OverlayTrigger`，背景是`OverlayTrigger`的浮层会两次触发，暂时没有排查出来原因。故造个轮子。

## 组件介绍

### Trigger

- `popup (node)` 触发浮层的元素，如果元素有disabled，则不会出发浮层
- `component (node)` 包括触发浮层的元素的父亲，一般给`div`
- `children (node)` 必须单个元素
- `disabled` 不会出发浮层，优先级比`popup`的 disabled 高
- `target (node)` 浮层定位的元素，left和top由target元素决定
- `widthFull (bool)` TODO 是否100%宽度。 默认宽度调用方控制
- `isContains (func)` 点击出发点是否包含。true则不关闭浮层，false则关闭

```jsx
<Trigger 
    component={<div />} 
    popup={popup}
>
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