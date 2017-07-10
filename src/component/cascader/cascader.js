import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';
import Flex from '../flex';
import Trigger from '../trigger';

class Cascader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value || []
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

    renderChildren() {
        const {data, valueRender, disabled} = this.props;
        let {inputProps} = this.props;

        let value = [];
        if (this.state.value.length > 0) {
            _.each(this.state.value, (v, i) => {
                const match = _.find(i === 0 ? data : value[i - 1].children, val => {
                    return v === val.value;
                });
                value.push(match);
            });
        }
        if(disabled) {
            inputProps = Object.assign({}, inputProps, {disabled});
        }

        return (
            <div className="gm-cascader-input">
                <input
                    {...inputProps}
                    type="text"
                    onChange={_.noop}
                    value={valueRender ? valueRender(value) : _.map(value, v => v.name).join(',')}
                    className={classNames("form-control", inputProps.className)}
                />
                <i className="gm-arrow-down"/>
            </div>
        );
    }

    render() {
        const {disabled} = this.props;
        return (
            <Trigger
                disabled={disabled}
                component={<div className="gm-cascader"/>}
                popup={this.renderOverlay()}
            >
                {this.props.children ? this.props.children : this.renderChildren()}
            </Trigger>
        );
    }
}

Cascader.propTypes = {
    // 格式 [{value: 1, name: '深圳', children: [{...}]}]
    data: PropTypes.array.isRequired,
    // [1,2,...]
    value: PropTypes.array,
    // 同上
    defaultValue: PropTypes.array,
    // 会提供整个value回去
    onChange: PropTypes.func,
    // 没有this.props.children时有效
    inputProps: PropTypes.object,
    valueRender: PropTypes.func,
    children: PropTypes.element,
    disabled: PropTypes.bool
};

Cascader.defaultProps = {
    onChange: _.noop,
    inputProps: {},
    disabled: false
};

export default Cascader;