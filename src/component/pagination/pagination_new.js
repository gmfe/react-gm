import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class WithCount extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pages: [{
                number: 1
            }],
            current: 1
        };

        this.handlePage = ::this.handlePage;
    }

    componentWillReceiveProps(nextProps) {
        const { current, pages } = this.state,
            { limit } = nextProps,
            { peek, pageobj } = nextProps.pagination;

        if (this.props.pagination !== nextProps.pagination) {
            const currentIndex = _.findIndex(pages, page => page.number === current),
                pagesNew = _.slice(pages, 0, currentIndex + 1),
                currentPage = pages[currentIndex],
                afterPageCount = Math.ceil(peek / limit);
            let i = 1;

            currentPage.pageobj = pageobj;

            while (i <= afterPageCount) {
                pagesNew.push({
                    number: currentPage.number + i
                });
                i++;
            }

            this.setState({
                pages: pagesNew
            });
        }
    }

    handlePage(event) {
        const { pages } = this.state,
            { onChange, limit } = this.props,
            pageClicked = ~~event.target.getAttribute('data-page');

        if (pageClicked < 1 || pageClicked > pages.length) return;

        this.setState({ current: pageClicked });

        const pageClickedIndex = _.findLastIndex(pages, page => page.number === pageClicked),
            closestFromPageIndex = _.findLastIndex(pages, page => page.pageobj, pageClickedIndex - 1);

        let params = {};
        if (pageClickedIndex === 0) {
            params = {
                limit,
                peek: 100
            };
        } else {
            params = {
                limit,
                pageobj: pages[closestFromPageIndex].pageobj,
                offset: (pageClickedIndex - closestFromPageIndex - 1) * limit,
                peek: pageClicked > 5 ? 50 : (10 - pageClickedIndex) * limit
            };
        }

        window.document.activeElement.blur();

        onChange(params);
    }

    render() {
        const { current } = this.state,
            len = this.state.pages.length;

        let pages = [];

        if (current <= 6) {
            pages = _.slice(this.state.pages, 0, 10);
        } else if (current > 6 && current < len - 4) {
            pages = _.slice(this.state.pages, current - 6, current + 4);
        } else {
            pages = _.slice(this.state.pages, -10);
        }

        return (
            <div className="gm-pagination">
                <ul className="pagination pagination-sm" onClick={this.handlePage}>
                    <li className={current === pages[0].number ? 'disabled' : ''}>
                        <a href="javascript:;" data-page={current - 1}>上一页</a>
                    </li>

                    {pages.map((page, i) => <li key={i} className={current === page.number ? 'active' : ''}><a
                        href="javascript:;" data-page={page.number}>{page.number}</a></li>)}

                    <li className={current === _.last(pages).number ? 'disabled' : ''}>
                        <a href="javascript:;" data-page={current + 1}>下一页</a>
                    </li>
                </ul>
            </div>
        );
    }
}

WithCount.defaultProps = {
    limit: 10
};

WithCount.propTypes = {
    pagination: PropTypes.shape({
        pageobj: PropTypes.string,
        peek: PropTypes.number
    }),
    limit: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

class WithoutCount extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isFirstPage: true,
            reverse: false,
            pageobj: ''
        };

        this.handlePage = ::this.handlePage;
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.pagination !== nextProps.pagination) {
            const { pageobj, reverse } = this.state;

            const stateNew = {
                pageobj: nextProps.pagination.pageobj
            };

            // 非第一次点击
            if (pageobj) {
                stateNew.isFirstPage = reverse ? !nextProps.pagination.more : false;
            }

            this.setState(stateNew);
        }
    }

    handlePage(reverse) {
        const { onChange, limit } = this.props,
            { pageobj } = this.state;
        let params = {};

        this.setState({
            isFirstPage: reverse,
            reverse
        });

        params = {
            limit,
            reverse: !!reverse,
            pageobj
        };

        onChange(params);

        window.document.activeElement.blur();
    }

    render() {
        const { pagination } = this.props,
            { reverse, isFirstPage } = this.state,
            { more } = pagination;

        return (
            <div className="gm-pagination">
                <ul className="pagination pagination-sm">
                    <li className={isFirstPage ? 'disabled' : ''}>
                        <a
                            href="javascript:;"
                            onClick={this.handlePage.bind(this, true)}
                        >上一页</a>
                    </li>
                    <li className={!reverse && !more ? 'disabled' : ''}>
                        <a
                            href="javascript:;"
                            onClick={this.handlePage.bind(this, false)}
                        >下一页</a>
                    </li>
                </ul>
            </div>
        );
    }
}

WithoutCount.defaultProps = {
    limit: 10
};

WithoutCount.propTypes = {
    pagination: PropTypes.shape({
        pageobj: PropTypes.string,
        peek: PropTypes.number,
        more: PropTypes.bool
    }),
    limit: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

class Pagination extends React.Component {
    render() {
        if (this.props.showCount) {
            return <WithCount {...this.props} />;
        } else {
            return <WithoutCount {...this.props} />;
        }
    }
}

Pagination.displayName = 'Pagination';
Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    showCount: PropTypes.bool
};

Pagination.defaultProps = {
    showCount: true
};

export default Pagination;