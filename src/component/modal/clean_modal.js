import PropTypes from 'prop-types'
import Modal from './index'
import _ from 'lodash'

const CleanModal = {}

CleanModal.render = props => {
  const cleanProps = {
    ...props,
    className: 'gm-modal-clean'
  }
  Modal.render(cleanProps)
}

CleanModal.hide = () => {
  Modal.hide()
}

CleanModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func,
  disableMaskClose: PropTypes.bool,
  size: PropTypes.string, // lg md sm
  title: PropTypes.string,
  okBtnClassName: PropTypes.string, // Modal confirm okbtn的className
  noContentPadding: PropTypes.bool
}

CleanModal.defaultProps = {
  onHide: _.noop,
  size: 'md',
  disableMaskClose: false,
  noContentPadding: false
}
export default CleanModal
