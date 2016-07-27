import React, {PropTypes} from 'react';
import _ from 'underscore';
import Flex from './flex';
import classNames from 'classnames';
import {Popover, OverlayTrigger} from 'react-bootstrap';

const getPropsSelected = props => {
    if (props.multiple) {
        if (props.selected) {
            return props.selected;
        } else {
            return [];
        }
    } else {
        if (props.selected) {
            return [props.selected];
        } else {
            return [];
        }
    }
};

class SearchSelect extends React.Component {
    constructor(props) {
        super(props);
        this.timer = null;

        this.state = {
            value: '',
            in: false,
            selected: getPropsSelected(props),
            id: '_gm_search_select_id' + (Math.random() + '').slice(2)
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            selected: getPropsSelected(nextProps)
        });
    }

    renderOverlay() {
        return (
            <Popover
                id={this.state.id}
                className="gm-search-select-overlay">
                {this.props.list.length > 0 ? (
                    <div className="list-group" style={{maxHeight: this.props.listMaxHeight}}>
                        {_.map(this.props.list, (value, i) => {
                            return <a
                                key={i}
                                className={classNames('list-group-item', this.props.inputClassName, {
                                    active: this.state.selected.indexOf(value) > -1
                                })}
                                onClick={this.handleSelect.bind(this, value)}>
                                {value.name}
                                {this.state.selected.indexOf(value) > -1 ? (
                                    <i className="glyphicon glyphicon-ok text-success pull-right"/>
                                ) : undefined}
                            </a>;
                        })}
                    </div>
                ) : undefined}
            </Popover>
        );
    }

    render() {
        return (
            <div className={classNames("gm-search-select", {"gm-search-select-empty": this.props.list.length === 0})}>
                <Flex className="gm-search-select-input">
                    {_.map(this.state.selected, (value, i) => (
                        <Flex key={i} alignStart className="selected">
                            {value.name}
                            <button type="button"
                                    className="close"
                                    onClick={this.handleClose.bind(this, value)}>&times;</button>
                        </Flex>
                    ))}
                    <Flex flex>
                        <OverlayTrigger
                            trigger="click"
                            rootClose
                            placement="bottom"
                            container={this}
                            overlay={this.renderOverlay()}
                            onEnter={::this.handleEnter}
                            onExit={::this.handleExit}>
                            <input
                                ref="target"
                                type="text"
                                value={this.state.value}
                                name="value"
                                onChange={::this.handleChange}
                                onKeyDown={::this.handleKeyDown}
                                placeholder={this.props.placeholder}/>
                        </OverlayTrigger>
                    </Flex>
                </Flex>
            </div>
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

    handleKeyDown(event) {
        if (event.key === 'Backspace') {
            if (event.target.value === '') {
                const selected = this.state.selected;
                selected.pop();
                this.doSelect(selected);
            }
        }
    }

    handleClose(value) {
        const selected = _.filter(this.state.selected, v => v !== value);
        this.doSelect(selected);
    }

    // arr
    doSelect(selected) {
        if (this.props.multiple) {
            this.props.onSelect(selected.length === 0 ? null : selected);
        } else {
            this.props.onSelect(selected.length === 0 ? null : selected.pop());
        }
        this.props.onSearch('');
    }

    handleSelect(value, event) {
        event.preventDefault();
        if (event.target.className.indexOf('active') > -1) {
            this.doSelect(_.filter(this.state.selected, v => v !== value));
        } else {
            this.doSelect(this.state.selected.concat(value));
        }
        this.setState({
            value: ''
        });
        if (this.state.in) {
            this.refs.target.click();
        }
    }

    handleChange(event) {
        clearTimeout(this.timer);
        const value = event.target.value;
        this.setState({
            value
        });

        if (!this.state.in) {
            this.refs.target.click();
        }

        setTimeout(() => {
            this.props.onSearch(value);
        }, this.props.delay);
    }
}
SearchSelect.propTypes = {
    list: PropTypes.array.isRequired,
    selected: PropTypes.any,
    onSearch: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    delay: PropTypes.number,
    listMaxHeight: PropTypes.string,
    multiple: PropTypes.bool,
    placeholder: PropTypes.string
};

SearchSelect.defaultProps = {
    value: '',
    listMaxHeight: '250px',
    delay: 500,
    multiple: false,
    placeholder: ''
};

export default SearchSelect;