import React from 'react';
import {Flex, Emitter} from '../src/index';
import createHashHistory from 'history/createHashHistory';

import NavConfigDoc from './doc/nav.config';
import NavConfigStandard from './standard/nav.config';

import queryString from 'query-string';
import {withRouter} from 'react-router-dom';

import {Framework, TopContent} from '../framework';
import Logo from './logo';

const history = createHashHistory();

@withRouter
class App extends React.Component {
    constructor(props) {
        super(props);
        this.doScrollToAnchor = ::this.doScrollToAnchor;
        this.handleClickAnchor = ::this.handleClickAnchor;
    }

    componentDidMount() {
        Emitter.on('DEMO-PAGE-LOADED', () => {
            console.log('DEMO-PAGE-LOADED');
            this.doScrollToAnchor();
        });
    }

    doScrollToAnchor() {
        const {anchor} = queryString.parse(this.props.location.search);
        if (anchor) {
            const dom = window.document.getElementById(anchor);
            if (dom) {
                const top = dom.offsetTop;
                window.scroll(0, top);
            }
        }
    }

    handleClickAnchor(e) {
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

    renderTopContent() {

        const navList = [
            {text: 'UI规范', link: '#/standard'},
            {text: '组件', link: '#/doc/About'}
        ];

        return (
            <TopContent
                fixedTop="0px"
                logo={(
                    <Flex alignCenter style={{fontSize: '20px'}}>
                        <svg width="28" height="28" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M 110 10 L 10 10 L 10 110 L 110 110 L 110 50 L 75 85 L 75 50 L 40 85"
                                style={{
                                    fill: 'none',
                                    stroke: 'black',
                                    strokeWidth: 10,
                                    strokeLinejoin: 'round'
                                }}
                            />
                        </svg>
                        <span className="gm-gap-10"/>
                        <span>ReactGM </span>
                        <small>&nbsp;&nbsp;by gmfe</small>
                        <span className="gm-gap-10"/>
                        <a
                            className="github-button"
                            href="https://github.com/gmfe/react-gm"
                            data-show-count="true"
                            aria-label="Star gmfe/react-gm on GitHub"
                        >Star</a>
                    </Flex>
                )}
                navList={navList}
            />
        );
    }

    renderMenu() {
        const {location: {pathname}} = this.props;
        if (pathname.startsWith('/doc')) {
            return <NavConfigDoc/>;
        } else if (pathname.startsWith('/standard')) {
            return <NavConfigStandard/>;
        } else {
            return null;
        }
    }

    render() {
        const {children, location: {pathname}} = this.props;

        return (
            <Framework
                topContent={this.renderTopContent()}
                menu={this.renderMenu()}
            >
                <div onClick={this.handleClickAnchor}>
                    {children}
                    {pathname === '/doc/About' && <Logo/>}
                </div>
            </Framework>
        );
    }
}

export default App;