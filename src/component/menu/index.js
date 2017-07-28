import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Flex from '../flex';

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleTriggerMenu = ::this.handleTriggerMenu;
        this.isEmptyObject = ::this.isEmptyObject;
        this.gitActiveMenuItem = ::this.gitActiveMenuItem;

        this.state = {
            on: true
        };
    }

    isEmptyObject(obj) {
        for (let key in obj){
            if(obj.hasOwnProperty(key)){
                return false;
            }
        }
        return true;
    }

    gitActiveMenuItem(data, selected) {
        let menuItemDisabled = false;

        if (selected && !this.isEmptyObject(selected)) {
            _.map(data.sub, (v) => {
                if (selected === v) {
                    menuItemDisabled = true;
                }
            });
        }

        return menuItemDisabled;
    }

    handleTriggerMenu() {
        const {on} = this.state;

        if (on) {
            this.setState({
                on: false
            });
        } else {
            this.setState({
                on: true
            });
        }
    }

    componentWillReceiveProps(newProps){
        const {on} = this.state;
        const {data, selected} = newProps;
        const menuItemDisabled = this.gitActiveMenuItem(data, selected);

        if(menuItemDisabled && !on){
            this.setState({
                on: true
            });
        }
    }

    render() {
        const {data, selected, onSelect} = this.props;
        const {on} = this.state;
        const menuItemDisabled = this.gitActiveMenuItem(data, selected);

        return (
            <div className={classNames('gm-menu', {
                'gm-menu-close-status': !on
            })}>
                <Flex alignCenter justifyBetween onClick={menuItemDisabled ? null : this.handleTriggerMenu} className={classNames("gm-menu-title", {
                    'gm-menu-title-disabled': menuItemDisabled
                })}>
                    <span>{data.name}</span>
                    <i className={classNames('gm-margin-right-15 ifont', {
                        'ifont-down-small': !on,
                        'ifont-up-small': on
                    })}/>
                </Flex>
                <div className={classNames("gm-menu-sub", {
                    'gm-menu-sub-opened': on
                })}>
                    {_.map(data.sub, (v, k)=>(
                            <span
                                key={k}
                                onClick={onSelect.bind(this, v)}
                                className={selected === v ? 'active' : ''}
                            >{v.name}</span>
                        )
                    )}
                </div>
            </div>
        );
    }
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired,
    selected: PropTypes.object
};

class Menu extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const {data, onSelect, selected} = this.props;

        if (!data) {
            return <div/>;
        }

        return (
            <ul className="gm-menu-y gm-border">
                {
                    _.map(
                        data, (value, i) => {
                            return <MenuItem
                                key={i}
                                data={value}
                                selected={selected}
                                onSelect={onSelect}
                            />;
                        }
                    )
                }
            </ul>
        );
    }
}

Menu.propTypes = {
    data: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    selected: PropTypes.object
};

export default Menu;

