import React from 'react';
import PropTypes from 'prop-types';

class WithCount extends React.Component {
    getCount() {
        const {current, limit, peek} = this.props.data;

        return current * limit + peek;
    }

    render() {
        const {current, limit} = this.props.data,
            count = this.getCount();

        return (
            <div className="gm-pagination-text">
                显示第 {(current - 1) * limit + 1} 到 {Math.min(count, current * limit)}
                行，一共 {this.getCount()} 行记录
            </div>
        );
    }
}

class WithoutCount extends React.Component {
    render() {
        const {current, limit, list} = this.props.data;

        return (
            <div className="gm-pagination-text">
                显示第 {(current - 1) * limit + 1} 到 {(current - 1) * limit + list.length} 行
            </div>
        );
    }
}

class PaginationText extends React.Component {
    render() {
        if (this.props.data.peek) {
            return <WithCount {...this.props}/>;
        } else {
            return <WithoutCount {...this.props}/>;
        }
    }
}

PaginationText.displayName = 'PaginationText';
PaginationText.propTypes = {
    data: PropTypes.shape({
        current: PropTypes.number.isRequired,
        list: PropTypes.array,
        peek: PropTypes.number,
        from: PropTypes.object,
        is_first: PropTypes.bool,
        is_last: PropTypes.bool,
        no_more: PropTypes.bool,
        limit: PropTypes.number.isRequired
    })
};

export default PaginationText;