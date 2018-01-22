import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../flex';
import _ from 'lodash';

class TreeSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showList: []
        };

        this.handleSelectAll = ::this.handleSelectAll;
        this.handleSelect = ::this.handleSelect;
        this.handleShow = ::this.handleShow;
    }

    componentDidMount() {
        console.warn('TreeSelect is deprecated. Use Tree instead.');
    }

    handleSelectAll(e) {
        if (e.target.checked) {
            let data = this.findAllChildrenNode(this.props.list);
            this.props.onSelect && this.props.onSelect(data);
            return;
        }
        this.props.onSelect && this.props.onSelect([]);
    }

    handleSelect(data, checked) {
        const {list, selected} = this.props;

        if (data.children) {
            if (checked) {
                let selectData = this.findChildrenNodeByValue(list, data.value, selected);
                this.props.onSelect && this.props.onSelect(selectData);
            }
            else {
                let selectData = this.findChildrenNodeByValue(list, data.value);
                this.props.onSelect && this.props.onSelect(_.difference(selected, selectData));
            }
        }
        else {
            if (checked) {
                selected.push(data.value);
                this.props.onSelect && this.props.onSelect(selected);
            }
            else {
                let selectData = _.without(selected, data.value);
                this.props.onSelect && this.props.onSelect(selectData);
            }
        }
    }

    findAllChildrenNode(list, childrenNodes = []) {
        _.each(list, (data) => {
            //只有便利到最后一层时才加入节点value
            if (data.children) {
                this.findAllChildrenNode(data.children, childrenNodes);
            }
            else {
                if (!_.includes(childrenNodes, data.value)) {
                    childrenNodes.push(data.value);
                }
            }
        });
        return childrenNodes;
    }

    findChildrenNodeByValue(list, value, items = []) {
        _.each(list, (data) => {
            if (data.value === value) {
                //只有便利到最后一层时才加入节点value
                if (data.children) {
                    this.findAllChildrenNode(data.children, items);
                }
                else {
                    if (!_.includes(items, value)) {
                        items.push(value);
                    }
                }
            }
            else {
                if (data.children) {
                    this.findChildrenNodeByValue(data.children, value, items);
                }
            }
        });
        return items;
    }

    handleShow(data) {
        let {showList} = this.state;

        if (_.includes(showList, data.value)) {
            this.setState({showList: _.without(showList, data.value)});
            return;
        }

        showList.push(data.value);
        this.setState({showList});
    }

    renderNodeList(list, level = 0, panel = []) {
        const {disabledSelected, selected} = this.props;

        _.each(list, (data) => {
            let childrenNode = this.findChildrenNodeByValue(list, data.value);
            if (data.children) {
                panel.push(
                    <TreeNode
                        key={data.value}
                        data={data}
                        childrenNode={childrenNode}
                        level={level}
                        last={false}
                        disabledSelected={disabledSelected}
                        selected={selected}
                        showList={this.state.showList}
                        handleSelect={this.handleSelect}
                        handleShow={this.handleShow}
                    />
                );
                if (_.includes(this.state.showList, data.value)) {
                    this.renderNodeList(data.children, level + 1, panel);
                }
            }
            else {
                panel.push(
                    <TreeNode
                        key={data.value}
                        data={data}
                        childrenNode={childrenNode}
                        level={level}
                        last={true}
                        disabledSelected={disabledSelected}
                        selected={selected}
                        showList={this.state.showList}
                        handleSelect={this.handleSelect}
                    />
                );
            }
        });
        return panel;
    }

    render() {
        const {list, label, disabledSelected, selected} = this.props;

        return (
            <div className="gm-tree-select">
                <Flex
                    column={true}
                    className="gm-tree-select-border"
                >
                    {disabledSelected ? undefined : (
                        <Flex flex={true} className="gm-border-bottom gm-tree-select-title">
                            <label className="gm-cursor gm-padding-10" style={{width: '30px'}}>
                                <input
                                    type="checkbox"
                                    checked={(selected.length !== 0 && this.findAllChildrenNode(list).length === selected.length)}
                                    onChange={this.handleSelectAll}
                                />
                            </label>
                            <Flex className="gm-padding-10" flex={true} alignCenter={true}>
                                {label}
                            </Flex>
                        </Flex>
                    )}
                    {this.renderNodeList(list)}
                </Flex>
            </div>
        );
    }
}

class TreeNode extends React.Component {
    handleSelect(data, e) {
        this.props.handleSelect && this.props.handleSelect(data, e.target.checked);
    }

    handleShow(data) {
        this.props.handleShow && this.props.handleShow(data);
    }

    render() {
        const {data, childrenNode, level, last, disabledSelected, selected, showList} = this.props;
        let selectedFlag = false;

        if (last) {
            selectedFlag = _.includes(selected, data.value);
        }
        else {
            selectedFlag = (childrenNode.length === 0) ? false : (_.difference(childrenNode, selected).length === 0);
        }

        return (
            <Flex flex={true} className="gm-border-bottom gm-tree-select-trap">
                {disabledSelected ? undefined : (
                    <label className="gm-padding-10 gm-cursor" style={{width: '30px'}}>
                        <input
                            type="checkbox"
                            checked={selectedFlag}
                            onChange={this.handleSelect.bind(this, data)}
                            disabled={childrenNode.length === 0}
                        />
                    </label>
                )}
                <Flex className="gm-padding-10" flex={true} alignCenter={true}>
                    <div
                        className={data.children ? "gm-tree-select-item" : ''}
                        style={{marginLeft: Number(level) * 15 + 'px'}}
                        onClick={this.handleShow.bind(this, data)}
                    >
                        {last ? <div className="gm-gap-15"/> :
                            <span
                                className={(_.includes(showList, data.value)) ? "glyphicon glyphicon-minus text-primary" : "glyphicon glyphicon-plus text-primary"}/>}
                        &nbsp;
                        <span className="gm-padding-lr-5">
                            {data.value}&nbsp;{data.name}
                        </span>
                    </div>
                </Flex>
            </Flex>
        );
    }
}

/**
 * list的格式为:
 * [{
 *  value: '111',
 *  name: '111',
 *  children: [{value: '222', name: '222', children:[{}...]
 *  },
 *  ...
 *  ]
 *  label:全选标签
 *  disabledSelected:是否开启select功能
 *  selected:选中的node
 *  onSelect:将选择的节点value，以数组结构暴露出去
 */
TreeSelect.propTypes = {
    list: PropTypes.array.isRequired,
    label: PropTypes.string,
    disabledSelected: PropTypes.bool,
    selected: PropTypes.array,
    onSelect: PropTypes.func
};

TreeSelect.defaultProps = {
    list: [],
    label: '选择全部',
    disabledSelected: false
};


export default TreeSelect;