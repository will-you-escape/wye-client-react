import React from 'react';

import CloseSign from './CloseSign';
import './Overlay.css';

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
