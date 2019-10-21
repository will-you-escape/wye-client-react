import React from "react";

interface IProps {
  text: string;
  picture: string;
}

class HomePageExplanationsBlock extends React.Component<IProps> {
  render() {
    const { text, picture } = this.props;

    return (
      <div className="homepage__explanations_block">
        <img src={picture} alt="{ text }" />
        <h4>{text}</h4>
      </div>
    );
  }
}

export default HomePageExplanationsBlock;
