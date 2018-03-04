import React from 'react';
import { connect } from 'react-redux';

class CloseSign extends React.Component {
  render() {
    const { onClose } = this.props;

    return (
      <span className="close-sign">
        <button onClick={onClose}>X</button>
      </span>
    );
  }
}

export default CloseSign;
