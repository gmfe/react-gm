import React, {PropTypes} from 'react';
import _ from 'underscore';
import Flex from '../component/flex';
import Select from '../select';
import {isMac} from '../util';

const {Option} = Select;

class Transfer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            selectedSourceValues: [],
            selectedTargetValues: []
        };
        this.handleQuery = ::this.handleQuery;
        this.handleSourceChange = ::this.handleSourceChange;
        this.handleTargetChange = ::this.handleTargetChange;
        this.handleSourceDoubleClick = ::this.handleSourceDoubleClick;
        this.handleTargetDoubleClick = ::this.handleTargetDoubleClick;
        this.handlePickAll = ::this.handlePickAll;
        this.handleRemoveAll = ::this.handleRemoveAll;
        this.handleToRightClick = ::this.handleToRightClick;
        this.handleToLeftClick = ::this.handleToLeftClick;
    }

    handleQuery(e) {
        this.setState({
            query: e.target.value
        });
    }

    handleSourceChange(selectedSourceValues) {
        this.setState({
            selectedSourceValues
        });
    }

    handleTargetChange(selectedTargetValues) {
        this.setState({
            selectedTargetValues
        });
    }

    handleSourceDoubleClick() {
        // 这个时候 selectedSourceValues 有值
        const {onSelect, selectedValues} = this.props;
        const {selectedSourceValues} = this.state;

        onSelect(selectedValues.concat(selectedSourceValues));
        this.setState({
            selectedSourceValues: [],
            selectedTargetValues: []
        });
    }

    handleTargetDoubleClick() {
        const {onSelect, selectedValues} = this.props;
        const {selectedTargetValues} = this.state;

        onSelect(_.difference(selectedValues, selectedTargetValues));
        this.setState({
            selectedSourceValues: [],
            selectedTargetValues: []
        });
    }

    handlePickAll() {
        const {onSelect, list} = this.props;

        onSelect(_.map(list, v => v.value));
        this.setState({
            selectedSourceValues: [],
            selectedTargetValues: []
        });
    }

    handleRemoveAll() {
        const {onSelect} = this.props;

        onSelect([]);
        this.setState({
            selectedSourceValues: [],
            selectedTargetValues: []
        });
    }

    handleToRightClick() {
        const {onSelect, selectedValues} = this.props;
        const {selectedSourceValues} = this.state;

        onSelect(selectedValues.concat(selectedSourceValues));
        this.setState({
            selectedSourceValues: [],
            selectedTargetValues: []
        });
    }

    handleToLeftClick() {
        const {onSelect, selectedValues} = this.props;
        const {selectedTargetValues} = this.state;

        onSelect(_.difference(selectedValues, selectedTargetValues));
        this.setState({
            selectedSourceValues: [],
            selectedTargetValues: []
        });
    }


    render() {
        let {list, titles, selectedValues, withFilter, listStyle} = this.props;
        const {query, selectedSourceValues, selectedTargetValues} = this.state;

        const selectedList = [];

        // 过滤掉已选中的
        _.each(list, v => {
            if (selectedValues.indexOf(v.value) > -1) {
                selectedList.push(v);
            }
        });

        // 调用方自定义过滤
        list = _.filter(list, v => selectedValues.indexOf(v.value) === -1);
        if (withFilter) {
            list = withFilter(list, query);
        }

        return (
            <div className="gm-transfer">
                <Flex>
                    <Flex column className="gm-transfer-list" style={listStyle}>
                        <div className="gm-transfer-list-title">{titles[0]}</div>

                        {withFilter ? (
                            <div className="input-group input-group-sm gm-transfer-list-filter">
                                <span className="input-group-addon">
                                    <i className="glyphicon glyphicon-search"/>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={query}
                                    onChange={this.handleQuery}
                                />
                            </div>
                        ) : null}

                        <Select
                            multiple
                            value={selectedSourceValues}
                            onChange={this.handleSourceChange}
                            onDoubleClick={this.handleSourceDoubleClick}
                        >
                            {_.map(list, v => (
                                <Option key={v.value} value={v.value}>{v.name}</Option>
                            ))}
                        </Select>

                        <button
                            className="gm-transfer-list-all btn btn-default btn-sm"
                            onClick={this.handlePickAll}
                        >选中全部
                        </button>
                    </Flex>
                    <Flex column justifyCenter alignCenter className="gm-transfer-operation">
                        <button
                            disabled={selectedSourceValues.length === 0}
                            className="btn btn-xs btn-default gm-margin-bottom-5"
                            onClick={this.handleToRightClick}
                        >&gt;</button>
                        <button
                            disabled={selectedTargetValues.length === 0}
                            className="btn btn-xs btn-default"
                            onClick={this.handleToLeftClick}
                        >&lt;</button>
                    </Flex>
                    <Flex column className="gm-transfer-list" style={listStyle}>
                        <div className="gm-transfer-list-title">{titles[1]}</div>

                        <Select
                            multiple
                            value={selectedTargetValues}
                            onChange={this.handleTargetChange}
                            onDoubleClick={this.handleTargetDoubleClick}
                        >
                            {_.map(selectedList, v => (
                                <Option key={v.value} value={v.value}>{v.name}</Option>
                            ))}
                        </Select>

                        <button
                            className="gm-transfer-list-all btn btn-default btn-sm"
                            onClick={this.handleRemoveAll}
                        >删除全部
                        </button>
                    </Flex>
                </Flex>
                <div className="gm-text-desc">
                    按下{isMac ? 'Command' : 'Control'}选择多个值
                </div>
            </div>
        );
    }
}

Transfer.propTypes = {
    titles: PropTypes.array,
    list: PropTypes.array.isRequired,
    selectedValues: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    withFilter: PropTypes.func,
    listStyle: PropTypes.object
};

Transfer.defaultProps = {
    titles: ['待选择', '已选择'],
    listStyle: {
        width: '250px',
        height: '300px'
    }
};

export default Transfer;