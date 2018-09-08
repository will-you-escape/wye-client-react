import React from 'react';
import { connect } from 'react-redux';

import { logInUser } from '../reducers/actions';
import Header from './header/Header';
import HomePageContent from './mainContent/HomePageContent';
import Footer from './footer/Footer';
import SnackBar from '../components/snackBar/SnackBar';

import './homepage.css';

class HomePage extends React.Component {
  render() {
    const { loggedIn, logInUser } = this.props;

    return (
      <div className="app">
        <SnackBar />
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
