import React from 'react';
import _ from 'underscore';
import {Collapse} from 'react-bootstrap';
import classnames from 'classnames';

let Navigation = React.createClass({
    getDefaultProps(){
        return {
            data: [],
            select: null,
            onSelect: () => {}
        };
    },
    getInitialState(){
        return {
            data: this.props.data,
            select: this.props.select
        };
    },
    processData(){
        return _.map(this.state.data, value => {
            value.open = value.open || false;
            if(value.sub){
                _.map(value.sub, val => {
                    val.open = val.open || false;
                    if(val.key === this.state.select){
                        value.open = true;
                    }
                });
            }
            return value;
        });
    },
    componentWillReceiveProps(nextProps){
        this.setState({
            select: nextProps.select
        });
    },
    render() {
        const data = this.processData();
        return (
            <div className={classnames("gm-navigation", this.props.className)}>
                <ul>
                    {_.map(data, value => (
                        <li key={value.key}
                            className={"gm-navigation-cell gm-navigation-level1" + this.getCurrentClassName(value.key)}>
                            <div className="gm-navigation-title" onClick={this.handleClick.bind(this, value)}>{value.title}</div>
                            {value.sub && (
                                <span
                                    className={"glyphicon gm-navigation-icon " + (value.open ? 'glyphicon-menu-up' : ' glyphicon-menu-down')}></span>
                            )}
                            {value.sub && (
                                <Collapse in={value.open}>
                                    <ul className="gm-navigation-cell gm-navigation-level2">
                                        {_.map(value.sub, val => (
                                            <li key={val.key}
                                                className={"gm-navigation-cell gm-navigation-sub-cell" + this.getCurrentClassName(val.key)}>
                                                <div className="gm-navigation-title" onClick={this.handleClick.bind(this, val)}>{val.title}</div>
                                            </li>
                                        ))}
                                    </ul>
                                </Collapse>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        );
    },
    handleClick(value){
        if(value.sub){
            this.handleToggle(value);
        }else{
            this.handleSelect(value);
        }
    },
    handleSelect(value){
        this.setState({
            select: value.key
        });
        this.props.onSelect(value.key);
    },
    handleToggle(value){
        // 先这样恶心处理吧
        value.open = !value.open;
        this.setState(this.state);
    },
    getCurrentClassName(key){
        return this.state.select === key ? ' current ' : ' ';
    }
});

export default Navigation;