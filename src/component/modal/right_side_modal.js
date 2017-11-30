import React from 'react';
import PropTypes from 'prop-types';
import Modal from './index';
import _ from 'lodash';

class RightSideModal extends React.Component {
    render() {
        const rightSideProps = {
            ...this.props,
            modalClassName: 'gm-modal-right-side'
        };

        return <Modal {...rightSideProps} />;
    }
}

RightSideModal.render = (props) => {
    const rightSideProps = {
        ...props,
        modalClassName: 'gm-modal-right-side'
    };
    Modal.render(rightSideProps);
};

RightSideModal.hide = () => {
    Modal.hide();
};

RightSideModal.propTypes = {
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func,
    disableMaskClose: PropTypes.bool,
    size: PropTypes.string, // lg md sm
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    okBtnClassName: PropTypes.string, // Modal confirm okbtn的className
    noContentPadding: PropTypes.bool
};

RightSideModal.defaultProps = {
    onHide: _.noop,
    size: 'md',
    disableMaskClose: false,
    noContentPadding: false
};

export default RightSideModal;