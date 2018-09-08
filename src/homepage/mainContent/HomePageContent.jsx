import React from 'react';
import { connect } from 'react-redux';

import HomePageExplanations from './explanations/HomePageExplanations';
import HomePageTitle from './title/HomePageTitle';
import AccountCreation from './accountCreation/AccountCreation';
import { accountCreationRequested } from '../../reducers/actions';

class HomePageContent extends React.Component {
  onAccountCreationSuccess = data => {
    this.props.accountCreationRequested(data);
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

const mapDispatchToProps = dispatch => ({
  accountCreationRequested: data => dispatch(accountCreationRequested(data))
});

export default connect(null, mapDispatchToProps)(HomePageContent);