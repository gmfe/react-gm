import React from 'react';

var PaginationText = React.createClass({
    propTypes: {
        data: React.PropTypes.shape({
            total: React.PropTypes.number.isRequired,
            index: React.PropTypes.number.isRequired,
            size: React.PropTypes.number.isRequired
        }),
        toPage: React.PropTypes.func.isRequired
    },
    render: function () {
        var data = this.props.data;

        return (
            <div className="gm-pagination-text">
                显示第 {data.index * data.size + 1} 到 {Math.min(data.total, data.index * data.size + data.size)} 行，一共 {data.total} 行记录
            </div>
        );
    }
});

export default PaginationText;