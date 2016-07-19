import React from 'react';

class PaginationText extends React.Component {
    render() {
        const data = Object.assign({}, this.props.data);
        return (
            <div className="gm-pagination-text">
                显示第 {data.offset + 1} 到 {Math.min(data.count, data.offset + data.limit)} 行，一共 {data.count} 行记录
            </div>
        );
    }
}
PaginationText.displayName = 'PaginationText';
PaginationText.propTypes = {
    data: React.PropTypes.shape({
        count: React.PropTypes.number.isRequired,
        offset: React.PropTypes.number.isRequired,
        limit: React.PropTypes.number.isRequired
    })
};

export default PaginationText;