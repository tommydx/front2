// This will be the front page users reach when logging in or signing up.
import React, { Component } from 'react';

// React Link tags replace HTML <a> tags for inter App routing (use <a> tags for outside links)
import { Link } from 'react-router';

class PortalPage extends Component {
  constructor() {
    super();
  }

  // Animating the site logo
  portalClick(event) {
    console.log(event.target.classList);
    event.target.classList.add('animated');
    event.target.classList.add('zoomOutUp');
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return(
      <div>
        <div className="portal-container">
        <img className="portal-img" onClick={(e) => this.portalClick(e)} src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/WsxUquz/technological-interface-background-audio-wave-forms-diagrams-equaliser-seamless-loopable_vjlwhpwqt__S0000.jpg" height="100px"/>

          <div className="logo-link">Sonic Gate
            <div className="portal-buttons">
              <Link to="/signup">
                <button type="submit">Sign Up</button>
              </Link>

              <Link to="/login">
                <button type="submit" className="login-button button">Log In</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PortalPage;
