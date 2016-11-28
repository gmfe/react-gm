import React, {PropTypes} from 'react';
import Pagination from './pagination.js';
import PaginationText from './pagination.text.js';
import _ from 'underscore';
import classNames from 'classnames';

class SheetColumn extends React.Component {
    render() {
        return <div/>;
    }
}
SheetColumn.displayName = 'SheetColumn';
SheetColumn.propTypes = {
    field: PropTypes.string.isRequired,
    name: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.element.isRequired
    ])
};


class SheetAction extends React.Component {
    render() {
        return <div>{this.props.children}</div>;
    }
}
SheetAction.displayName = 'SheetAction';


class SheetSelect extends React.Component {
    render() {
        return <div>{this.props.children}</div>;
    }
}
SheetSelect.displayName = 'SheetSelect';
SheetSelect.propTypes = {
    onSelect: PropTypes.func.isRequired,
    onSelectAll: PropTypes.func.isRequired,
    isDisabled: PropTypes.func
};
SheetSelect.defaultProps = {
    isDisabled: () => false
};


class SheetBatchAction extends React.Component {
    render() {
        return <div>{this.props.children}</div>;
    }
}
SheetBatchAction.displayName = 'SheetBatchAction';


class Sheet extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let select = false, isSelectAll = false, list = this.props.list || [], loading = this.props.loading, enableEmptyTip = this.props.enableEmptyTip, scrollX = this.props.scrollX;

        const children = toString.call(this.props.children) === '[object Array]' ? this.props.children : [this.props.children];

        let columns = [], actions = false, batchs = false, others = [], pagination, paginationText;

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
            isSelectAll = !_.find(list, value => !select.props.isDisabled(value) && !value._gm_select);
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
                            {select ? (
                                <th className="gm-sheet-select">
                                    <input
                                        type="checkbox"
                                        checked={isSelectAll}
                                        onChange={this.handleSelectAll.bind(this, select)}
                                    />
                                </th>
                            ) : null}
                            {_.map(columns, (value, index) => {
                                const {
                                    children, field, name, // eslint-disable-line
                                    ...rest
                                } = value.props;
                                return <th key={index} {...rest}>{value.props.name}</th>;
                            })}
                            {actions ? (
                                <th>操作</th>
                            ) : null}
                        </tr>
                        </thead>
                        <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="99" className="text-center">加载中...
                                </td>
                            </tr>
                        ) : null}
                        {(!loading && enableEmptyTip && list.length === 0) ? (
                            <tr>
                                <td colSpan="99" className="text-center">
                                    {enableEmptyTip === true ? '没有数据' : enableEmptyTip}
                                </td>
                            </tr>
                        ) : null}
                        {!loading ? _.map(list, (value, index) => (
                            <tr {...this.props.getTrProps(index)} key={index}>
                                {select ? (
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={value._gm_select || false}
                                            onChange={this.handleSelect.bind(this, select, index)}
                                            disabled={select.props.isDisabled(value)}
                                        />
                                    </td>
                                ) : null}
                                {_.map(columns, (v, i) => {
                                    const {
                                        children, field, name, // eslint-disable-line
                                        ...rest
                                    } = v.props;
                                    if (typeof children === 'function') {
                                        return <td key={i} {...rest}>{children(value[field], index)}</td>;
                                    } else {
                                        return <td key={i} {...rest}>{value[field]}</td>;
                                    }
                                })}
                                {actions ? (
                                    <td>
                                        {actions.props.children(value, index)}
                                    </td>
                                ) : null}
                            </tr>
                        )) : null}
                        </tbody>
                    </table>
                </div>
                <div className="clearfix">
                    <div className="pull-right">{pagination}</div>
                    <div className="pull-right">{paginationText}</div>
                </div>
                {others}
            </div>
        );
    }

    handleSelect(select, i, event) {
        select.props.onSelect(event.target.checked, i);
    }

    handleSelectAll(select, event) {
        select.props.onSelectAll(event.target.checked);
    }
}

Sheet.propTypes = {
    list: PropTypes.array.isRequired,
    loading: PropTypes.bool,
    enableEmptyTip: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.element]),
    className: PropTypes.string,
    getTrProps: PropTypes.func,
    scrollX: PropTypes.bool
};

Sheet.defaultProps = {
    list: [],
    loading: false,
    getTrProps: () => {
        return {};
    },
    scrollX: false
};

Object.assign(Sheet, {
    SheetColumn,
    SheetAction,
    SheetSelect,
    SheetBatchAction
});

export default Sheet;