import 'gm-bootstrap/dist/css/bootstrap.css';
import './index.less';
import 'markdown-it-react-loader/index.css';
import 'highlight.js/styles/default.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Flex as GMFlex, LayoutRoot} from '../src/index';
import {Router, Route, hashHistory, IndexRedirect} from 'react-router';
import _ from 'underscore';

import Demo from './component/demo';

import NavConfigDoc from './doc/nav.config';
import About from './doc/About.md';
import Flex from './doc/Flex.md';
import Loading from './doc/Loading.md';
import NProgress from './doc/NProgress.md';
import Cascader from './doc/Cascader.md';
import CascaderSelect from './doc/CascaderSelect.md';
import AdvanceSelect from './doc/AdvanceSelect.md';
import DropSelect from './doc/DropSelect.md';
import SearchSelect from './doc/SearchSelect.md';
import FilterSearchSelect from './doc/FilterSearchSelect.md';
import Sheet from './doc/Sheet.md';
import SheetColumn from './doc/SheetColumn.md';
import SheetAction from './doc/SheetAction.md';
import SheetSelect from './doc/SheetSelect.md';
import SheetBatchAction from './doc/SheetBatchAction.md';
import Pagination from './doc/Pagination.md';
import ImportLead from './doc/ImportLead.md';
import Storage from './doc/Storage.md';
import Calendar from './doc/Calendar.md';
import DatePicker from './doc/DatePicker.md';
import DateRangePicker from './doc/DateRangePicker.md';
import TimeSpan from './doc/TimeSpan.md';
import Tip from './doc/Tip.md';
import Dialog from './doc/Dialog.md';
import Trigger from './doc/Trigger.md';
import Droper from './doc/Droper.md';
import Switcher from './doc/Switcher.md';
import InputNumber from './doc/InputNumber.md';
import Modal from './doc/Modal.md';
import Collapse from './doc/Collapse.md';
import DropDown from './doc/DropDown.md';

import NavConfigStandard from './standard/nav.config';
import StandardAbout from './standard/About.md';
import Color from './standard/Color.md';
import TreeSelect from './doc/TreeSelect.md';

const docMap = {
    About,
    Flex,
    Loading,
    NProgress,
    Cascader,
    CascaderSelect,
    AdvanceSelect,
    DropSelect,
    SearchSelect,
    FilterSearchSelect,
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
    Droper,
    Switcher,
    InputNumber,
    Modal,
    Collapse,
    DropDown,
    TreeSelect
};

const standardMap = {
    StandardAbout,
    Color
};

const setNavCurrent = () => {
    _.each(document.querySelectorAll('.demo-left a'), element => element.className = '');
    const dom = document.querySelector('.demo-left a[href="' + location.hash + '"]');
    if (dom) {
        dom.className = 'active';
    }
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleAnchor = ::this.handleAnchor;
        this.handleNav = ::this.handleNav;
        this.doScrollToAnchor = ::this.doScrollToAnchor;
    }

    componentDidMount() {
        this.doScrollToAnchor();
    }

    componentDidUpdate() {
        // TODO 目前应该就只有路由变化
        this.doScrollToAnchor();
    }

    doScrollToAnchor() {
        const {anchor} = this.props.location.query;
        if (anchor) {
            const dom = document.getElementById(anchor);
            if (dom) {
                const top = dom.offsetTop;
                console.log(top);
                setTimeout(() => {
                    document.body.scrollTop = top;
                }, 100);
            }
        }
    }

    // 处理文档的anchor
    handleAnchor(e) {
        const {tagName, className} = e.target;
        const {query, pathname} = this.props.location;
        if (tagName === 'A' && className === 'header-anchor') {
            e.preventDefault();

            const anchor = e.target.parentNode.id;
            if (query.anchor !== anchor) {
                hashHistory.push({
                    pathname,
                    query: {
                        anchor
                    }
                });
            }
        }
    }

    // 处理左侧导航的点击
    handleNav(e) {
        const {tagName} = e.target;
        if (tagName === 'A') {
            document.body.scrollTop = 0;
        }
    }

    handleIntro() {
        require.ensure([], require => {
            require('./intro').start();
        });
    }

    render() {
        // 暴力，莫喷
        setTimeout(() => {
            setNavCurrent();
        }, 10);
        return (
            <div className="demo">
                <div className="demo-header">
                    <GMFlex className="container">
                        <a href={location.pathname} className="gm-flex gm-flex-align-center gm-header-logo">
                            <span>ReactGM </span>
                            <small>&nbsp;&nbsp;by gmfe</small>
                        </a>
                        <GMFlex flex justifyEnd alignCenter className="gm-header-nav">
                            <a href="javascript:;" onClick={this.handleIntro}>功能引导？TODO</a>
                            <a href="#/standard" data-intro="点这里看UI规范" data-step="1">UI规范TODO</a>
                            <a href="#/doc" data-intro="点这里看组件" data-step="2">组件</a>
                        </GMFlex>
                    </GMFlex>
                </div>
                <GMFlex className="demo-center container">
                    <div className="demo-left" onClick={this.handleNav}>
                        {location.hash.indexOf('#/standard') > -1 ? <NavConfigStandard/> : <NavConfigDoc/>}
                    </div>
                    <GMFlex flex column className="demo-content doc markdown-body" onClick={this.handleAnchor}>
                        {this.props.children}
                    </GMFlex>
                </GMFlex>
                <LayoutRoot/>
            </div>
        );
    }
}

class Doc extends React.Component {
    render() {
        const {doc} = this.props.params;
        return React.createElement(docMap[doc || 'About']);
    }
}

class Standard extends React.Component {
    render() {
        const {doc} = this.props.params;
        return React.createElement(standardMap[doc || 'StandardAbout']);
    }
}

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRedirect to='/doc'/>
            <Route path="standard(/:doc)" component={Standard}/>
            <Route path="doc">
                <IndexRedirect to='/doc/About'/>
                <Route path=":doc" component={Doc}/>
            </Route>

            <Route path="/demo" component={Demo}/>
        </Route>
    </Router>
), document.getElementById('appContainer'));