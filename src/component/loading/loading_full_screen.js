import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Loading from './index';
import LayoutRoot from '../layout_root';
import Emitter from '../../emitter';

class LoadingFullScreen extends React.Component {
    render() {
        let {
            style,
            size,
            text,
            className,
            ...rest
        } = this.props;

        const s = Object.assign({}, style, {
            'width': size + 'px',
            'height': size + 'px'
        });

        return (
            <div className={classNames('gm-loading-full-screen', className)} style={style} {...rest}>
                <Loading style={s} text={text} className='gm-loading-spinner'/>
            </div>
        );
    }
}

LoadingFullScreen.render = (props) => {
    Emitter.emit(Emitter.TYPE.FULLLOADING_SHOW);
    LayoutRoot.setComponent(LayoutRoot.TYPE.FULLLOADING, (
        <LoadingFullScreen {...props}/>
    ));

    const documentBody = window.document.body;
    if (documentBody) {
        documentBody.classList.add('gm-body-overflow');
    }
};

LoadingFullScreen.hide = () => {
    Emitter.emit(Emitter.TYPE.FULLLOADING_HIDE);
    LayoutRoot.setComponent(LayoutRoot.TYPE.FULLLOADING, null);

    const documentBody = window.document.body;
    if (documentBody) {
        documentBody.classList.remove('gm-body-overflow');
    }
};

LoadingFullScreen.propTypes = {
    text: PropTypes.string,
    size: PropTypes.number
};

LoadingFullScreen.defaultProps = {
    size: 50
};

export default LoadingFullScreen;