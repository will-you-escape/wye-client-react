import React from 'react';

import HomePageExplanations from './HomePageExplanations';
import HomePageTitle from './HomePageTitle';
import AccountCreation from '../components/accountCreation/AccountCreation';

class HomePageContent extends React.Component {
  onAccountCreationSuccess = () => {
    console.log('Account creation successful');
  };

  render() {
    return (
      <div className="homepage__content">
        <HomePageTitle />
        <div className="homepage__account-creation">
          <AccountCreation
            onAccountCreationSuccess={this.onAccountCreationSuccess}
          />
        </div>
        <div className="homepage__explanations-section">
          <HomePageExplanations />
        </div>
      </div>
    );
  }
}

export default HomePageContent;
