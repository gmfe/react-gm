import React from 'react';

var Pagination = React.createClass({
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

        var offset = 2,
            pages = [],
            count = Math.ceil(data.total / data.size),
            begin = Math.max(data.index - offset, 1),
            end = Math.min(data.index + offset, count);

        if (count > (offset * 2 + 1)) {
            if (begin === 1) {
                end += offset;
            } else if (end === count) {
                begin -= offset;
            }
        }

        for (var i = begin; i <= end; i++) {
            pages.push(i);
        }

        return (
            <div className="gm-pagination">
                <ul className="pagination pagination-sm" onClick={this._onPage.bind(this)}>
                    <li className={data.index === 1 ? 'disabled' : ''}>
                        <a href="javascript:;" data-page={data.index - 1}>上一页</a>
                    </li>

                    { begin >= 2 ? (<li><a href="javascript:;" data-page="1">1</a></li>) : ''}
                    { begin >= 3 ? (<li className="disabled"><a href="javascript:;">...</a></li>) : ''}

                    {pages.map(page => <li className={data.index === page ? 'active' : ''}><a
                        href="javascript:;" data-page={page}>{page}</a></li>)}

                    { end <= count - 2 ? (<li className="disabled"><a href="javascript:;">...</a></li>) : ''}
                    { end <= count - 1 ? (<li><a href="javascript:;" data-page={count}>{count}</a></li>) : ''}

                    <li className={data.index === count ? 'disabled' : ''}>
                        <a href="javascript:;" data-page={data.index + 1}>下一页</a>
                    </li>
                </ul>
            </div>
        );
    },
    _onPage: function (event) {
        var page = event.target.getAttribute('data-page'),
            data = this.props.data,
            count = Math.ceil(data.total / data.size),
            toPage = this.props.toPage;
        if(!page || page == data.index || page < 1 || page > count){
            return;
        }

        toPage(page);
    }
});


export default Pagination;