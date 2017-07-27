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
    axios
      .get(`http://localhost:8080/users/${this.props.userId}`, {
        headers: {
          'Authorization': window.localStorage.getItem('token')
        }
      })
      .then((response) => {
        const userData = response.data;
        // window.localStorage.setItem('token', data.token);
        // window.localStorage.setItem('user_id', data.id);
        console.log('this is user data NAV', userData);
        // this.setState({
        //   user:userData
        // });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // holdUser() {
  //   window.localStorage.setItem('token', data.token);
  //   window.localStorage.setItem('user_id', data.id);
  // }

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
                <img className='user-img' src="http://4.bp.blogspot.com/-tI_T8cSWYqI/UKgwcI_goUI/AAAAAAAAAjc/xMTmJE0Mpus/s1600/smiley_face_punk_front.jpg" width="70px" />
              </Link>
            </div>

            <Link to={`/users/${this.props.userId}`} className='logo-link'>
              <div className='nav-img'>
                <img className="logo-img" src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/WsxUquz/technological-interface-background-audio-wave-forms-diagrams-equaliser-seamless-loopable_vjlwhpwqt__S0000.jpg" height="100px"/>
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
                <Link to={`/users/${this.props.userId}`} >
                  <button type='button'  className='home-button button'>Home</button>
                </Link>
              </div>

              {/* User Profile Info */}
              <div className='edit-acct-nav'>
                <Link to={`/users/${this.props.userId}/edit`}>
                  <button type='submit'  className='edit-acct-button button'>Account</button>
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

// // USED FOR REFERENCE --- https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
//   function storageAvailable(type) {
//     try {
//         var storage = window[type],
//             x = '__storage_test__';
//         storage.setItem(x, x);
//         storage.removeItem(x);
//         return true;
//     }
//     catch(e) {
//         return e instanceof DOMException && (
//             // everything except Firefox
//             e.code === 22 ||
//             // Firefox
//             e.code === 1014 ||
//             // test name field too, because code might not be present
//             // everything except Firefox
//             e.name === 'QuotaExceededError' ||
//             // Firefox
//             e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
//             // acknowledge QuotaExceededError only if there's something already stored
//             storage.length !== 0;
//     }
// }
// if (storageAvailable('localStorage')) {
// 	// Yippee! We can use localStorage awesomeness
// }
// else {
// 	// Too bad, no localStorage for us
// }
