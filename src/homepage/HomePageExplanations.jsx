import React from 'react';

import HomePageExplanationsBlock from './HomePageExplanationsBlock';

import recordEscapeImage from './recordEscape.png';
import findEscapesImage from './findEscapes.png';
import discussTeamImage from './discussTeam.png';

const sectionList = [
  {
    text: 'Record all your escapes',
    picture: recordEscapeImage
  },
  {
    text: 'Find your next escapes',
    picture: findEscapesImage
  },
  {
    text: 'Discuss with your team',
    picture: discussTeamImage
  }
];

class HomePageExplanations extends React.Component {
  render() {
    return (
      <React.Fragment>
        {sectionList.map(section => (
          <HomePageExplanationsBlock
            text={section.text}
            picture={section.picture}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default HomePageExplanations;
