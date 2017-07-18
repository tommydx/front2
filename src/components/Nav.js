import React, { Component } from 'react';
import axios from 'axios';
import { Link, browserHistory } from 'react-router';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: []
    };
  }

  handleLogout(event) {
    event.preventDefault();
    // window.localStorage.removeItem('token');
    browserHistory.push('/');
  }

  componentDidMount() {
    axios
      .get(` ${this.props.userId}`, {
        // headers: {
        //   'Authorization': window.localStorage.getItem('token')
        // }
      })
      .then((response) => {
        const userData = response.data;
        this.setState({
          user:userData
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <nav className='nav-bar'>
          <div className='nav-buttons'>

            <div >
              <Link to={`/users/${this.props.userId}/edit`}>
                <img className='user-image' src="http://4.bp.blogspot.com/-tI_T8cSWYqI/UKgwcI_goUI/AAAAAAAAAjc/xMTmJE0Mpus/s1600/smiley_face_punk_front.jpg" width="70px" />
              </Link>
            </div>

            <Link to={`/users/${this.props.userId}`} className='logo-link'>
              <div className='nav-image'>
                <img className="logo-image" src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/WsxUquz/technological-interface-background-audio-wave-forms-diagrams-equaliser-seamless-loopable_vjlwhpwqt__S0000.jpg" height="100px"/>
              </div>
              <div>
                Sonic Gate
              </div>
            </Link>

            {/* User Home Page */}
            <div id='nav-home' className=''>
              <Link to={`/users/${this.props.userId}`} >
                <button type='button'  className='home-button button'>Home</button>
              </Link>
            </div>

            {/* User Profile Info */}
            <div id='nav-edit-acct' className=''>
              <Link to={`/users/${this.props.userId}/edit`}>
                <button type='submit'  className='edit-acct-button button'>Account</button>
                </Link>
            </div>

            {/* User Sign Out */}
            <div id='nav-signout' className=''>
              <button type='submit' className='signout-button button' onClick={this.handleLogout.bind(this)}>Sign Out</button>
            </div>


          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
