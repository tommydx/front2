import React, { Component } from 'react';
import axios from 'axios';
import { Link, browserHistory } from 'react-router';

class NavOut extends Component {
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
        <nav className=''>
          <div className=''>
            <Link to={`/`}>
              <div className=''>
              </div>
              <div className='logo-text'>
                Sonic Gate
              </div>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavOut;
