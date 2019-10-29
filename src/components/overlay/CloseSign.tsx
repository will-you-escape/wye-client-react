import React from "react";

export interface IonCloseFn {
  (): void;
}

interface IProps {
  onClose: IonCloseFn;
}

class CloseSign extends React.Component<IProps, {}> {
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
