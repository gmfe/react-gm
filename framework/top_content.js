import React from 'react';
import PropTypes from 'prop-types';
import {Flex, Trigger} from '../src/index';
import _ from 'lodash';
import classNames from 'classnames';

class TopContent extends React.Component {
    render() {

        const {logo, navList, navSelected, jump, fixedTop} = this.props;

        const jumpTerm = jump && (
            <Flex alignEnd className="gm-framework-top-content-default-jump">
                <Trigger type="hover" right component={<div/>} popup={(
                    <div className="list-group">
                        {_.map(jump.jumpList, v => (
                            <a
                                target="_blank"
                                key={v.link}
                                className="list-group-item"
                                href={v.link}
                            >{v.text}</a>
                        ))}
                    </div>
                )}>
                    <a href={jump.jumpLink} target='_blank'>{jump.name}</a>
                </Trigger>
            </Flex>
        );

        return (
            <div className="gm-framework-top-content-default">
                <Flex column className="gm-framework-top-content-default-inner gm-box-shadow-bottom"
                      style={{top: fixedTop}}>
                    <Flex flex alignStretch className="gm-framework-container">
                        <Flex alignCenter>
                            {logo}
                        </Flex>
                        <Flex flex/>
                        {navList && (
                            <Flex alignEnd className="gm-framework-top-content-default-nav">
                                {_.map(navList, v => (
                                    <a
                                        key={v.link}
                                        href={v.link}
                                        className={classNames({
                                            'active': v === navSelected
                                        })}
                                    >{v.text}</a>
                                ))}
                            </Flex>
                        )}
                        {jumpTerm}
                    </Flex>
                </Flex>
            </div>
        );
    }
}

TopContent.propTypes = {
    logo: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    navList: PropTypes.array, // [{text, link}]
    navSelected: PropTypes.any,
    jump: PropTypes.object,
    fixedTop: PropTypes.string
};

export default TopContent;