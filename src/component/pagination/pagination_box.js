import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';

// 预估过一个月后自己看不懂
class PaginationBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // 给后台
            page_obj: null,
            limit: props.limit, // 不会变
            offset: 0, // 不会变
            peek: props.disablePage ? null : (6 * props.limit), // 不会变 and 页面会显示5页，peek 6页，便于显示 ... 代表还有更多页码

            // 返回的 pagination
            resPagination: null,

            // 组件状态
            loading: false,
            currentIndex: 0, // 从0开始吧
            pageObjArr: [null]
        };

        this.doFirstRequest = this.doFirstRequest.bind(this);
    }

    // 暴露给外面用，首次请求或重新请求
    doFirstRequest(params) {
        const {limit, offset, peek} = this.state;

        this.setState({
            page_obj: null,
            limit, offset, peek,// no this.props.limit

            resPagination: null,

            loading: false,
            currentIndex: 0,
            pageObjArr: [null]
        }, () => {
            this.handleRequest(params);
        });
    }

    handleRequest = (params, currentIndex) => {
        const {
            loading, pageObjArr,
            page_obj, limit, offset, peek
        } = this.state;

        // currentIndex 成功后才更新state，所以这里要取之前的
        currentIndex = currentIndex === undefined ? this.state.currentIndex : currentIndex;

        if (loading) {
            return;
        }

        this.setState({
            loading: true
        });

        const result = this.props.onRequest(Object.assign({
            limit,
            offset,
            peek,
            page_obj
        }, params));

        result.then(json => {
            const newPageObjArr = pageObjArr.slice();
            newPageObjArr[currentIndex + 1] = json.pagination.page_obj;
            newPageObjArr.length = currentIndex + 2; // 调整数组长度，当前位置之后的 pageobj 都清理掉，不缓存，后面拉新的为准

            this.setState({
                page_obj: json.pagination.page_obj,

                resPagination: json.pagination,

                loading: false,
                currentIndex,
                pageObjArr: newPageObjArr
            });
        }).catch((err) => {
            this.setState({
                loading: false
            });
            return Promise.reject(err);
        });
    };

    getParams = (currentIndex) => {
        const {pageObjArr, limit} = this.state;

        let i = currentIndex;
        while (pageObjArr[i] === undefined && i > 0) {
            i--;
        }

        let page_obj = pageObjArr[i] || null;

        return {
            page_obj,
            offset: (currentIndex - i) * limit
        };
    };

    handlePre = () => {
        const {currentIndex} = this.state;
        this.handleRequest(this.getParams(currentIndex - 1), currentIndex - 1);
    };

    handleNext = () => {
        const {currentIndex} = this.state;
        this.handleRequest(this.getParams(currentIndex + 1), currentIndex + 1);
    };

    handlePage = (currentIndex) => {
        this.handleRequest(this.getParams(currentIndex), currentIndex);
    };

    renderPeek() {
        const {resPagination, currentIndex, limit} = this.state;

        if (!resPagination) {
            return null;
        }

        const begin = Math.max(0, currentIndex - 5);
        const end = Math.min(Math.ceil(resPagination.peek / limit) + currentIndex, currentIndex + 5);

        const pages = _.map(_.range(begin, end), v => (
            <li key={v} className={classNames({
                active: v === currentIndex
            })}>
                <a
                    href="javascript:;"
                    onClick={this.handlePage.bind(this, v)}
                >{v + 1}</a>
            </li>
        ));

        if (Math.ceil(resPagination.peek / limit) > 5) {
            pages.push(<li className="disabled"><a href="javascript:;">...</a></li>);
        }

        return pages;
    }

    render() {
        const {children, disablePage} = this.props;
        const {loading, resPagination, currentIndex} = this.state;

        return (
            <div className="gm-pagination-box">
                <div className="gm-pagination-box-list">
                    {_.isFunction(children) ? children({loading}) : children}
                </div>
                <div className="gm-pagination text-right">
                    <ul className="pagination pagination-sm gm-margin-0">
                        <li className={classNames({
                            disabled: currentIndex === 0
                        })}>
                            <a
                                href="javascript:;"
                                onClick={this.handlePre}
                            >上一页</a>
                        </li>

                        {!disablePage && this.renderPeek()}

                        <li className={classNames({
                            disabled: resPagination && !resPagination.more
                        })}>
                            <a
                                href="javascript:;"
                                onClick={this.handleNext}
                            >下一页</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

PaginationBox.propTypes = {
    // 提供 page_obj，要返回 promise，且 resolve json
    onRequest: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

    limit: PropTypes.number,

    disablePage: PropTypes.bool
};

PaginationBox.defaultProps = {
    limit: 10,
    disablePage: false
};

export default PaginationBox;
