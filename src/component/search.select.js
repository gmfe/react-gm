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
        this.______isMounted = false;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            selected: getPropsSelected(nextProps)
        });
    }

    componentWillUnmount() {
        this.______isMounted = true;
    }

    renderOverlay() {
        const {list, listMaxHeight, inputClassName, isGroupList} = this.props;

        if (isGroupList) {
            // 不存在group数据
            if (list.length === 0) {
                return undefined;
            }
            // 不存在其中一个group有数据
            if (!_.find(list, value => (value.children || []).length > 0)) {
                return undefined;
            }
            return (
                <div className="list-group" style={{maxHeight: listMaxHeight}}>
                    {_.map(list, (groupList, i) => {
                        return (
                            <div key={i} className="list-group-label">
                                <div>{groupList.label}</div>
                                {_.map(groupList.children, (value, i) => {
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
                    })}
                </div>
            );
        } else {
            if (list.length === 0) {
                return undefined;
            }
            return (
                <div className="list-group" style={{maxHeight: listMaxHeight}}>
                    {_.map(list, (value, i) => {
                        return (
                            <Flex
                                key={i}
                                alignCenter
                                className={classNames('list-group-item', inputClassName, {
                                    active: this.state.selected.indexOf(value) > -1
                                })}
                                onClick={this.handleSelect.bind(this, value)}
                            >
                                <Flex flex>{value.name}</Flex>
                                {this.state.selected.indexOf(value) > -1 ? (
                                    <i className="glyphicon glyphicon-ok text-success pull-right"/>
                                ) : undefined}
                            </Flex>
                        );
                    })}
                </div>
            );
        }
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
                            onFocus={this.handleFocus}
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

    handleFocus(event) {
        event.target.select();
    }

    handleBlur(event) {
        // 慎用blur，在选择的之前会出发blur
        event.preventDefault();
        const {multiple} = this.props;
        // 多选不处理
        if (!multiple) {
            // 延迟下，500s应该够了。另外selected应该在此时获取，才是最新的selected
            setTimeout(() => {
                if (!this.______isMounted) {
                    const {selected} = this.props;
                    this.doChange(selected && selected.name || '');
                }
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
                if (!this.______isMounted) {
                    this.searchSelect.click();
                }
            }, 0);
        }
    }

    doChange(value) {
        clearTimeout(this.timer);
        this.setState({
            value
        });

        this.timer = setTimeout(() => {
            if (!this.______isMounted) {
                this.props.onSearch(value);
            }
        }, this.props.delay);
    }

    handleChange(event) {
        this.doChange(event.target.value);
    }
}
SearchSelect.propTypes = {
    list: PropTypes.array.isRequired,
    isGroupList: PropTypes.bool,
    selected: PropTypes.any,
    onSearch: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    delay: PropTypes.number,
    listMaxHeight: PropTypes.string,
    multiple: PropTypes.bool,
    placeholder: PropTypes.string
};

SearchSelect.defaultProps = {
    isGroupList: false,
    listMaxHeight: '250px',
    delay: 500,
    multiple: false,
    placeholder: ''
};

export default SearchSelect;