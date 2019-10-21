import React from "react";
import Modal from "react-modal";

import CloseSign, { IonCloseFn } from "./CloseSign";
import "./Overlay.css";

interface IProps {
  onClose: IonCloseFn;
  displayOverlay: boolean;
}

Modal.setAppElement("body");

class Overlay extends React.Component<IProps, {}> {
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
