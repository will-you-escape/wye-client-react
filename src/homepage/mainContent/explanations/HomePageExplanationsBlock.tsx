import React from 'react';

class HomePageExplanationsBlock extends React.Component {
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
