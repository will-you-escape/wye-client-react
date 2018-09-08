import React from 'react';

import './footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <ul>
          <li>
            <a href="/">Who are we?</a>
          </li>
          <li>
            <a href="/">Contact us</a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
