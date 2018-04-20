import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Flex from '../flex';

function includeLink(clickItems, target) {
    return _.find(clickItems, item => item.link === target.link);
}

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getInitState();
    }

    getInitState = () => {
        let twoItem = {};
        let clickItems = [];
        const {data, selected} = this.props;
        _.each(data, one => {
            _.each(one.sub, two => {
                if (selected.includes(two.link)) {
                    twoItem = two;
                    clickItems.push(one);
                }
            });
        });

        return {
            clickItems,
            twoItem
        };
    };

    handleOne = (one, e) => {
        e.preventDefault();
        this.setState({
            clickItems: _.xor(this.state.clickItems, [one]),
            twoItem: one.sub[0]
        });
    };

    handleJumpOne = (one, e) => {
        e.preventDefault();
        this.setState({
            clickItems: _.xor(this.state.clickItems, [one])
        });
    };

    handleTwoClick = (two, e) => {
        e.preventDefault();

        this.setState({
            twoItem: two
        });
    };

    handleMouseLeave = () => {
        // 认真看，略复杂
        let {clickItems} = this.state;
        const initState = this.getInitState();

        // getInitState 的 clickItems 只有一个
        if (includeLink(clickItems, initState.clickItems[0])) {
            clickItems = [initState.clickItems[0]];
        }
        this.setState({
            twoItem: initState.twoItem,
            clickItems
        });
    };

    render() {
        const {
            onSelect,
            selected,
            data,
            jump,
            className,
            logo, // eslint-disable-line
            widths,
            ...rest
        } = this.props;

        const {clickItems, twoItem} = this.state;

        return (
            <Flex
                {...rest}
                className={classNames("gm-nav", className)}
                onMouseLeave={this.handleMouseLeave}
            >
                <div>
                    <Flex alignCenter justifyCenter className="gm-nav-logo">
                        {logo}
                    </Flex>
                    <div className="gm-nav-one">
                        {_.map(data, (one, oneI) => (
                            <div key={oneI + one.link} className={classNames({
                                'active': includeLink(clickItems, one)
                            })} style={{width: widths[0]}}>
                                <a
                                    href={one.link}
                                    onClick={this.handleOne.bind(this, one)}
                                >{one.name}</a>

                                <div className="gm-nav-two">
                                    {_.map(one.sub, (two, twoI) => (
                                        <a
                                            key={twoI + two.link}
                                            className={classNames({
                                                'active': twoItem.link === two.link
                                            })}
                                            href={two.link}
                                            onClick={this.handleTwoClick.bind(this, two)}
                                        >{two.name}</a>
                                    ))}
                                </div>
                            </div>
                        ))}
                        {_.map(jump, (one, oneI) => (
                            <div key={oneI + one.link} className={classNames({
                                'active': includeLink(clickItems, one)
                            })} style={{width: widths[0]}}>
                                <a
                                    href={one.link}
                                    onClick={this.handleJumpOne.bind(this, one)}
                                >{one.name}</a>

                                <div className="gm-nav-two">
                                    {_.map(one.sub, (two, twoI) => (
                                        <a
                                            key={twoI + two.link}
                                            className={classNames({
                                                'active': twoItem.link === two.link
                                            })}
                                            target="_blank"
                                            href={two.link}
                                        >{two.name}</a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {twoItem.sub && (
                    <div>
                        <div className="gm-nav-there gm-border-right" style={{
                            width: widths[1]
                        }}>
                            {_.map(twoItem.sub, (v, i) => (
                                <a
                                    href={v.link}
                                    key={i + v.link}
                                    className={classNames({
                                        'active': selected.includes(v.link.split('?')[0])
                                    })}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onSelect(v);
                                    }}
                                >{v.name}</a>
                            ))}
                        </div>
                    </div>
                )}
            </Flex>
        );
    }
}

Nav.propTypes = {
    logo: PropTypes.element,
    // 三级菜单 [{link, name, sub: [{link, name, sub: [{link, name}]}]}]
    data: PropTypes.array.isRequired,
    jump: PropTypes.array,
    onSelect: PropTypes.func.isRequired,
    selected: PropTypes.string.isRequired,
    widths: PropTypes.array.isRequired // ["120px", "150px"]
};

export default Nav;
