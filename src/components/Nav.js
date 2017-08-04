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

  componentDidMount() {
    console.log('inside component did mount NAV')
    let theid = window.localStorage.getItem('id');
    console.log(theid);
    axios
      .get(`http://localhost:8080/users/${window.localStorage.user_id}`, {
        headers: {
          'Authorization': window.localStorage.getItem('token')
        }
      })
      .then((response) => {
        const userData = response.data;
        // console.log('this is user data NAV', theid, userData);
        this.setState({
          user:userData
        });
        console.log('user data check 2', theid, userData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleLogout(event) {
    event.preventDefault();
    // REMOVE USER INFO FROM STORAGE ON LOGOUT
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user_id');
    // REDIRECT USER TO PORTAL WHEN LOGGED OUT
    browserHistory.push('/');
  }

  render() {
    return (
      <div>
        <nav className='nav-all'>
          <div className='nav-container'>

            <div className="userImgContainer">
              <Link to={`/users/${this.props.userId}/edit`}>
                <img className="user-img" src={`${this.state.user.photo}`} width="70px"/>
              </Link>
            </div>

            <Link to={`/users/${this.props.userId}`} className='logo-link'>
              <div className='nav-img'>
                <img className="logo-img" src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/WsxUquz/technological-interface-background-audio-wave-forms-diagrams-equaliser-seamless-loopable_vjlwhpwqt__S0000.jpg" />
              </div>
            </Link>

            <Link to={`/users/${this.props.userId}`} className='logo-link'>
              <div className="logo-text">
                Sonic Gate
              </div>
            </Link>

            <div className="nav-buttons">
              {/* User Home Page */}
              <div className="home-button-nav">
                <Link to={`/users/${window.localStorage.user_id}`} >
                  <button type='button'  className='home-button button'>Home</button>
                </Link>
              </div>

              {/* User Profile Info */}
              <div className='edit-acct-nav'>
                <Link to={`/users/${window.localStorage.user_id}/edit`}>
                  <button type='submit'  className='edit-acct-button button'>Account</button>
                  </Link>
              </div>

              {/* User Profile Info */}
              <div className='search-users-nav'>
                <Link to={`/users/${window.localStorage.user_id}/search`}>
                  <button type='submit'  className='search-users-button button'>Search Members</button>
                  </Link>
              </div>

              {/* User Sign Out */}
              <div className='signout-nav'>
                <button type='submit' className='signout-button button' onClick={this.handleLogout.bind(this)}>Sign Out</button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
