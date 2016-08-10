import React, {PropTypes} from 'react';
import _ from 'underscore';
import Flex from './flex';
import classNames from 'classnames';
import Trigger from './trigger';
// 略复杂了，脱离初衷，应该把单选和多选版本分开，改代码请周知

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
            value: props.selected && props.selected.name || '',
            selected: getPropsSelected(props)
        };
        this.searchSelect = null;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            selected: getPropsSelected(nextProps)
        });
    }

    renderOverlay() {
        const {list, listMaxHeight, inputClassName} = this.props;
        if (list.length === 0) {
            return undefined;
        }
        return (
            <div className="list-group" style={{maxHeight: listMaxHeight}}>
                {_.map(list, (value, i) => {
                    return <a
                        key={i}
                        className={classNames('list-group-item', inputClassName, {
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
        );
    }

    render() {
        return (
            <div ref={ref => {
                this.searchSelect = ref;
            }} className={classNames("gm-search-select", this.props.className)}>
                <Flex className="gm-search-select-input">
                    {this.props.multiple ? _.map(this.state.selected, (value, i) => (
                        <Flex key={i} alignStart className="selected">
                            {value.name}
                            <button
                                type="button"
                                className="close"
                                onClick={this.handleClose.bind(this, value)}
                            >&times;</button>
                        </Flex>
                    )) : undefined}
                    <Trigger
                        component={<Flex flex/>}
                        popup={this.renderOverlay()}
                    >
                        <input
                            ref="target"
                            type="text"
                            value={this.state.value}
                            onBlur={::this.handleBlur}
                            onChange={::this.handleChange}
                            onKeyDown={::this.handleKeyDown}
                            placeholder={this.props.placeholder}
                        />
                    </Trigger>
                </Flex>
            </div>
        );
    }

    handleBlur(event) {
        // 慎用blur，在选择的之前会出发blur
        event.preventDefault();
        const {multiple} = this.props;
        // 多选不处理
        if (!multiple) {
            // 延迟下，500s应该够了。另外selected应该在此时获取，才是最新的selected
            setTimeout(() => {
                const {selected} = this.props;
                this.handleChange(event, selected && selected.name || '');
            }, 500);
        }
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
            value: this.props.multiple ? '' : value.name
        });
        // 单选选后关闭
        if (!this.props.multiple) {
            // 要异步
            setTimeout(() => {
                this.searchSelect.click();
            }, 0);
        }
    }

    handleChange(event, v) {
        clearTimeout(this.timer);
        const value = v || event.target.value;
        this.setState({
            value
        });

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
    listMaxHeight: '250px',
    delay: 500,
    multiple: false,
    placeholder: ''
};

export default SearchSelect;