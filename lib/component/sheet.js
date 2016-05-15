import React, {PropTypes} from 'react';
import Pagination from './pagination.js';
import PaginationText from './pagination.text.js';
import _ from 'underscore';
import classnames from 'classnames';

class SheetColumn extends React.Component {
    static displayName = 'SheetColumn';
    static propTypes = {
        field: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    };

    render() {
        return <div>SheetColumn</div>;
    }
}

class SheetAction extends React.Component {
    static displayName = 'SheetAction';

    render() {
        return <div>{this.props.children}</div>;
    }
}

class SheetSelect extends React.Component {
    static displayName = 'SheetSelect';
    static propTypes = {
        onSelect: PropTypes.func.isRequired,
        onSelectAll: PropTypes.func.isRequired
    };

    render() {
        return <div>{this.props.children}</div>;
    }
}

class SheetBatchAction extends React.Component {
    static displayName = 'SheetBatchAction';

    render() {
        return <div>{this.props.children}</div>;
    }
}

class Sheet extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        list: PropTypes.array.isRequired,
        loading: PropTypes.bool
    };

    static defaultProps = {
        list: [],
        loading: false
    };

    render() {
        let select = false, isSelectAll = false, list = this.props.list || [], loading = this.props.loading;

        if (list.length > 0) {
            isSelectAll = _.filter(list, value => {
                    return value._gm_select;
                }).length === list.length;
        }

        const children = toString.call(this.props.children) === '[object Array]' ? this.props.children : [this.props.children];

        let columns = [], actions = false, batchs = false, others = [], pagination, paginationText;

        _.each(children, value => {
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
        });

        return (
            <div className={classnames("gm-sheet", this.props.className)}>
                {select && batchs ? (
                    <div className="gm-marginBottom5">
                        {batchs.props.children}
                    </div>
                ) : undefined}
                <table className="table table-striped table-hover table-condensed table-bordered">
                    <thead>
                    <tr>
                        {select ? (
                            <th className="gm-sheet-select">
                                <input type="checkbox" checked={isSelectAll}
                                       onChange={this.handleSelectAll.bind(this, select)}/>
                            </th>
                        ) : undefined}
                        {_.map(columns, (value, index) => <th key={index} {...value.props}>{value.props.name}</th>)}
                        {actions ? (
                            <th>操作</th>
                        ) : undefined}
                    </tr>
                    </thead>
                    <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan="99" className="text-center">加载中...
                            </td>
                        </tr>
                    ) : undefined}
                    {!loading ? _.map(list, (value, index) => (
                        <tr key={index}>
                            {select ? (
                                <td>
                                    <input type="checkbox" checked={value._gm_select || false}
                                           onChange={this.handleSelect.bind(this, select)}/>
                                </td>
                            ) : undefined}
                            {_.map(columns, (v, i) => {
                                if (toString.call(v.props.children) === '[object Function]') {
                                    return <td key={i}>{v.props.children(value[v.props.field], i)}</td>;
                                } else {
                                    return <td key={i}>{value[v.props.field]}</td>;
                                }
                            })}
                            {actions ? (
                                <td>
                                    {actions.props.children(value, index)}
                                </td>
                            ) : undefined}
                        </tr>
                    )) : undefined}
                    </tbody>
                </table>
                <div className="clearfix">
                    <div className="pull-right">{pagination}</div>
                    <div className="pull-right">{paginationText}</div>
                </div>
                {others}
            </div>
        );
    }

    handleSelect(select, event) {
        select.props.onSelect(event.target.checked);
    }

    handleSelectAll(select, event) {
        select.props.onSelectAll(event.target.checked);
    }
}

_.extend(Sheet, {
    SheetColumn,
    SheetAction,
    SheetSelect,
    SheetBatchAction
});

export default Sheet;