// This will be the front page users reach when logging in or signing up.
import React, { Component } from 'react';

// React Link tags replace HTML <a> tags for inter App routing (use <a> tags for outside links)
import { Link } from 'react-router';

class PortalPage extends Component {
  constructor() {
    super();
  }

  // <img src={require ('../assets/img/')} className="" />
  render() {
    return(
      <div>
        <div className="logo-link">Sonic Gate</div>
        {/*CREATE AND ADD A LOGO IMAGE HERE MAYBE*/}
        <div className="portal-container">
          <Link to="/signup">
            <button type="submit">Sign Up</button>
          </Link>

          <Link to="/login">
            <button type="submit" className="login-button button">Log In</button>
          </Link>
        </div>
      </div>
    );
  }

}

export default PortalPage;
