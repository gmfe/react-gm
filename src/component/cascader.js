import React, {PropTypes} from 'react';
import {Popover, OverlayTrigger} from 'react-bootstrap';
import _ from 'underscore';
import classNames from 'classnames';
import Flex from './flex';

const noop = () => {
};

class Cascader extends React.Component {
    static propTypes = {
        // 格式 [{value: 1, name: '深圳', children: [{...}]}]
        data: PropTypes.array.isRequired,
        // [1,2,...]
        value: PropTypes.array,
        // 同上
        defaultValue: PropTypes.array,
        // 会提供整个value回去
        onChange: PropTypes.func,
        // 没有this.props.children时有效
        inputProps: PropTypes.object
    };

    static defaultProps = {
        onChange: noop,
        inputProps: {}
    };


    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value || [],
            id: '_gm_cascader_id' + (Math.random() + '').slice(2),
            in: false
        };
    }

    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({
                value: nextProps.value || []
            });
        }
    }

    getList() {
        let result = [this.props.data];
        _.each(this.state.value, (value, i) => {
            const match = _.find(result[i], v => v.value === value);
            if (match) {
                if (match.children) {
                    result.push(match.children);
                }
            }
        });

        return result;
    }

    renderList() {
        return (
            <Flex className={classNames("gm-cascader-list", this.props.className)}>
                {_.map(this.getList(), (value, i) => (
                    <Flex column key={i} className="list-group gm-block">
                        {_.map(value, v => (
                            <a key={v.value}
                               title={v.name}
                               onClick={this.handleSelect.bind(this, v, i)}
                               className={classNames("list-group-item", {
                            active: v.value === this.state.value[i]
                            })}
                            >{v.name}</a>
                        ))}
                    </Flex>
                ))}
            </Flex>
        );
    }

    handleSelect(value, index) {
        const selected = this.state.value;
        selected[index] = value.value;
        selected.length = index + 1;
        this.setState({
            selected
        });
        this.props.onChange(selected);
    }

    renderOverlay() {
        return (
            <Popover
                id={this.state.id}
                placement="bottom"
                className="gm-cascader-overlay"
            >
                {this.renderList()}
            </Popover>
        );
    }

    handleEnter() {
        this.setState({
            in: true
        });
    }

    handleExit() {
        this.setState({
            in: false
        });
    }

    renderChildren() {
        let value = [];
        if (this.state.value.length > 0) {
            _.each(this.state.value, (v, i) => {
                const match = _.find(i === 0 ? this.props.data : value[i - 1].children, val => {
                    return v === val.value;
                });
                value.push(match);
            });
        }
        return (
            <div className="gm-cascader-input">
                <i className={classNames("glyphicon glyphicon-menu-down", {
                "active": this.state.in
                })}></i>
                <input type="text" onChange={noop}
                       value={_.map(value, v => v.name).join(',')} {...this.props.inputProps}
                       className={classNames("form-control", this.props.inputProps.className)}/>
            </div>
        );
    }

    render() {
        return (
            <div className="gm-cascader">
                <OverlayTrigger
                    trigger={"click"}
                    rootClose
                    placement="bottom"
                    container={this}
                    overlay={this.renderOverlay()}
                    onEnter={::this.handleEnter}
                    onExit={::this.handleExit}
                >
                    {this.props.children ? this.props.children : this.renderChildren()}
                </OverlayTrigger>
            </div>
        );
    }
}

export default Cascader;