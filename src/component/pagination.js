import React, {PropTypes} from 'react';

class WithCount extends React.Component {
    constructor(props) {
        super(props);
        this.handlePage = ::this.handlePage;
    }

    render() {
        let data = Object.assign({}, this.props.data);

        data.index = data.offset / data.limit + 1;

        let offset = 2,
            pages = [],
            all = Math.ceil(data.count / data.limit),
            begin = Math.max(data.index - offset, 1),
            end = Math.min(data.index + offset, all);

        if (all > (offset * 2 + 1)) {
            if (begin === 1) {
                end += offset;
            } else if (end === all) {
                begin = Math.max(begin - offset, 1);
            }
        }

        for (let i = begin; i <= end; i++) {
            pages.push(i);
        }

        return (
            <div className="gm-pagination">
                <ul className="pagination pagination-sm" onClick={this.handlePage}>
                    <li className={data.index === 1 ? 'disabled' : ''}>
                        <a href="javascript:;" data-page={data.index - 1}>&laquo;</a>
                    </li>

                    { begin >= 2 ? (<li><a href="javascript:;" data-page="1">1</a></li>) : undefined}
                    { begin >= 3 ? (<li className="disabled"><a href="javascript:;">...</a></li>) : undefined}

                    {pages.map((page, i) => <li key={i} className={data.index === page ? 'active' : ''}><a
                        href="javascript:;" data-page={page}>{page}</a></li>)}

                    { end <= all - 2 ? (<li className="disabled"><a href="javascript:;">...</a></li>) : undefined}
                    { end <= all - 1 ? (<li><a href="javascript:;" data-page={all}>{all}</a></li>) : undefined}

                    <li className={data.index === all ? 'disabled' : ''}>
                        <a href="javascript:;" data-page={data.index + 1}>&raquo;</a>
                    </li>
                </ul>
            </div>
        );
    }

    handlePage(event) {
        const page = ~~event.target.getAttribute('data-page'),
            data = this.props.data,
            count = Math.ceil(data.count / data.limit),
            toPage = this.props.toPage;
        if (!page || page === data.index || page < 1 || page > count) {
            return;
        }

        toPage({
            offset: (page - 1) * data.limit,
            limit: data.limit
        }, page);
    }
}

class WithoutCount extends React.Component {
    constructor(props) {
        super(props);
        this.handlePage = ::this.handlePage;
    }

    handlePage(action) {
        const {data, toPage} = this.props;

        if (action === -1) {
            if (data.offset === 0) {
                return;
            }
            toPage({
                offset: Math.max(data.offset - data.limit, 0),
                limit: data.limit
            });
        } else {
            toPage({
                offset: data.offset + data.limit,
                limit: data.limit
            });
        }
    }

    render() {
        const {data, nextDisabled} = this.props;
        return (
            <div className="gm-pagination">
                <ul className="pagination pagination-sm">
                    <li className={data.offset === 0 ? 'disabled' : ''}>
                        <a
                            href="javascript:;"
                            onClick={this.handlePage.bind(this, -1)}
                        >上一页</a>
                    </li>
                    <li className={nextDisabled ? 'disabled' : ''}>
                        <a
                            href="javascript:;"
                            onClick={this.handlePage.bind(this, 1)}
                        >下一页</a>
                    </li>
                </ul>
            </div>
        );
    }
}

class Pagination extends React.Component {
    render() {
        if (this.props.data.count) {
            return <WithCount {...this.props}/>;
        } else {
            return <WithoutCount {...this.props}/>;
        }
    }
}

Pagination.displayName = 'Pagination';
Pagination.propTypes = {
    data: PropTypes.shape({
        count: PropTypes.number,
        offset: PropTypes.number.isRequired,
        limit: PropTypes.number.isRequired
    }),
    toPage: PropTypes.func.isRequired,
    nextDisabled: PropTypes.bool
};

export default Pagination;