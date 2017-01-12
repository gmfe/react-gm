import React from 'react';

class NavConfig extends React.Component {
    render() {
        return (
            <div className="demo-left-nav">
                <h2>开发指南</h2>
                <ul>
                    <li><a href="#/doc/About">About</a></li>
                </ul>
                <h2>基础组件</h2>
                <h3>布局</h3>
                <ul>
                    <li><a href="#/doc/Flex">Flex</a></li>
                    <li><a href="#/doc/Collapse" id="intro3">Collapse</a></li>
                </ul>
                <h3>加载</h3>
                <ul>
                    <li><a href="#/doc/Loading">Loading</a></li>
                    <li><a href="#/doc/NProgress">NProgress</a></li>
                </ul>
                <h3>选择</h3>
                <ul>
                    <li><a href="#/doc/Cascader">Cascader</a></li>
                    <li><a href="#/doc/CascaderSelect">CascaderSelect</a></li>
                    <li><a href="#/doc/AdvanceSelect">AdvanceSelect</a></li>
                    <li><a href="#/doc/DropSelect">DropSelect</a></li>
                    <li><a href="#/doc/SearchSelect">SearchSelect</a></li>
                    <li><a href="#/doc/FilterSearchSelect">FilterSearchSelect</a></li>
                    <li><a href="#/doc/TreeSelect">TreeSelect</a></li>
                </ul>
                <h3>数据</h3>
                <ul>
                    <li><a href="#/doc/Sheet">Sheet</a></li>
                    <li><a href="#/doc/SheetColumn">SheetColumn</a></li>
                    <li><a href="#/doc/SheetAction">SheetAction</a></li>
                    <li><a href="#/doc/SheetSelect">SheetSelect</a></li>
                    <li><a href="#/doc/SheetBatchAction">SheetBatchAction</a></li>
                    <li><a href="#/doc/Pagination">Pagination</a></li>
                    <li><a href="#/doc/ImportLead">ImportLead</a></li>
                    <li><a href="#/doc/Storage">Storage</a></li>
                </ul>
                <h3>日期</h3>
                <ul>
                    <li><a href="#/doc/Calendar">Calendar</a></li>
                    <li><a href="#/doc/DatePicker">DatePicker</a></li>
                    <li><a href="#/doc/DateRangePicker">DateRangePicker</a></li>
                    <li><a href="#/doc/TimeSpan">TimeSpan</a></li>
                </ul>
                <h3>浮层</h3>
                <ul>
                    <li><a href="#/doc/Tip">Tip</a></li>
                    <li><a href="#/doc/Dialog">Dialog</a></li>
                    <li><a href="#/doc/Modal">Modal</a></li>
                    <li><a href="#/doc/Trigger">Trigger</a></li>
                </ul>
                <h3>上传</h3>
                <ul>
                    <li><a href="#/doc/Dropper">Dropper</a></li>
                </ul>
                <h3>表单</h3>
                <ul>
                    <li><a href="#/doc/Form">Form</a></li>
                    <li><a href="#/doc/Validator">Validator</a></li>
                    <li><a href="#/doc/Radio">Radio & Checkbox</a></li>
                    <li><a href="#/doc/Checkbox">Checkbox</a></li>
                    <li><a href="#/doc/Switch">Switch</a></li>
                    <li><a href="#/doc/InputNumber">InputNumber</a></li>
                    <li><a href="#/doc/DropDown">DropDown</a></li>
                </ul>
            </div>
        );
    }
}

export default NavConfig;