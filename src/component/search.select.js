import React, {PropTypes} from 'react';
import _ from 'underscore';
import Flex from './flex';
import classNames from 'classnames';

class SearchSelect extends React.Component {
    static propTypes = {
        selected: PropTypes.any,
        list: PropTypes.array.isRequired,
        onSearch: PropTypes.func.isRequired,
        onSelect: PropTypes.func.isRequired,
        delay: PropTypes.number,
        listMaxHeight: PropTypes.string,
        multiple: PropTypes.bool,
        placeholder: PropTypes.string
    };

    static defaultProps = {
        value: '',
        listMaxHeight: '250px',
        delay: 500,
        multiple: false,
        placeholder: ''
    };

    getPropsSelected(props) {
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
    }

    constructor(props) {
        super(props);
        this.timer = null;

        this.state = {
            value: '',
            show: false,
            selected: this.getPropsSelected(props)
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            selected: this.getPropsSelected(nextProps)
        });
    }

    render() {
        return (
            <div className="gm-search-select" onBlur={::this.handleBlur}>
                <Flex className="gm-search-select-input">
                    {_.map(this.state.selected, (value, i) => (
                        <Flex key={i} alignStart className="selected">
                            {value.name}
                            <button type="button" className="close"
                                    onClick={this.handleClose.bind(this, value)}>&times;</button>
                        </Flex>
                    ))}
                    <Flex flex>
                        <input type="text" value={this.state.value} name="value"
                               onChange={::this.handleChange} onFocus={::this.handleFocus}
                               onKeyDown={::this.handleKeyDown}
                               placeholder={this.props.placeholder}/>
                    </Flex>
                </Flex>
                {this.state.show && this.props.list.length > 0 ? (
                    <div className="list-group" style={{maxHeight: this.props.listMaxHeight}}>
                        {_.map(this.props.list, (value, i) => {
                            return <a
                                href="javascript:;"
                                key={i}
                                className={classNames('list-group-item', this.props.inputClassName, {
                                    disabled: this.state.selected.indexOf(value) > -1
                                })}
                                onClick={this.handleSelect.bind(this, value)}>
                                {value.name}
                                {this.state.selected.indexOf(value) > -1 ? (
                                    <i className="glyphicon glyphicon-ok text-success pull-right"></i>
                                ) : undefined}
                            </a>;
                        })}
                    </div>
                ) : undefined}
            </div>
        );
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

    handleFocus() {
        this.setState({
            show: true
        });
    }

    handleBlur() {
        // 延迟一下，这个居然比handleSelect触发快
        setTimeout(() => {
            this.setState({
                show: false
            });
        }, 100);
    }

    handleSelect(value, event) {
        event.preventDefault();
        this.doSelect(this.state.selected.concat(value));
        this.setState({
            value: '',
            show: false
        });
    }

    handleChange(event) {
        clearTimeout(this.timer);
        const value = event.target.value;
        this.setState({
            value,
            show: true
        });
        setTimeout(() => {
            this.props.onSearch(value);
        }, this.props.delay);
    }
}

export default SearchSelect;