import React from 'react';

import HomePageTitle from './HomePageTitle';
import AccountCreation from '../components/accountCreation/AccountCreation';

class HomePageContent extends React.Component {
  render() {
    return (
      <div className="homepage__content">
        <HomePageTitle />
        <div className="homepage__account-creation">
          <AccountCreation />
        </div>
      </div>
    );
  }
}

export default HomePageContent;
