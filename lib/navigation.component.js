import React from 'react';
import _ from 'underscore';
import {Collapse} from 'react-bootstrap';

let Navigation = React.createClass({
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
            <div className="gm-navigation">
                <ul>
                    {_.map(data, value => (
                        <li key={value.key}
                            className={"gm-navigation-cell gm-navigation-level1" + this.getCurrentClassName(value.key)}
                            onClick={this.handleToggle.bind(this, value)}>
                            <div className="gm-navigation-title">{value.title}</div>
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
                                                <div className="gm-navigation-title">{value.title}</div>
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