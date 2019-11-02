import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import Button from "../components/Button";
import auth from "../auth/core";
import { logOutUser } from "../reducers/actions";

interface IDispatchLogOutUser {
  (): void;
}

interface IProps {
  dispatchLogOutUser: IDispatchLogOutUser;
}

class LogoutForm extends React.Component<IProps> {
  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { dispatchLogOutUser } = this.props;
    auth
      .logout()
      .then(response => {
        dispatchLogOutUser();
      })
      .catch(error => {
        alert(error);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <Button>Logout</Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    dispatchLogOutUser: () => {
      dispatch(logOutUser());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LogoutForm);
