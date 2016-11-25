import React from 'react';

class WithCount extends React.Component {
    render() {
        const {data} =  this.props;
        return (
            <div className="gm-pagination-text">
                显示第 {data.offset + 1} 到 {Math.min(data.count, data.offset + data.limit)} 行，一共 {data.count} 行记录
            </div>
        );
    }
}

class WithoutCount extends React.Component {
    render() {
        const {data} =  this.props;
        return (
            <div className="gm-pagination-text">
                显示第 {data.offset + 1} 到 {data.offset + data.limit} 行
            </div>
        );
    }
}

class PaginationText extends React.Component {
    render() {
        if (this.props.data.count) {
            return <WithCount {...this.props}/>;
        } else {
            return <WithoutCount {...this.props}/>;
        }
    }
}

PaginationText.displayName = 'PaginationText';
PaginationText.propTypes = {
    data: React.PropTypes.shape({
        count: React.PropTypes.number,
        offset: React.PropTypes.number.isRequired,
        limit: React.PropTypes.number.isRequired
    })
};

export default PaginationText;