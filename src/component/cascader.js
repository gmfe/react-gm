import React, {PropTypes} from 'react';
import {Popover, OverlayTrigger} from 'react-bootstrap';
import _ from 'underscore';
import classNames from 'classnames';
import Flex from './flex';

const noop = () => {
};

class Cascader extends React.Component {
    static propTypes = {
        data: PropTypes.array.isRequired,
        value: PropTypes.array,
        defaultValue: PropTypes.array,
        onChange: PropTypes.func
    };

    static defaultProps = {
        onChange: noop
    };


    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value || [],
            id: '_gm_cascader_id' + (Math.random() + '').slice(2)
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
            <Flex className="gm-cascader-list">
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
        this.props.onChange(selected);
    }

    renderOverlay() {
        return (
            <Popover
                id={this.state.id}
                placement="bottom"
                positionLeft={0}
                className="gm-cascader-overlay">
                {this.renderList()}
            </Popover>
        );
    }

    render() {
        return (
            <div className="gm-cascader">
                <OverlayTrigger
                    trigger="click"
                    rootClose
                    placement="bottom"
                    container={this}
                    overlay={this.renderOverlay()}
                >
                    {this.props.children}
                </OverlayTrigger>
            </div>
        );
    }
}

export default Cascader;