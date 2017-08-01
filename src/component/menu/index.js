import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Flex from '../flex';

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleTriggerMenu = ::this.handleTriggerMenu;
        this.getMenuItemDisabled = ::this.getMenuItemDisabled;

        this.state = {
            collapse: false
        };
    }

    getMenuItemDisabled(data, selected) {
        let menuItemDisabled = false;

        if (selected && !_.isEmpty(selected)) {
            _.find(data.sub, (v) => {
                if (selected === v) {
                    menuItemDisabled = true;
                }
            });
        }
        return menuItemDisabled;
    }

    handleTriggerMenu() {
        const {collapse} = this.state;

        this.setState({
            collapse: !collapse
        });
    }

    componentWillReceiveProps(newProps){
        const {collapse} = this.state;
        const {data, selected} = newProps;
        const menuItemDisabled = !!this.getMenuItemDisabled(data, selected);

        if(menuItemDisabled && collapse){
            this.setState({
                collapse: false
            });
        }
    }

    render() {
        const {data, selected, onSelect} = this.props;
        const {collapse} = this.state;
        const menuItemDisabled = !!this.getMenuItemDisabled(data, selected);

        return (
            <div className='gm-menu'>
                <Flex alignCenter justifyBetween onClick={menuItemDisabled ? null : this.handleTriggerMenu} className={classNames("gm-menu-title", {
                    'gm-menu-title-disabled': menuItemDisabled
                })}>
                    <span>{data.name}</span>
                    <i className={classNames('gm-margin-right-15 ifont', {
                        'ifont-down-small': collapse,
                        'ifont-up-small': !collapse
                    })}/>
                </Flex>
                <div className={classNames("gm-menu-sub", {
                    'gm-menu-sub-opened': !collapse
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
    render() {
        const {data, onSelect, selected, id} = this.props;

        if (!data) {
            return <div/>;
        }

        return (
            <ul className="gm-menu-y gm-border" key={id}>
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
    id: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    selected: PropTypes.object
};

export default Menu;

