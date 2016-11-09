类似react-bootstrap的 `OverlayTrigger`，背景是`OverlayTrigger`的浮层会两次触发，暂时没有排查出来原因。故造个轮子。

## 组件介绍

### Trigger

- `type (focus|click|hover)` 三种模式。 默认`focus`。 focus即获得焦点就显示popup。click即点击显示popup再点击关闭popup。hover即hover的时候关闭，其中hover关闭的时候会延迟500ms（避免鼠标移到浮层时，在目标和浮层之间的空隙时触发关闭浮层）。
- `component (node|isRequired)` 触发浮层的元素的父亲，会创建真正的元素，一般给`<div/>`
- `popup (node)` 浮层，如果元素有disabled，则不会触发浮层
- `right (bool)` 和目标右对齐。
- `top (bool)` 在目标的上方。 可和right组合用。
- `children (node)` 必须单个元素，非string
- `disabled` 不会触发浮层，优先级比`popup`的 disabled 高。 建议使用popup disabled属性，因为有disabled样式。

```jsx
class TriggerWrap extends React.Component {
    renderPopup() {
        return (
            <div className="gm-border" style={{width: '200px', height: '200px', background: 'red'}}>
                <div>popup</div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <Trigger component={<div/>} popup={this.renderPopup()}>
                    <button className="btn btn-default">focus me default</button>
                </Trigger>
            </div>
        );
    }
}
```