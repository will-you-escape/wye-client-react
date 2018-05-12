import React from 'react';
import { connect } from 'react-redux';

import Header from '../containers/header/Header';
import HomePageContent from './HomePageContent';

import './homepage.css';

export class HomePage extends React.Component {
  render() {
    const { loggedIn } = this.props;

    return (
      <div className="app">
        <Header loggedIn={loggedIn} />
        <HomePageContent />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.logged
  };
};

export default connect(mapStateToProps)(HomePage);
