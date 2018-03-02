import React from 'react';
import PropTypes from 'prop-types';
import {Flex, LayoutRoot, Emitter} from '../src/index';
import classNames from 'classnames';
import {setTitle} from 'gm-util';
import _ from 'lodash';

class Framework extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            blur: false
        };
    }

    componentDidMount() {
        // 关闭。 用处不大
        Emitter.on(Emitter.TYPE.MODAL_SHOW, () => {
            window.document.body.classList.add('gm-overflow-hidden');
            // this.setState({blur: true});
        });

        Emitter.on(Emitter.TYPE.MODAL_HIDE, () => {
            window.document.body.classList.remove('gm-overflow-hidden');
            // this.setState({blur: false});
        });

        Emitter.on(Emitter.TYPE.TITLE_CHANGE, (title) => {
            setTitle(title);
        });

        window.addEventListener('scroll', _.throttle(this.doScroll, 200));
    }

    doScroll = () => {
        Emitter.emit(Emitter.TYPE.BROWSER_SCROLL);
    };

    render() {
        let {showMobileMenu, topContent, topHeader, menu, breadcrumb, copyright, children} = this.props;

        return (
            <div className={classNames("gm-framework", {
                "gm-framework-mobile-menu": showMobileMenu
            })}>
                <div className={classNames("gm-framework-inner", {
                    'gm-filter-blur-transition': this.state.blur
                })}>
                    <div className="gm-framework-full-height">
                        <div className="gm-framework-top">
                            {topHeader && (
                                <div className="gm-framework-top-header">{topHeader}</div>
                            )}
                            {topContent && (
                                <div className="gm-framework-top-content">{topContent}</div>
                            )}
                        </div>
                        <div className="gm-framework-center">
                            <Flex className="gm-framework-container">
                                {menu && <div className="gm-framework-left">{menu}</div>}
                                <Flex flex column className="gm-framework-right">
                                    {breadcrumb && <div className="gm-framework-breadcrumb">{breadcrumb}</div>}
                                    <div className="gm-framework-content">{children}</div>
                                </Flex>
                            </Flex>
                        </div>
                    </div>
                    {copyright && <div className="gm-framework-copyright">{copyright}</div>}
                </div>
                <LayoutRoot/>
            </div>
        );
    }
}

Framework.scrollTop = function () {
    window.scroll(0, 0);
};

Framework.propTypes = {
    showMobileMenu: PropTypes.bool,
    topContent: PropTypes.element,
    topHeader: PropTypes.element,
    menu: PropTypes.element,
    breadcrumb: PropTypes.element,
    copyright: PropTypes.oneOfType([PropTypes.element, PropTypes.bool])
};

export default Framework;