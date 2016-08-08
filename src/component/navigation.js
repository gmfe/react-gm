import React from 'react';
import _ from 'underscore';
import classNames from 'classnames';
import Flex from './flex';

const noop = () => {
};

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            select: this.props.select
        };
    }

    processData() {
        return _.map(this.state.data, value => {
            value.open = value.open || false;
            if (value.sub) {
                _.map(value.sub, val => {
                    val.open = val.open || false;
                    if (val.key === this.state.select) {
                        value.open = true;
                    }
                });
            }
            return value;
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            select: nextProps.select
        });
    }

    render() {
        const data = this.processData();
        return (
            <div className={classNames("gm-navigation", this.props.className)}>
                <ul className="gm-navigation-level1">
                    {_.map(data, value => (
                        <li key={value.key}>
                            <Flex alignCenter className={classNames("gm-navigation-title", {
                                'current': this.state.select === value.key
                            })}>
                                <Flex flex onClick={this.handleClick.bind(this, value)}>{value.title}</Flex>
                                {value.sub && (
                                    <span className={classNames("glyphicon", {
                                        'glyphicon-menu-up': value.open,
                                        'glyphicon-menu-down': !value.open
                                    })}/>
                                )}
                            </Flex>
                            {value.sub && value.open ? (
                                <ul className="gm-navigation-level2">
                                    {_.map(value.sub, val => (
                                        <li key={val.key}>
                                            <div
                                                className={"gm-navigation-title" + this.getCurrentClassName(val.key)}
                                                onClick={this.handleClick.bind(this, val)}>{val.title}</div>
                                        </li>
                                    ))}
                                </ul>
                            ) : undefined}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    componentDidMount() {
        console.error('Navigation are deprecated!');
    }

    handleClick(value) {
        if (value.sub) {
            value.open = !value.open;
            this.setState(this.state);
        } else {
            this.setState({
                select: value.key
            });
            this.props.onSelect(value.key);
        }
    }
}

Navigation.defaultProps = {
    data: [],
    select: null,
    onSelect: noop
};

export default Navigation;