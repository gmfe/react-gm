import React from 'react';
import PropTypes from 'prop-types';
import Modal from './index';
import _ from 'lodash';

class CleanModal extends React.Component {
    render() {
        const props = {
            ...this.props,
            modalClassName: 'gm-modal-clean'
        };

        return <Modal {...props} />;
    }
}

CleanModal.render = (props) => {
    const rightSideProps = {
        ...props,
        modalClassName: 'gm-modal-clean'
    };
    Modal.render(rightSideProps);
};

CleanModal.hide = () => {
    Modal.hide();
};

CleanModal.propTypes = {
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

CleanModal.defaultProps = {
    onHide: _.noop,
    size: 'md',
    disableMaskClose: false,
    noContentPadding: false
};
export default CleanModal;