import React from 'react';
import Modal from 'react-modal';

import CloseSign from './CloseSign';
import './Overlay.css';

Modal.setAppElement('body');

class Overlay extends React.Component {
  render() {
    const { onClose, displayOverlay } = this.props;

    return (
      <Modal isOpen={displayOverlay} onRequestClose={onClose}>
        <CloseSign onClose={onClose} />
        {this.props.children}
      </Modal>
    );
  }
}

export default Overlay;
