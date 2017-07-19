import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Flex from '../flex';
import classNames from 'classnames';
import Trigger from '../trigger';
// 略复杂了，脱离初衷，应该把单选和多选版本分开，改代码请周知

// 在内部，this.state.selected 是个数组处理
const getPropsSelected = props => {
    if (props.multiple) {
        if (props.selected) {
            // 此时selected是个数组
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

        // 单选版本才设置value
        this.state = {
            value: props.selected && props.selected.name || '',
            selected: getPropsSelected(props),
            activeIndex: null  // 键盘上下键选中的index
        };

        this.searchSelect = null;
        this.searchSelectList = null;
        this.refInput = null;
        this.______isMounted = false;

        this.scrollTimer = null;

        this.handleFocus = ::this.handleFocus;
        this.handleBlur = ::this.handleBlur;
        this.handleChange = ::this.handleChange;
        this.getListItemCount = ::this.getListItemCount;

        console.warn('请尽量提供key（暂时无法检测key是否有传，暴力提示）');
        console.warn('SearchSelect(FilterSearchSelect) is deprecated. Use FilterSelect instead.');
    }

    componentWillReceiveProps(nextProps) {
        if ('selected' in nextProps) {
            this.setState({
                selected: getPropsSelected(nextProps),
                value: (nextProps.selected && nextProps.selected.name) || ''
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.activeIndex !== prevState.activeIndex && this.searchSelectList) {
            const dom = this.searchSelectList.querySelector('.list-group-item.line-selected');
            dom && dom.scrollIntoViewIfNeeded();
        }
    }

    componentWillUnmount() {
        this.______isMounted = true;
    }

    doScroll() {
        // 滚动到选择的地方。 不知道会发生什么，尽量来做容错
        if (this.searchSelectList) {
            // 选第一个
            const activeDOM = this.searchSelectList.querySelectorAll(".list-group-item.active")[0];
            if (activeDOM) {
                this.searchSelectList.scrollTop = activeDOM.offsetTop;
            }
        }
    }

    handleFocus(event) {
        event.target.select();

        this.props.onInputFocus();

        if (this.props.isScrollToSelected) {
            // focus 先触发，此时浮层未出来。等个500毫秒？
            clearTimeout(this.scrollTimer);
            this.scrollTimer = setTimeout(() => {
                this.doScroll();
            }, 500);
        }
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

        // 失去焦点，去掉选中
        this.setState({
            activeIndex: null
        });
    }

    handleKeyDown(size, event) {
        const {keyCode}= event;
        let activeIndex = this.state.activeIndex;

        if (keyCode !== 38 && keyCode !== 40) {
            if (event.key === 'Backspace') {
                if (event.target.value === '') {
                    const selected = this.state.selected;
                    selected.pop();
                    this.doSelect(selected);
                }
            } else if (keyCode === 13) { // 键盘 回车
                const dom = this.searchSelectList.querySelector('.list-group-item.line-selected');
                if (dom) {
                    dom.click();
                    !this.props.multiple && this.refInput.blur();
                }
            }

            return;
        }

        if (keyCode === 38) { // 键盘 上键
            if (activeIndex === null)
                activeIndex = size;

            activeIndex--;
        } else if (keyCode === 40) { // 键盘 下键
            if (activeIndex === null)
                activeIndex = -1;

            activeIndex++;
        }

        this.setState({
            activeIndex: (size + activeIndex) % size
        });
    }

    handleItemMouseEnter(activeIndex) {
        this.setState({
            activeIndex
        });
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
        if (this.state.selected.indexOf(value) > -1) {
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

        // 多选不处理
        if (!this.props.multiple && !value) {
            this.doSelect([]);
        }

        this.timer = setTimeout(() => {
            if (!this.______isMounted) {
                this.props.onSearch(value);
            }
        }, this.props.delay);
    }

    handleChange(event) {
        this.doChange(event.target.value);
    }

    getListItemCount() {
        const {list, isGroupList} = this.props;

        if (isGroupList)
            return _.reduce(list, (count, group) => {
                return count + group.children.length;
            }, 0);

        return list.length;
    }

    renderOverlay() {
        const {list, listMaxHeight, inputClassName, isGroupList, renderListCell} = this.props;

        if (isGroupList) {
            // 不存在group数据
            if (list.length === 0) {
                return null;
            }
            // 不存在其中一个group有数据
            if (!_.find(list, value => (value.children || []).length > 0)) {
                return null;
            }

            let itemSequence = -1;

            return (
                <div
                    className="list-group"
                    style={{maxHeight: listMaxHeight}}
                    ref={ref => this.searchSelectList = ref}
                >
                    {_.map(list, (groupList, i) => {
                        return (
                            <div key={i} className="list-group-label">
                                <div className="list-group-label-item">{groupList.label}</div>
                                {_.map(groupList.children, (value, i) => {
                                    itemSequence++;

                                    return (
                                        <Flex
                                            key={i}
                                            alignCenter
                                            className={classNames('list-group-item', inputClassName, {
                                                'active': this.state.selected.indexOf(value) > -1,
                                                'line-selected': this.state.activeIndex === itemSequence
                                            })}
                                            onClick={this.handleSelect.bind(this, value)}
                                            onMouseEnter={this.handleItemMouseEnter.bind(this, itemSequence)}
                                        >
                                            <Flex flex>{renderListCell(value)}</Flex>
                                        </Flex>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            );
        } else {
            if (list.length === 0) {
                return null;
            }
            return (
                <div
                    className="list-group gm-search-select-list"
                    style={{maxHeight: listMaxHeight}}
                    ref={ref => this.searchSelectList = ref}
                >
                    {_.map(list, (value, i) => {
                        return (
                            <Flex
                                key={i}
                                alignCenter
                                className={classNames('list-group-item', inputClassName, {
                                    'active': this.state.selected.indexOf(value) > -1,
                                    'line-selected': this.state.activeIndex === i
                                })}
                                onClick={this.handleSelect.bind(this, value)}
                                onMouseEnter={this.handleItemMouseEnter.bind(this, i)}
                            >
                                {renderListCell(value)}
                            </Flex>
                        );
                    })}
                </div>
            );
        }
    }

    render() {
        return (
            <div
                ref={ref => this.searchSelect = ref}
                className={classNames("gm-search-select", this.props.className, {
                    "gm-search-select-disabled": this.props.disabled
                })}
            >
                <Flex wrap className="gm-search-select-input">
                    {this.props.multiple ? _.map(this.state.selected, (value, i) => (
                        <Flex key={i} alignStart className="selected">
                            {value.name}
                            <button
                                disabled={this.props.disabled}
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
                            disabled={this.props.disabled}
                            ref={ref => this.refInput = ref}
                            type="text"
                            value={this.state.value}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                            onChange={this.handleChange}
                            onKeyDown={this.handleKeyDown.bind(this, this.getListItemCount())}
                            placeholder={this.props.placeholder}
                        />
                    </Trigger>
                    <i className="gm-arrow-down"/>
                </Flex>
            </div>
        );
    }
}
SearchSelect.propTypes = {
    disabled: PropTypes.bool,
    list: PropTypes.array.isRequired,
    renderListCell: PropTypes.func,
    isGroupList: PropTypes.bool,
    selected: PropTypes.any,
    onSearch: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    delay: PropTypes.number,
    listMaxHeight: PropTypes.string,
    multiple: PropTypes.bool,
    placeholder: PropTypes.string,
    isScrollToSelected: PropTypes.bool,
    onInputFocus: PropTypes.func
};

SearchSelect.defaultProps = {
    disabled: false,
    renderListCell: v => v.name,
    isGroupList: false,
    listMaxHeight: '250px',
    delay: 500,
    multiple: false,
    placeholder: '',
    onInputFocus: () => {
    }
};

export default SearchSelect;