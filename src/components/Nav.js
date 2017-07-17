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
              <Link to={`/user/${this.props.userId}/edit`}>
                <img className='user-image' src={`${this.state.user.photo}`} width='70px'/>
              </Link>
            </div>

            <Link to={`/places/${this.props.userId}`} className='logo-link'>
              <div className='nav-image'>
              </div>
              <div className='logo-text'>
                Sonic Gate
              </div>
            </Link>

            <div id='signOut-nav' className='user-home-button-contain'>
              <button type='submit' className='nav-button' onClick={this.handleLogout.bind(this)}>Sign Out</button>
            </div>

            {/* BUTTON TO REDIRECT TO USER PROFILE INFO*/}
            <div id='account-nav' className='user-home-button-contain'>
              <Link to={`/user/${this.props.userId}/edit`}>
                <button type='submit'  className='nav-button'>Account</button>
              </Link>
            </div>

            {/* BUTTON TO REDIRECT TO USER DASHBOARD */}
            <div id='home-nav' className='user-home-button-contain'>
              <Link to={`/places/${this.props.userId}`} >
                <button type='button'  className='nav-button'>Home</button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
