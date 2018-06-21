import React from 'react';
import {Flex, Emitter, Storage, setLocale} from '../src/index';
import createHashHistory from 'history/createHashHistory';
import NavConfigDoc from './doc.nav.config';
import queryString from 'query-string';
import {withRouter} from 'react-router-dom';
import {Framework, RightTop} from '../frame';

const history = createHashHistory();

const version = __REACT_GM_VERSION__; //eslint-disable-line

@withRouter
class App extends React.Component {
    constructor(props) {
        super(props);
        this.doScrollToAnchor = ::this.doScrollToAnchor;
        this.handleClickAnchor = ::this.handleClickAnchor;

        this.state = {
            lng: Storage.get('lng') || 'zh'
        };

        if (this.state.lng) {
            setLocale(this.state.lng);
        }
    }

    componentDidMount() {
        Emitter.on('DEMO-PAGE-LOADED', () => {
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

    renderMenu() {
        const {location: {pathname}} = this.props;
        let nav = null;

        if (pathname.startsWith('/doc')) {
            nav = <NavConfigDoc/>;
        }

        return (
            <div style={{
                width: "230px"
            }}>
                <div style={{height: '40px'}} className="gm-cursor" onClick={() => window.location.href = '/'}>
                    <Flex alignCenter className="gm-border-bottom" style={{
                        height: "40px",
                        position: "fixed",
                        left: 0,
                        width: "230px",
                        zIndex: 101,
                        background: 'white',
                        paddingLeft: '10px'
                    }}>
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
                        <span>ReactGM</span>
                        <span className="gm-gap-10"/>
                        <a
                            className="github-button"
                            href="https://github.com/gmfe/react-gm"
                            data-show-count="true"
                            aria-label="Star gmfe/react-gm on GitHub"
                        >Star</a>
                    </Flex>
                </div>
                {nav}
            </div>
        );
    }

    render() {
        const {children} = this.props;

        return (
            <Framework
                leftWidth="230px"
                rightTop={<RightTop
                    leftWidth="230px"
                    info={(
                        <div className="gm-padding-lr-10">
                            <select value={this.state.lng} onChange={e => {
                                this.setState({lng: e.target.value});
                                setLocale(e.target.value);
                            }}>
                                <option value="en">English</option>
                                <option value="zh">中文</option>
                            </select>
                            &nbsp;
                            v{version}
                        </div>
                    )}
                />}
                menu={this.renderMenu()}
            >
                <div onClick={this.handleClickAnchor}>
                    {children}
                </div>
            </Framework>
        );
    }
}

export default App;