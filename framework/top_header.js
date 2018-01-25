import React from 'react';
import PropTypes from 'prop-types';
import {Flex, Popover} from '../src/index';
import _ from 'lodash';

class TopHeader extends React.Component {
    render() {
        const {text, settings, onMenuBtnClick} = this.props;

        return (
            <div className="gm-framework-top-header-default">
                <Flex className="gm-framework-top-header-default-inner">
                    <Flex
                        alignCenter
                        className="gm-framework-top-header-default-mobile-nav"
                        onClick={onMenuBtnClick}
                    >
                        <i className="glyphicon glyphicon-menu-hamburger"/>
                    </Flex>
                    <Flex flex/>
                    <Flex>{text}</Flex>
                    {settings && (
                        <div className="gm-framework-top-header-default-settings">
                            <Popover showArrow type="click" right popup={(
                                <div className="list-group gm-margin-bottom-0"
                                     style={{minWidth: '100px', color: 'in'}}>
                                    {_.map(settings, (v, i) => (
                                        <a key={i + '_' + v.text} href="javascript:;"
                                           className="list-group-item text-center gm-padding-10 gm-margin-0 gm-border-top-0"
                                           onClick={v.onClick}>{v.text}</a>
                                    ))}
                                </div>
                            )}>
                                <i className="glyphicon glyphicon-cog gm-padding-lr-10 gm-cursor"/>
                            </Popover>
                        </div>
                    )}
                </Flex>
            </div>
        );
    }
}

TopHeader.propTypes = {
    text: PropTypes.string,
    settings: PropTypes.array, // [{text, onClick}]
    onMenuBtnClick: PropTypes.func
};

export default TopHeader;