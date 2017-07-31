import React, { Component } from 'react';
import { Link } from 'react-router';

class Footer extends Component {

  //  EXTERNAL ROUTES GET <a> tag - <Link> is for internal  routing and to avoid re-rendering the page
  render() {
    return (
      <div className="footer">
          <Link className="footer-link" to="https://www.linkedin.com/in/thomas-docu/" target="_blank">&copy; Tom Docu</Link>
      </div>
    );
  }
}

export default Footer;
