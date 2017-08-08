import React from 'react';
import PropTypes from 'prop-types';
import PaginationTextNew from './pagination.text_new';

class WithCount extends React.Component {
    render() {
        const {data} = this.props;
        return (
            <div className="gm-pagination-text">
                显示 {data.offset + 1} ~ {data.offset + data.limit}，共 {data.count} 条记录
            </div>
        );
    }
}

WithCount.propTypes = {
    data: PropTypes.shape({
        count: PropTypes.number,
        offset: PropTypes.number.isRequired,
        limit: PropTypes.number.isRequired
    })
};

class WithoutCount extends React.Component {
    render() {
        const {data} = this.props;
        return (
            <div className="gm-pagination-text">
                显示 {data.offset + 1} ~ {data.offset + data.limit} 条记录
            </div>
        );
    }
}

WithCount.propTypes = {
    data: PropTypes.shape({
        count: PropTypes.number,
        offset: PropTypes.number.isRequired,
        limit: PropTypes.number.isRequired
    })
};

class PaginationText extends React.Component {
    render() {
        if (this.props.nextVersion) {
            return <PaginationTextNew {...this.props}/>;
        } else {
            if (this.props.data.count !== undefined) {
                return <WithCount {...this.props}/>;
            } else {
                return <WithoutCount {...this.props}/>;
            }
        }
    }
}

PaginationText.displayName = 'PaginationText';
PaginationText.propTypes = {
    nextVersion: PropTypes.bool, // 新规范
    data: PropTypes.shape({
        count: PropTypes.number,
        limit: PropTypes.number.isRequired
    })
};

export default PaginationText;