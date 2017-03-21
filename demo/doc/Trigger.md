---
imports:
    import {Trigger, Flex} from '../../src/index';
---
## Trigger

::: demo
```js
class TriggerWrap extends React.Component {
    renderPopup(text) {
        return (
            <div className="gm-border" style={{width: '200px', height: '200px', background: 'red'}}>
                <div>{text ? text : 'popup'}</div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div>三种行为 focus click hover</div>
                <Flex>
                    <Trigger showArrow component={<div/>} popup={this.renderPopup('default showArrow')}>
                        <button className="btn btn-default">focus me default</button>
                    </Trigger>
                    <Trigger component={<div/>} type="click" popup={this.renderPopup()}>
                        <button className="btn btn-default">click me</button>
                    </Trigger>
                    <Trigger showArrow component={<div/>} type="hover" popup={this.renderPopup('default showArrow')}>
                        <button className="btn btn-default">hover me</button>
                    </Trigger>
                </Flex>
                <div>各种位置</div>
                <Flex>
                    <Trigger showArrow arrowBorderColor='#F00' arrowBgColor='#FF0' component={<div/>} popup={this.renderPopup("arrowBorderColor=#F00  arrowBgColor=#FF0")}>
                        <button className="btn btn-default">focus me(default)</button>
                    </Trigger>
                    <Trigger showArrow arrowBorderColor='#F0F'  component={<div/>} right popup={this.renderPopup("arrowBorderColor=#F0F arrowBgColor=default")}>
                        <button className="btn btn-default">focus me(right)</button>
                    </Trigger>
                    <Trigger showArrow arrowBgColor='#00F' component={<div/>} top popup={this.renderPopup("arrowBgColor=#00F    arrowBorderColor=default")}>
                        <button className="btn btn-default">focus me(top)</button>
                    </Trigger>
                    <Trigger showArrow component={<div/>} right top popup={this.renderPopup('default showArrow')}>
                        <button className="btn btn-default">focus me(right top)</button>
                    </Trigger>
                </Flex>
                <div>disabled</div>
                <Flex>
                    <Trigger showArrow component={<div/>} disabled popup={this.renderPopup()}>
                        <button className="btn btn-default">focus me(disabled)</button>
                    </Trigger>
                    <Trigger component={<div/>} popup={this.renderPopup()}>
                        <button disabled className="btn btn-default">focus me(inner disabled)</button>
                    </Trigger>
                </Flex>
            </div>
        );
    }
}
```
```jsx
<TriggerWrap/>
```
:::

### Props
- `type (focus|click|hover)` 三种模式。 默认`focus`。 focus即获得焦点就显示popup。click即点击显示popup再点击关闭popup。hover即hover的时候关闭，其中hover关闭的时候会延迟500ms（避免鼠标移到浮层时，在目标和浮层之间的空隙时触发关闭浮层）。
- `component (node|isRequired)` 触发浮层的元素的父亲，会创建真正的元素，一般给`<div/>`
- `popup (node)` 浮层，如果元素有disabled，则不会触发浮层
- `right (bool)` 和目标右对齐。
- `top (bool)` 在目标的上方。 可和right组合用。
- `children (node)` 必须单个元素，非string
- `disabled` 不会触发浮层，优先级比`popup`的 disabled 高。 建议使用popup disabled属性，因为有disabled样式。