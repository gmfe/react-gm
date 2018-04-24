import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';

const initState = {
    pages: [{
        number: 1
    }],
    current: 1,
    pageClicked: 1 // 加了限制，点击页码未收到响应之前其他页码不可点
};

class WithCount extends React.Component {
    constructor(props) {
        super(props);

        this.state = _.cloneDeep(initState);

        this.handlePage = :: this.handlePage;
    }

    componentWillReceiveProps(nextProps) {
        const { pages, pageClicked } = this.state,
            { limit } = nextProps,
            { peek, page_obj } = nextProps.pagination;

        if (this.props.pagination !== nextProps.pagination) {
            if (!nextProps.pagination.page_obj) {
                this.setState({ ...initState });
                return;
            }

            const currentIndex = _.findIndex(pages, page => page.number === pageClicked),
                pagesNew = _.slice(pages, 0, currentIndex + 1),
                currentPage = pages[currentIndex],
                afterPageCount = Math.ceil(peek / limit) - 1; // 后面新增afterPageCount页
            let i = 1;

            currentPage.page_obj = page_obj;

            while (i <= afterPageCount) {
                pagesNew.push({
                    number: currentPage.number + i
                });
                i++;
            }

            this.setState({
                pages: pagesNew,
                pageClicked: null,
                current: pageClicked
            });
        }
    }

    handlePage(event) {
        const { pages } = this.state,
            { onChange, limit } = this.props,
            pageClicked = ~~event.target.getAttribute('data-page');

        if (pageClicked < 1 || pageClicked > pages.length) return;

        this.setState({ pageClicked });

        const pageClickedIndex = _.findLastIndex(pages, page => page.number === pageClicked),
            closestFromPageIndex = _.findLastIndex(pages, page => page.page_obj, pageClickedIndex - 1);

        let params = {};
        if (pageClickedIndex === 0) {
            params = {
                limit,
                peek: 100
            };
        } else {
            params = {
                limit,
                page_obj: pages[closestFromPageIndex].page_obj,
                offset: (pageClickedIndex - closestFromPageIndex - 1) * limit,
                peek: pageClicked > 5 ? 50 : (10 - pageClickedIndex) * limit
            };
        }

        window.document.activeElement.blur();

        onChange(params);
    }

    render() {
        const { current, pageClicked } = this.state,
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
                    <li className={classNames({ 'disabled': current === pages[0].number || pageClicked })}>
                        <a href="javascript:;" data-page={current - 1}>上一页</a>
                    </li>

                    {pages.map((page, i) => <li key={i} className={classNames({ 'disabled': current !== page.number && pageClicked, active: current === page.number })}>
                        <a href="javascript:;" data-page={page.number}>{page.number}</a></li>)}

                    <li className={classNames({ 'disabled': current === _.last(pages).number || pageClicked })}>
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
        page_obj: PropTypes.string,
        peek: PropTypes.number
    }),
    limit: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

const initStateWithoutCount = {
    isFirstPage: true,
    reverse: false,
    page_obj: null
};

class WithoutCount extends React.Component {
    constructor(props) {
        super(props);

        this.state = _.cloneDeep(initStateWithoutCount);

        this.handlePage = :: this.handlePage;
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.pagination !== nextProps.pagination) {
            if (!nextProps.pagination.page_obj) {
                this.setState({ ...initStateWithoutCount });
                return;
            }

            const { page_obj, reverse } = this.state;

            const stateNew = {
                page_obj: nextProps.pagination.page_obj
            };

            // 非第一次点击
            if (page_obj) {
                stateNew.isFirstPage = reverse ? !nextProps.pagination.more : false;
            }

            this.setState(stateNew);
        }
    }

    handlePage(reverse) {
        const { onChange, limit } = this.props,
            { page_obj } = this.state;
        let params = {};

        this.setState({
            isFirstPage: reverse,
            reverse
        });

        params = {
            limit,
            reverse: reverse ? 1 : 0,
            page_obj
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
        page_obj: PropTypes.string,
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