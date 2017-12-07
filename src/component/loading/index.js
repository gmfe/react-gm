import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

// 如果需要设置loading大小:  set size = 100  (default 50)
const LIMIT = 12;

class Loading extends React.Component {

    componentDidMount() {
        const {color} = this.props;

        // 可以通过重写的方式覆盖默认的颜色，但是提供一个 color props 感觉更方便点
        if(color) {
            const style = window.document.createElement("style");
            window.document.head.appendChild(style);
            let sheet = style.sheet;

            sheet.addRule('.gm-loading .loading-circle::before','background-color: ' + color);
            sheet.insertRule('gm-loading .loading-circle::before { background-color: ' + color + ' }', 0);
        }
    }

    render() {
        let {style, size} = this.props;

        style = Object.assign({}, style, {
            'width': size + 'px',
            'height': size + 'px'
        });
        return (
            <div className="gm-loading" style={style}>
                {
                    _.times(LIMIT, (i) => (
                        <div key={i} className={"circle" + (i+1) + " loading-circle"} />
                    ))
                }
            </div>
        );
    }
}

Loading.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string
};

Loading.defaultProps = {
    size: 50
};

export default Loading;