import React from 'react';
import PropTypes from 'prop-types';
import Pagination from '../pagination/pagination.js';
import PaginationText from '../pagination/pagination.text.js';
import _ from 'lodash';
import classNames from 'classnames';
import SheetColumn from './sheet_column';
import SheetAction from './sheet_action';
import SheetSelect from './sheet_select';
import SheetBatchAction from './sheet_batch_action';

class Sheet extends React.Component {
    handleSelect(select, i, event) {
        select.props.onSelect(event.target.checked, i);
    }

    handleSelectAll(select, event) {
        select.props.onSelectAll(event.target.checked);
    }

    handleExpanded(index) {
        const {onExpand} = this.props;
        onExpand && onExpand(index);
    }

    renderTr(select, columns, actions) {
        const {loading, list = [], enableEmptyTip, expandedRowRender} = this.props;

        if (loading) {
            return (
                <tr>
                    <td colSpan="99" className="text-center">加载中...
                    </td>
                </tr>
            );
        }

        if (enableEmptyTip && list.length === 0) {
            return (
                <tr>
                    <td colSpan="99" className="text-center">
                        {enableEmptyTip === true ? '没有数据' : enableEmptyTip}
                    </td>
                </tr>
            );
        }

        const trs = [];

        _.each(list, (value, index) => {
            trs.push(<tr {...this.props.getTrProps(index)} key={index}>
                {expandedRowRender && (
                    <td>
                        <button
                            type="button"
                            className="btn btn-default btn-xs"
                            onClick={this.handleExpanded.bind(this, index)}
                        >{value.__gm_expanded ? '-' : '+'}</button>
                    </td>
                )}
                {select && (
                    <td>
                        <input
                            type="checkbox"
                            checked={value._gm_select || false}
                            onChange={this.handleSelect.bind(this, select, index)}
                            disabled={select.props.isDisabled(value)}
                        />
                    </td>
                )}
                {_.map(columns, (v, i) => {
                    const {
                        children, field, name, // eslint-disable-line
                        placeholder,
                        render,
                        ...rest
                    } = v.props;
                    if (typeof children === 'function') {
                        return <td key={i} {...rest}>{children(value[field], index)}</td>;
                    } else if (typeof render === 'function') {
                        return <td key={i} {...rest}>{render(value[field], index)}</td>;
                    } else {
                        const tdV = value[field];
                        if (placeholder !== undefined && (tdV === undefined || tdV === null)) {
                            return <td key={i} {...rest}>{placeholder}</td>;
                        }
                        return <td key={i} {...rest}>{tdV}</td>;
                    }
                })}
                {actions ? (
                    <td className="text-center">
                        {actions.props.children(value, index)}
                    </td>
                ) : null}
            </tr>);

            if (expandedRowRender && value.__gm_expanded) {
                trs.push(<tr className="gm-sheet-expanded-tr" key={index + '_expanded'}>
                    <td/>
                    <td className="gm-sheet-expanded-td" colSpan={columns.length}>
                        {expandedRowRender()}
                    </td>
                </tr>);
            }
        });

        return trs;
    }

    render() {
        let {list = [], scrollX, expandedRowRender} = this.props;
        let select = false, isSelectAll = false, pagination, paginationText;
        const children = toString.call(this.props.children) === '[object Array]' ? this.props.children : [this.props.children];

        let columns = [], actions = false, batchs = false, others = [];

        _.each(children, value => {
            if (value !== null && value !== undefined) {
                if (value.type.displayName === SheetColumn.displayName) {
                    columns.push(value);
                } else if (value.type.displayName === SheetAction.displayName) {
                    actions = value;
                } else if (value.type.displayName === SheetSelect.displayName) {
                    select = value;
                } else if (value.type.displayName === SheetBatchAction.displayName) {
                    batchs = value;
                } else if (value.type.displayName === Pagination.displayName) {
                    pagination = value;
                } else if (value.type.displayName === PaginationText.displayName) {
                    paginationText = value;
                } else {
                    others.push(value);
                }
            }
        });

        if (select && list.length > 0) {
            // 存在有效行，且不存在未选中的行
            isSelectAll = _.find(list, value => !select.props.isDisabled(value)) && !_.find(list, value => !select.props.isDisabled(value) && !value._gm_select);
        }

        return (
            <div className={classNames("gm-sheet", this.props.className)}>
                {select && batchs ? (
                    <div className="gm-marginBottom5 text-right">
                        {batchs.props.children}
                    </div>
                ) : null}
                <div className={"gm-sheet-table" + (scrollX ? ' gm-sheet-table-scroll-x' : '')}>
                    <table className="table table-striped table-hover table-bordered">
                        <thead>
                        <tr>
                            {expandedRowRender && (
                                <th className="gm-sheet-th-expanded"/>
                            )}
                            {select && (
                                <th className="gm-sheet-select">
                                    <input
                                        type="checkbox"
                                        checked={isSelectAll}
                                        onChange={this.handleSelectAll.bind(this, select)}
                                    />
                                </th>
                            )}
                            {_.map(columns, (value, index) => {
                                const {
                                    children, field, name, // eslint-disable-line
                                    ...rest
                                } = value.props;
                                return <th key={index} {...rest}>{value.props.name}</th>;
                            })}
                            {actions && (
                                <th className="text-center">操作</th>
                            )}
                        </tr>
                        </thead>
                        <tbody>
                        {this.renderTr(select, columns, actions)}
                        </tbody>
                    </table>
                </div>
                {(pagination || paginationText) && (
                    <div className="clearfix">
                        {pagination && <div className="pull-right">{pagination}</div>}
                        {paginationText && <div className="pull-right">{paginationText}</div>}
                    </div>
                )}
                {others}
            </div>
        );
    }
}

Sheet.propTypes = {
    list: PropTypes.array.isRequired,
    loading: PropTypes.bool,
    enableEmptyTip: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.element]),
    className: PropTypes.string,
    getTrProps: PropTypes.func,
    scrollX: PropTypes.bool,
    expandedRowRender: PropTypes.func,
    onExpand: PropTypes.func
};

Sheet.defaultProps = {
    list: [],
    loading: false,
    getTrProps: () => {
        return {};
    },
    scrollX: false
};

export default Sheet;