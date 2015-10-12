import React from 'react';


let Pagination = React.createClass({
    propTypes: {
        paginationData: React.PropTypes.shape({
            total: React.PropTypes.number.isRequired,
            index: React.PropTypes.number.isRequired,
            size: React.PropTypes.number.isRequired
        }),
        toPage: React.PropTypes.func.isRequired
    },
    render: function () {
        let paginationData = this.props.paginationData;

        let offset = 2,
            pages = [],
            count = Math.ceil(paginationData.total / paginationData.size),
            begin = Math.max(paginationData.index - offset, 1),
            end = Math.min(paginationData.index + offset, count);

        if (count > (offset * 2 + 1)) {
            if (begin === 1) {
                end += offset;
            } else if (end === count) {
                begin -= offset;
            }
        }

        for (let i = begin; i <= end; i++) {
            pages.push(i);
        }

        return (
            <div className="gm-pagination">
                <ul className="pagination pagination-sm" onClick={this._onPage.bind(this)}>
                    <li className={paginationData.index === 1 ? 'disabled' : ''}>
                        <a href="javascript:;" data-page={paginationData.index - 1}>上一页</a>
                    </li>

                    { begin >= 2 ? (<li><a href="javascript:;" data-page="1">1</a></li>) : ''}
                    { begin >= 3 ? (<li className="disabled"><a href="javascript:;">...</a></li>) : ''}

                    {pages.map(page => <li className={paginationData.index === page ? 'active' : ''}><a
                        href="javascript:;" data-page={page}>{page}</a></li>)}

                    { end <= count - 2 ? (<li className="disabled"><a href="javascript:;">...</a></li>) : ''}
                    { end <= count - 1 ? (<li><a href="javascript:;" data-page={count}>{count}</a></li>) : ''}

                    <li className={paginationData.index === count ? 'disabled' : ''}>
                        <a href="javascript:;" data-page={paginationData.index + 1}>下一页</a>
                    </li>
                </ul>
            </div>
        );
    },
    _onPage: function (event) {
        let page = event.target.getAttribute('data-page'),
            paginationData = this.props.paginationData,
            count = Math.ceil(paginationData.total / paginationData.size);
        if(!page || page == paginationData.index || page < 1 || page > count){
            return;
        }

        console.log(page);
    }
});


export default Pagination;