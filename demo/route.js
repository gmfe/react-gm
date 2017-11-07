import React from 'react';
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch as RRSwitch
} from 'react-router-dom';
import {Bundle, processReactRouterProps} from 'gm-util';
import {Emitter} from '../src/index';

import App from './app';
import Demo from 'bundle-loader?lazy!./component/demo';

import About from 'bundle-loader?lazy!./doc/About.md';
import IFont from 'bundle-loader?lazy!./doc/IFont.md';
import Flex from 'bundle-loader?lazy!./doc/Flex.md';
import Loading from 'bundle-loader?lazy!./doc/Loading.md';
import NProgress from 'bundle-loader?lazy!./doc/NProgress.md';
import Progress from 'bundle-loader?lazy!./doc/Progress.md';
import Cascader from 'bundle-loader?lazy!./doc/Cascader.md';
import CascaderSelect from 'bundle-loader?lazy!./doc/CascaderSelect.md';
import DropSelect from 'bundle-loader?lazy!./doc/DropSelect.md';
import SearchSelect from 'bundle-loader?lazy!./doc/SearchSelect.md';
import FilterSearchSelect from 'bundle-loader?lazy!./doc/FilterSearchSelect.md';
import FilterSelect from 'bundle-loader?lazy!./doc/FilterSelect.md';
import Sheet from 'bundle-loader?lazy!./doc/Sheet.md';
import SheetColumn from 'bundle-loader?lazy!./doc/SheetColumn.md';
import SheetAction from 'bundle-loader?lazy!./doc/SheetAction.md';
import SheetSelect from 'bundle-loader?lazy!./doc/SheetSelect.md';
import SheetBatchAction from 'bundle-loader?lazy!./doc/SheetBatchAction.md';
import Pagination from 'bundle-loader?lazy!./doc/Pagination.md';
import ImportLead from 'bundle-loader?lazy!./doc/ImportLead.md';
import Storage from 'bundle-loader?lazy!./doc/Storage.md';
import Calendar from 'bundle-loader?lazy!./doc/Calendar.md';
import DatePicker from 'bundle-loader?lazy!./doc/DatePicker.md';
import DateRangePicker from 'bundle-loader?lazy!./doc/DateRangePicker.md';
import TimeSpan from 'bundle-loader?lazy!./doc/TimeSpan.md';
import Tip from 'bundle-loader?lazy!./doc/Tip.md';
import Dialog from 'bundle-loader?lazy!./doc/Dialog.md';
import Trigger from 'bundle-loader?lazy!./doc/Trigger.md';
import Dropper from 'bundle-loader?lazy!./doc/Dropper.md';
import Switch from 'bundle-loader?lazy!./doc/Switch.md';
import InputNumber from 'bundle-loader?lazy!./doc/InputNumber.md';
import Modal from 'bundle-loader?lazy!./doc/Modal.md';
import Collapse from 'bundle-loader?lazy!./doc/Collapse.md';
import DropDown from 'bundle-loader?lazy!./doc/DropDown.md';
import TreeSelect from 'bundle-loader?lazy!./doc/TreeSelect.md';
import Form from 'bundle-loader?lazy!./doc/Form.md';
import Validator from 'bundle-loader?lazy!./doc/Validator.md';
import Radio from 'bundle-loader?lazy!./doc/Radio.md';
import Select from 'bundle-loader?lazy!./doc/Select.md';
import Transfer from 'bundle-loader?lazy!./doc/Transfer.md';
import Quick from 'bundle-loader?lazy!./doc/Quick.md';
import Divider from 'bundle-loader?lazy!./doc/Divider.md';
import Menu from 'bundle-loader?lazy!./doc/Menu.md';
import ImagePreview from 'bundle-loader?lazy!./doc/ImagePreview.md';

import LayoutCommon from 'bundle-loader?lazy!./standard/LayoutCommon.md';
import LayoutRule from 'bundle-loader?lazy!./standard/LayoutRule.md';
import Module from 'bundle-loader?lazy!./standard/Module.md';
import ComponentRule from 'bundle-loader?lazy!./standard/Component.md';


const pageMap = {
    doc: {
        About,
        IFont,
        Flex,
        Loading,
        Progress,
        NProgress,
        Cascader,
        CascaderSelect,
        DropSelect,
        SearchSelect,
        FilterSearchSelect,
        FilterSelect,
        Sheet, SheetColumn, SheetSelect, SheetAction, SheetBatchAction,
        Pagination,
        ImportLead,
        Storage,
        Calendar,
        DatePicker,
        TimeSpan,
        DateRangePicker,
        Tip,
        Dialog,
        Trigger,
        Dropper,
        Form,
        Validator,
        Radio,
        Switch,
        InputNumber,
        Modal,
        Collapse,
        DropDown,
        TreeSelect,
        Select,
        Transfer,
        Quick,
        Divider,
        Menu,
        ImagePreview
    },
    standard: {
        LayoutCommon,
        LayoutRule,
        Module,
        ComponentRule
    }
};

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.afterBundle = ::this.afterBundle;
    }

    afterBundle(component) {
        if (this.component !== component) {
            Emitter.emit('DEMO-PAGE-LOADED');
        }

        this.component = component;
    }

    render() {
        const {path1, path2} = this.props.match.params;
        const load = pageMap[path1][path2];

        if (!load) {
            return null;
        }

        return (
            <Bundle load={load}>
                {(Component) => {
                    if (Component) {
                        setTimeout(() => this.afterBundle(Component), 500);
                        return <Component {...this.props}/>;
                    } else {
                        return <div>loading</div>;
                    }
                }}
            </Bundle>
        );
    }
}

const getModule = (loaderLazyModule) => {
    return (props) => {
        return (
            <Bundle load={loaderLazyModule}>
                {(Component) => Component ? <Component {...props}/> : <div/>}
            </Bundle>
        );
    };
};

const RouteConfig = () => (
    <Router>
        <Route path="/" component={(props) => (
            <App {...processReactRouterProps(props)}>
                <RRSwitch>
                    <Route exact path="/" render={() => <Redirect from="/" to="/doc/About"/>}/>
                    <Route exact path="/demo" component={getModule(Demo)}/>

                    <Route exact path="/doc" render={() => <Redirect from="/" to="/doc/About"/>}/>
                    <Route exact path="/standard" render={() => <Redirect from="/" to="/standard/LayoutRule"/>}/>

                    <Route exact path="/:path1/:path2" component={Page}/>
                    <Route exact render={() => <div>无法匹配</div>}/>
                </RRSwitch>
            </App>
        )}/>
    </Router>
);

export default RouteConfig;