import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';
import Flex from '../flex';
import Trigger from '../trigger';
import { pinYinFilter, pinyin } from 'gm-util';

// 给list中每个元素添加_path
function mapPath(list, searchText, parentPath = []) {
    _.each(list, item => {
        if (item._path === undefined) item._path = [...parentPath, item.value];

        if (item.children) mapPath(item.children, searchText, [...item._path]);
    });
}

// 找出list树下匹配searchText的最深元素的路径
function getMaxDeepPathOfMatchElement(list, searchText) {
    let maxLengthPath = [];

    function findMaxLengthPath(list, searchText) {
        _.each(list, item => {
            // 匹配首字母
            const first_letter = _.map(pinyin(item.name, 'first_letter'), value => value[0]).join('');
            //全拼集合
            const normal = _.map(pinyin(item.name), value => value[0]).join('');

            if ((item.name.indexOf(searchText) > -1 || normal.indexOf(searchText) > -1 ||
                first_letter.indexOf(searchText) > -1) && maxLengthPath.length < item._path.length) {
                maxLengthPath = item._path;
            }

            if (item.children) findMaxLengthPath(item.children, searchText);
        });
    }

    findMaxLengthPath(list, searchText);

    return maxLengthPath;
}

class Cascader extends React.Component {
    constructor(props) {
        super(props);

        // deep clone data,然后给data生成_path数据
        const data = _.cloneDeep(props.data);
        mapPath(data);

        this.state = {
            selected: props.value ? [...props.value] : [], // 选中状态
            filterInput: null, // filtrable为true时，输入框的内容
            data: data
        };

        this.listActiveRef = [];

        this.handleSelect = :: this.handleSelect;
        this.handleClear = :: this.handleClear;
        this.handleInputChange = :: this.handleInputChange;
        this.handleKeyDown = :: this.handleKeyDown;
        this.inputValueRender = :: this.inputValueRender;
    }

    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({
                selected: nextProps.value ? [...nextProps.value] : []
            });
        }

        if (nextProps.data !== this.props.data) {
            const data = _.cloneDeep(nextProps.data);
            mapPath(data); // 给data生成_path数据

            this.setState({ data });
        }
    }

    componentDidUpdate() {
        _.each(this.listActiveRef, ref => {
            ref && ReactDom.findDOMNode(ref).scrollIntoViewIfNeeded();
        });
    }

    getList() {
        const selected = this.state.selected,
            result = [this.state.data];

        _.each(selected, (value, i) => {
            const match = _.find(result[i], v => v.value === value);
            if (match) {
                if (match.children) {
                    result.push(match.children);
                }
            }
        });

        return result;
    }

    getFilterList(list, searchText) {
        return _.filter(list, item => {
            if (item.children) {
                item.children = this.getFilterList(item.children, searchText);

                if (item.children.length) return true;
            }

            if (pinYinFilter([item], searchText, (v) => v.name).length) return true;

            return false;
        });
    }

    handleClear(e) {
        e.stopPropagation();

        this.setState({ selected: [] }, () => {
            this.handleSelect();
        });
    }

    handleSelect() {
        const { onlyChildSelectable } = this.props,
            { selected, data } = this.state;

        const value = [];
        if (selected.length > 0) {
            _.each(selected, (v, i) => {
                const match = _.find(i === 0 ? data : value[i - 1].children, val => {
                    return v === val.value;
                });
                value.push(match);
            });
        }

        // 如果选择有children的，则清空输入框
        if (onlyChildSelectable && value.length && value[value.length - 1].children) {
            this.setState({ filterInput: '' });
            this.props.onChange([]);
        } else {
            this.setState({ filterInput: null });
            this.props.onChange(selected);
        }

        // 选中后关闭cascader
        setTimeout(() => {
            window.document.body.click();
        }, 0);
        window.document.activeElement.blur();  // blur input
    }

    handleMouseEnter(selected) {
        this.setState({ selected });
    }

    handleInputChange(e) {
        const filterInput = e.target.value;

        if (this.props.filtrable) {
            this.setState({
                filterInput,
                selected: getMaxDeepPathOfMatchElement(this.state.data, filterInput)
            });
        }
    }

    handleKeyDown(event) {
        const { keyCode } = event;

        // 键盘上下键控制最当前选中列
        if (keyCode === 38 || keyCode === 40) {
            const listArr = this.getList(),
                selected = [...this.state.selected],
                len = selected.length;

            if (!len) {
                this.setState({
                    selected: [listArr[0][0].value],
                    filterInput: ''
                });
                return;
            }

            const lastList = listArr[len - 1],
                currentIndex = _.findIndex(lastList, item => item.value === selected[len - 1]);

            let lastValue = selected[len - 1];

            if (keyCode === 38 && currentIndex > 0) {
                lastValue = lastList[currentIndex - 1].value;
            } else if (keyCode === 40 && currentIndex < lastList.length - 1) {
                lastValue = lastList[currentIndex + 1].value;
            }

            selected[len - 1] = lastValue;

            this.setState({
                selected
            });
        } else if (keyCode === 13) { // 键盘 回车
            this.handleSelect();
        }
    }

    inputValueRender() {
        const { filterInput, data } = this.state,
            { valueRender, filtrable } = this.props,
            selected = this.props.value || this.state.selected;

        let value = [];
        if (selected.length > 0) {
            _.each(selected, (v, i) => {
                const match = _.find(i === 0 ? data : value[i - 1].children, val => {
                    return v === val.value;
                });
                value.push(match);
            });
        }

        if (!filtrable) {
            return valueRender ? valueRender(value) : _.map(value, v => v.name).join(',');
        }

        return filterInput === null ? (valueRender ? valueRender(value) : _.map(value, v => v.name).join(',')) : filterInput;
    }

    renderOverlay() {
        const selected = this.state.selected;

        this.listActiveRef = [];

        return (
            <Flex className={classNames("gm-cascader-list", this.props.className)}>
                {_.map(this.getList(), (value, i) => (
                    <Flex column key={i} className="list-group gm-block">
                        {_.map(value, v => (
                            <Flex
                                key={v.value}
                                title={v.name}
                                justifyBetween
                                onClick={this.handleSelect}
                                onMouseEnter={this.handleMouseEnter.bind(this, v._path)}
                                className={classNames("list-group-item", {
                                    active: v.value === selected[i]
                                })}
                                ref={ref => {
                                    if (v.value === selected[i]) this.listActiveRef[i] = ref;
                                }}
                            >
                                {v.name}&nbsp;
                                {v.children && v.children.length ? <i className={classNames("gm-arrow-right", {
                                    active: v.value === selected[i]
                                })} /> : null}
                            </Flex>
                        ))}
                    </Flex>
                ))}
            </Flex>
        );
    }

    renderChildren() {
        const { disabled } = this.props,
            { data } = this.state,
            inputValue = this.inputValueRender();
        let { inputProps } = this.props;

        const selected = this.props.value || this.state.selected;
        let value = [];
        if (selected.length > 0) {
            _.each(selected, (v, i) => {
                const match = _.find(i === 0 ? data : value[i - 1].children, val => {
                    return v === val.value;
                });
                value.push(match);
            });
        }

        // disabled 的优先级比 inputProps的优先级高
        if (disabled) {
            inputProps = Object.assign({}, inputProps, { disabled });
        }

        return (
            <div className="gm-cascader-input">
                <input
                    {...inputProps}
                    type="text"
                    onChange={this.handleInputChange}
                    onKeyDown={this.handleKeyDown}
                    value={inputValue}
                    className={classNames("form-control", inputProps.className)}
                />
                {inputValue ? <i onClick={this.handleClear} className="ifont ifont-close gm-cursor" /> : null}
                <i className="gm-arrow-down" />
            </div>
        );
    }

    render() {
        const { disabled } = this.props;

        return (
            <Trigger
                disabled={disabled}
                component={<div className="gm-cascader" />}
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
    disabled: PropTypes.bool,
    // 是否可搜索
    filtrable: PropTypes.bool,
    // 只允许选择子节点，有children则清空输入框
    onlyChildSelectable: PropTypes.bool
};

Cascader.defaultProps = {
    onChange: _.noop,
    inputProps: {},
    disabled: false,
    onlyChildSelectable: false
};

export default Cascader;