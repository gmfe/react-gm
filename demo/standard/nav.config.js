import React from 'react';

class NavConfig extends React.Component {
    render() {
        return (
            <div className="demo-left-nav">
                <h2>布局规范</h2>
                <ul>
                    <li><a href="#/standard/LayoutRule">一级页面布局</a></li>
                    <li><a href="#/standard/LayoutRule?anchor=xiang-qing-ye-mian-bu-ju">详情页面布局</a></li>
                    <li><a href="#/standard/LayoutRule?anchor=guo-du-ye-mian-bu-ju">过度页面布局</a></li>
                </ul>
                <h2>模块规范</h2>
                <ul>
                    <li><a href="#/standard/Module">多Tab切换</a></li>
                    <li><a href="#/standard/Module?anchor=shai-xuan-qi">筛选器</a></li>
                    <li><a href="#/standard/Module?anchor=chang-gui-mo-kuai-tou-bu">常规模块头部</a></li>
                    <li><a href="#/standard/Module?anchor=xiang-qing-ye-mian-zhong-ji-ben-xin-xi">详情页面中基本信息</a></li>
                </ul>
                <h2>控件规范</h2>
                <ul>
                    <li><a href="#/standard/ComponentRule">颜色规范</a></li>
                    <li><a href="#/standard/ComponentRule?anchor=wen-zi-gui-fan">文字规范</a></li>
                    <li><a href="#/standard/ComponentRule?anchor=an-niu-gui-fan">按钮布局</a></li>
                </ul>
            </div>
        );
    }
}

export default NavConfig;