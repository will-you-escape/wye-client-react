import React from 'react';

import HomePageExplanationsBlock from './HomePageExplanationsBlock';

import recordEscapeImage from './recordEscape.png';
import findEscapesImage from './findEscapes.png';
import discussTeamImage from './discussTeam.png';

const sectionList = [
  {
    id: 'recordEscapes',
    text: 'Record all your escapes',
    picture: recordEscapeImage
  },
  {
    id: 'findEscapes',
    text: 'Find your next escapes',
    picture: findEscapesImage
  },
  {
    id: 'discussTeam',
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
            key={section.id}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default HomePageExplanations;
