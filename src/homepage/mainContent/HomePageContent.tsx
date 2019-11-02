import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import HomePageExplanations from "./explanations/HomePageExplanations";
import HomePageTitle from "./title/HomePageTitle";
import AccountCreation from "./accountCreation/AccountCreation";
import { accountCreationRequested } from "../../reducers/actions";
import { ICreateAccountData } from "../../api/user";

interface IDispatchToProps {
  accountCreationRequested: (data: ICreateAccountData) => void;
}

class HomePageContent extends React.Component<IDispatchToProps> {
  onAccountCreationSuccess = (data: ICreateAccountData) => {
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

const mapDispatchToProps = (dispatch: Dispatch): IDispatchToProps => ({
  accountCreationRequested: data => dispatch(accountCreationRequested(data))
});

export default connect(
  null,
  mapDispatchToProps
)(HomePageContent);
