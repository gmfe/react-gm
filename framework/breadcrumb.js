import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class Breadcrumb extends React.Component {
    render() {
        const {data, back} = this.props;

        if (!data || data.length === 0) {
            return <div className="gm-framework-breadcrumb-default"/>;
        }

        return (
            <ol className="gm-framework-breadcrumb-default breadcrumb">
                {back && <li>
                    <a
                        href="javascript:;"
                        onClick={() => back()}
                        className="gm-framework-breadcrumb-default-back"
                    >返回</a>
                </li>}
                {_.map(data.slice(0, -1), (v, i) => (
                    <li key={i + '_' + v.link}>
                        <a
                            href={"#" + v.link}
                            className="gm-framework-breadcrumb-default-link"
                        >{v.text}</a>
                    </li>
                ))}
                <li className="active">{data.slice(-1)[0].text}</li>
            </ol>
        );
    }
}

Breadcrumb.propTypes = {
    data: PropTypes.array, // [{text, link}]
    back: PropTypes.oneOfType([PropTypes.func, PropTypes.bool])
};

export default Breadcrumb;