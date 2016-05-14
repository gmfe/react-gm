import React from 'react';

var PaginationText = React.createClass({
    displayName: 'PaginationText',
    propTypes: {
        data: React.PropTypes.shape({
            count: React.PropTypes.number.isRequired,
            offset: React.PropTypes.number.isRequired,
            limit: React.PropTypes.number.isRequired
        })
    },
    render: function () {
        var data = this.props.data;

        return (
            <div className="gm-pagination-text">
                显示第 {data.offset + 1} 到 {Math.min(data.count, data.offset + data.limit)} 行，一共 {data.count} 行记录
            </div>
        );
    }
});

export default PaginationText;