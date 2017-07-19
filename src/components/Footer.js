import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <div className="footer">
        {/* EXTERNAL ROUTES GET <a> tag - <Link> is for internal routing and to avoid re-rendering the page */}
          &copy; <a className="footer-link" to="https://www.linkedin.com/in/thomas-docu/" target="_blank">Tom Docu</a>
          {/* ADD ADMIN CONTACT LINK HERE */}
      </div>
    );
  }
}

export default Footer;
