import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../flex';
import Collapse from '../collapse';
import classNames from 'classnames';
import {getLocale} from "../../locales";

class QuickFilter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        };

        this.handleCollapse = ::this.handleCollapse;
    }

    handleCollapse() {
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        const {collapseRender, children} = this.props,
            {show} = this.state;

        return (
            <div
                className={classNames("gm-quick gm-quick-filter gm-padding-20", this.props.className, {
                    'gm-padding-bottom-0': collapseRender
                })}>
                {collapseRender ? <div>
                    {show ? null : children}

                    <Collapse in={show}>
                        {show && collapseRender()}
                    </Collapse>

                    <Flex justifyCenter className="gm-padding-10">
                        <a href="javascript:;" className="gm-quick-filter-toggle" onClick={this.handleCollapse}>
                            {show ? getLocale('quickDetail', 'closeDetails') : getLocale('quickDetail', 'showDetails')}&nbsp;
                            <i className={classNames('xfont', {
                                'xfont-down': !show,
                                'xfont-up': show
                            })}/>
                        </a>
                    </Flex>
                </div> : children}
            </div>
        );
    }
}

QuickFilter.propTypes = {
    collapseRender: PropTypes.func
};

export default QuickFilter;
