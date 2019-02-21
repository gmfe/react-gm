---
imports:
    import {Popover, Flex} from '../../src/index';
---
## Popover

::: demo
```js
class PopoverWrap extends React.Component {
    renderPopup() {
        return (
            <div style={{width: '200px', height: '200px'}}>
                <div>啦啦啦啦啦啦啦啦啦啦啦</div>
                <div>啦啦啦啦啦啦啦啦啦啦啦</div>
                <div>啦啦啦</div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div>三种行为 focus click hover</div>
                <div>
                    <Popover popup={this.renderPopup()}>
                        <button className="btn btn-default">focus me default</button>
                    </Popover>
                    <Popover type="click" popup={this.renderPopup()}>
                        <button className="btn btn-default">click me</button>
                    </Popover>
                    <Popover showArrow type="hover" popup={this.renderPopup()}>
                        <button className="btn btn-default">hover me</button>
                    </Popover>
                </div>
                <div>各种位置</div>
                <div>
                    <Popover popup={this.renderPopup()}>
                        <button className="btn btn-default">focus me(default)</button>
                    </Popover>
                    <Popover right popup={this.renderPopup()}>
                        <button className="btn btn-default">focus me(right)</button>
                    </Popover>
                    <Popover center popup={this.renderPopup()}>
                        <button className="btn btn-default">focus me(center)</button>
                    </Popover>
                </div>
                <div>
                    <Popover top popup={this.renderPopup()}>
                        <button className="btn btn-default">focus me(top)</button>
                    </Popover>
                    <Popover right top popup={this.renderPopup()}>
                        <button className="btn btn-default">focus me(right top)</button>
                    </Popover>
                    <Popover center top popup={this.renderPopup()}>
                        <button className="btn btn-default">focus me(center top)</button>
                    </Popover>
                </div>

                <div>偏移位置</div>
                <div>
                    <Popover offset={20} popup={this.renderPopup()}>
                        <button className="btn btn-default">focus me(20)</button>
                    </Popover>
                    <Popover offset={-20} popup={this.renderPopup()}>
                        <button className="btn btn-default">focus me(-20)</button>
                    </Popover>
                    <Popover right offset={20} popup={this.renderPopup()}>
                        <button className="btn btn-default">focus me(right 20)</button>
                    </Popover>
                    <Popover right top offset={20} popup={this.renderPopup()}>
                        <button className="btn btn-default">focus me(right top 20)</button>
                    </Popover>
                    <Popover center offset={20} popup={this.renderPopup()}>
                        <button className="btn btn-default">focus me(center 20)</button>
                    </Popover>
                    <Popover showArrow offset={20} popup={this.renderPopup()}>
                        <button className="btn btn-default">showArrow(offset 20)</button>
                    </Popover>
                </div>

                <div>加角标</div>
                <div>
                    <Popover showArrow popup={this.renderPopup()}>
                        <button className="btn btn-default">showArrow</button>
                    </Popover>
                    <Popover showArrow right popup={this.renderPopup()}>
                        <button className="btn btn-default">showArrow right</button>
                    </Popover>
                    <Popover showArrow arrowLeft="0px" popup={this.renderPopup()}>
                        <button className="btn btn-default">showArrow arrowLeft 0</button>
                    </Popover>
                </div>
                <div>disabled</div>
                <div>
                    <Popover disabled popup={this.renderPopup()}>
                        <button className="btn btn-default">focus me(disabled)</button>
                    </Popover>
                    <Popover popup={this.renderPopup()}>
                        <button disabled className="btn btn-default">focus me(inner disabled)</button>
                    </Popover>
                </div>
            </div>
        );
    }
}
```
```jsx
<PopoverWrap/>
```
:::

### Props

注意 Popover 的 popup 不会随 render 更新

- `type (focus|click|hover)` 三种模式。 默认 `focus`。 focus 即获得焦点就显示 popup。click 即点击显示 popup 再点击关闭 popup。hover 即 hover 的时候关闭，其中 hover 关闭的时候会延迟 500ms（避免鼠标移到浮层时，在目标和浮层之间的空隙时触发关闭浮层）。
- `popup (node|isRequired)` 浮层，如果元素有 disabled，则不会触发浮层
- `children (node|isRequired)` 必须单个元素，非string
- `disabled` 不会触发浮层，优先级比`popup`的 disabled 高。 建议使用popup disabled属性，因为有disabled样式。
- `center (bool)` 和目标居中对齐。
- `right (bool)` 和目标右对齐。
- `top (bool)` 在目标的上方。 可和 right center 组合用。
- `offset (number)` 出现位置的偏移量。可和 right center 组合用。
- `showArrow`  是否显示trigger的三角标
- `animName (false|true|fade-in-left|fade-in-right|fade-in-bottom|fade-in-top)` 默认 true，false 关闭动画
- `...rest`
