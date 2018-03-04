import React from 'react';
import { connect } from 'react-redux';

import CloseSign from './CloseSign';

class Overlay extends React.Component {
  render() {
    const { onClose } = this.props;

    return (
      <div className="overlay">
        <CloseSign onClose={onClose} />
        {this.props.children}
      </div>
    );
  }
}

export default Overlay;
