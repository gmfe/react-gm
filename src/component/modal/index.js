import React, {PropTypes} from 'react';
import LayoutRoot from '../layout_root';
import className from 'classnames';
import _ from 'lodash';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.handleMask = ::this.handleMask;
        this.handleClose = ::this.handleClose;
        this.handleKeyDown = ::this.handleKeyDown;
    }

    componentDidMount() {
        window.document.body.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnMount() {
        window.document.body.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown(event) {
        if (this.props.show) {
            if (event.keyCode === 27) {
                this.props.onHide();
            }
        }
    }

    handleMask(e) {
        if (e.target.className === 'gm-modal') {
            this.props.onHide();
        }
    }

    handleClose() {
        this.props.onHide();
    }

    render() {
        const {show, title, size, children} = this.props;
        if (!show) {
            return null;
        }

        return (
            <div>
                <div className="gm-modal-mask"/>
                <div
                    className="gm-modal"
                    tabIndex="-1"
                    onClick={this.handleMask}
                >
                    <div className={className("gm-modal-dialog", "gm-modal-" + size, {
                        in: show
                    })}>
                        <button
                            type="button"
                            className="close"
                            onClick={this.handleClose}
                        >
                            <span>×</span>
                        </button>
                        {title ? (
                            <div className="gm-modal-title">
                                {title}
                            </div>
                        ) : null}
                        <div className="gm-modal-content">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.render = (props) => {
    LayoutRoot.setComponent(LayoutRoot.TYPE.MODAL, (
        <Modal show={true} {...props}/>
    ));
};

Modal.hide = () => LayoutRoot.setComponent(LayoutRoot.TYPE.MODAL, null);

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func,
    size: PropTypes.string, // lg md sm
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ])
};

Modal.defaultProps = {
    onHide: _.noop,
    size: 'md'
};

export default Modal;