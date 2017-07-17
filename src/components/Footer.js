import React, { Component } from 'react';
import { Link } from 'react-router';

class Footer extends Component {

  render() {
    return (
      <div className="footer">
          &copy; <Link className="footer-link" to="https://www.linkedin.com/in/thomas-docu/" target="_blank">Tom Docu</Link>
          {/* ADD ADMIN CONTACT LINK HERE */}
      </div>
    );
  }
}

export default Footer;
