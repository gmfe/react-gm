import React from 'react';

class NavConfig extends React.Component {
    render() {
        return (
            <div className="demo-left-ui">
                <ul className="demo-left-ui-y gm-border">
                    <div>
                        <span>布局规范</span>
                        <a href="#/standard/LayoutRule">一级页面布局</a>
                        <a href="#/standard/LayoutRule?anchor=xiang-qing-ye-mian-bu-ju">详情页面布局</a>
                        <a href="#/standard/LayoutRule?anchor=guo-du-ye-mian-bu-ju">过度页面布局</a>
                    </div>
                    <div>
                        <span>模块规范</span>
                        <a href="#/standard/Module">多Tab切换</a>
                        <a href="#/standard/Module?anchor=shai-xuan-qi">筛选器</a>
                        <a href="#/standard/Module?anchor=chang-gui-mo-kuai-tou-bu">常规模块头部</a>
                        <a href="#/standard/Module?anchor=xiang-qing-ye-mian-zhong-ji-ben-xin-xi">详情页面中基本信息</a>
                        <a href="#/standard/Module?anchor=biao-dan">表单</a>
                    </div>
                    <div>
                        <span>控件规范</span>
                        <a href="#/standard/ComponentRule">颜色</a>
                        <a href="#/standard/ComponentRule?anchor=wen-zi-gui-fan">文字</a>
                        <a href="#/standard/ComponentRule?anchor=an-niu-gui-fan">按钮</a>
                        <a href="#/standard/ComponentRule?anchor=shai-xuan-qi">筛选器</a>
                    </div>
                </ul>
            </div>
        );
    }
}

export default NavConfig;