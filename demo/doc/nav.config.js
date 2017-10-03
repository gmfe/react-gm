import React from 'react';
import {Menu} from '../../src/index';
import {history} from "../service";
import {withRouter} from 'react-router-dom';
import _ from 'lodash';
import {Framework} from '../../framework';

const data = [{
    name: 'Guide',
    sub: [
        {name: 'About', path: '/doc/About'}
    ]
}, {
    name: 'Layout',
    sub: [
        {name: 'Flex', path: '/doc/Flex'},
        {name: 'Quick', path: '/doc/Quick'},
        {name: 'Collapse 折叠面板', path: '/doc/Collapse'},
        {name: 'Divider 分割线', path: '/doc/Divider'},
        {name: 'Menu 导航菜单', path: '/doc/Menu'}
    ]
}, {
    name: 'Data',
    sub: [
        {name: 'Sheet 表格', path: '/doc/Sheet'},
        {name: 'Pagination 页码', path: '/doc/Pagination'},
        {name: 'ImportLead 导入指引', path: '/doc/ImportLead'}
    ]
}, {
    name: 'Select',
    sub: [
        {name: 'Cascader 级联选择', path: '/doc/Cascader'},
        {name: 'DropSelect', path: '/doc/DropSelect'},
        {name: 'FilterSearchSelect 搜索选择', path: '/doc/FilterSearchSelect'},
        {name: 'FilterSelect 搜索选择v2', path: '/doc/FilterSelect'},
        {name: 'SearchSelect 废弃', path: '/doc/SearchSelect'},
        {name: 'TreeSelect 树形选择', path: '/doc/TreeSelect'},
        {name: 'Transfer 穿梭框', path: '/doc/Transfer'},
        {name: 'Calendar 日历', path: '/doc/Calendar'},
        {name: 'DatePicker 日期选择', path: '/doc/DatePicker'},
        {name: 'TimeSpan 时间点选择', path: '/doc/TimeSpan'}
    ]
}, {
    name: 'Layer',
    sub: [
        {name: 'Tip 提示', path: '/doc/Tip'},
        {name: 'Dialog 对话框', path: '/doc/Dialog'},
        {name: 'Modal 模态框', path: '/doc/Modal'},
        {name: 'Trigger 触发器', path: '/doc/Trigger'}
    ]
}, {
    name: 'Form',
    sub: [
        {name: 'Validator 校验工具', path: '/doc/Validator'},
        {name: 'Form 表单', path: '/doc/Form'},
        {name: 'Radio & Checkbox 单(多)选框', path: '/doc/Radio'},
        {name: 'Switch 开个', path: '/doc/Switch'},
        {name: 'InputNumber 数字输入框', path: '/doc/InputNumber'},
        {name: 'Select 选择', path: '/doc/Select'},
        {name: 'DropDown 下拉框', path: '/doc/DropDown'},
        {name: 'Dropper 上传', path: '/doc/Dropper'}
    ]
}, {
    name: 'Loading',
    sub: [
        {name: 'Loading 加载中', path: '/doc/Loading'},
        {name: 'NProgress 请求进度条', path: '/doc/NProgress'}
    ]
}, {
    name: 'Other',
    sub: [
        {name: 'Storage', path: '/doc/Storage'},
        {name: 'IFont', path: '/doc/IFont'}
    ]
}];

@withRouter
class NavConfig extends React.Component {
    handleSelect(item) {
        Framework.scrollTop();
        history.push(item.path);
    }

    render() {
        const {location: {pathname}} = this.props;
        let selected = null;

        // doc 性能无须考虑太多，暂且每次render处理
        _.find(data, v => {
            return selected = _.find(v.sub, s => s.path === pathname);
        });

        return (
            <Menu
                id="docMenu"
                allowCollapse
                data={data}
                onSelect={this.handleSelect}
                selected={selected}
            />
        );
    }
}

export default NavConfig;