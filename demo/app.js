import React from 'react';
import {Flex as GMFlex, LayoutRoot} from '../src/index';
import createHashHistory from 'history/createHashHistory';
import _ from 'lodash';

import NavConfigDoc from './doc/nav.config';
import NavConfigStandard from './standard/nav.config';

import queryString from 'query-string';

const history = createHashHistory();

const setNavCurrent = () => {
    _.each(window.document.querySelectorAll('.demo-left a'), element => element.className = '');
    const dom = window.document.querySelector('.demo-left a[href="' + window.location.hash + '"]');
    if (dom) {
        dom.className = 'active';
    }
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.doAnchor = ::this.doAnchor;
        this.handleNav = ::this.handleNav;
        this.doScrollToAnchor = ::this.doScrollToAnchor;
        this.handleLogo = ::this.handleLogo;
    }

    componentDidMount() {
        // this.doScrollToAnchor();
    }

    componentDidUpdate() {
        // TODO 目前应该就只有路由变化
        // this.doScrollToAnchor();
    }

    doScrollToAnchor() {
        const {anchor} = queryString.parse(this.props.location.search);
        if (anchor) {
            const dom = window.document.getElementById(anchor);
            if (dom) {
                const top = dom.offsetTop;
                setTimeout(() => {
                    window.document.body.scrollTop = top;
                }, 100);
            }
        }
    }

    // 处理文档的anchor
    doAnchor(e) {
        const {tagName, className} = e.target;
        const {search, pathname} = this.props.location;

        const preAnchor = queryString.parse(search).anchor;

        if (tagName === 'A' && className === 'header-anchor') {
            e.preventDefault();

            const anchor = e.target.parentNode.id;
            if (preAnchor !== anchor) {
                history.push({
                    pathname,
                    search: queryString.stringify({anchor})
                });
            }
        }
    }

    // 处理左侧导航的点击
    handleNav(e) {
        const {tagName} = e.target;
        if (tagName === 'A') {
            window.document.body.scrollTop = 0;
        }
    }

    handleLogo() {
        window.location.href = window.location.pathname;
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
                        <div onClick={this.handleLogo} className="gm-flex gm-flex-align-center gm-header-logo">
                            <svg width="28" height="28" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 110 10 L 10 10 L 10 110 L 110 110 L 110 50 L 75 85 L 75 50 L 40 85" style={{
                                    fill: 'none',
                                    stroke: 'black',
                                    strokeWidth: 10,
                                    strokeLinejoin: 'round'
                                }}/>
                            </svg>
                            <span className="gm-gap-10"/>
                            <span>ReactGM </span>
                            <small>&nbsp;&nbsp;by gmfe</small>
                            <span className="gm-gap-10"/>
                            <a className="github-button" href="https://github.com/gmfe/react-gm" data-show-count="true"
                               aria-label="Star gmfe/react-gm on GitHub">Star</a>
                        </div>
                        <GMFlex flex justifyEnd alignCenter className="gm-header-nav">
                            <a href="#/standard">UI规范</a>
                            <a href="#/doc">组件</a>
                        </GMFlex>
                    </GMFlex>
                </div>
                <GMFlex className="demo-center container">
                    <div className="demo-left" onClick={this.handleNav}>
                        {window.location.hash.indexOf('#/standard') > -1 ? <NavConfigStandard/> : <NavConfigDoc/>}
                    </div>
                    <GMFlex flex column className="demo-content doc markdown-body" onClick={this.doAnchor}>
                        {this.props.children}
                    </GMFlex>
                </GMFlex>
                <LayoutRoot/>
            </div>
        );
    }
}

export default App;