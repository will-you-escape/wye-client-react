import React from 'react';
import { connect } from 'react-redux';

import { logInUser } from '../reducers/actions';
import Header from '../containers/header/Header';
import HomePageContent from './HomePageContent';
import Footer from '../containers/footer/Footer';

import './homepage.css';

class HomePage extends React.Component {
  render() {
    const { loggedIn, logInUser } = this.props;

    return (
      <div className="app">
        <Header loggedIn={loggedIn} onLoginSuccess={logInUser} />
        <HomePageContent />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.logged
  };
};

const mapDispatchToProps = dispatch => ({
  logInUser: data => dispatch(logInUser(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
