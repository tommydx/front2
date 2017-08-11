import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';

import NavOut from './NavOut';
import Footer from './Footer';

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post('http://localhost:8080/users/login', {
        user: this.state
      })
      .then((response) => {
        const data = response.data;

        console.log("login response", response);

        window.localStorage.setItem('token', data.token);
        window.localStorage.setItem('user_id', data.id);
        console.log("handle login", window.localStorage)

        browserHistory.push(`/users/${data.id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div className='full-login-container'>
        <NavOut />
        <div className='login-container'>
          <h2>Log In</h2>
          <div className=''>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div>
                <div className='formLabel'>
                  Email
                </div>
                <span><input onChange={this.handleChange.bind(this)} name='email' type='text' required /></span>
              </div>

              <div>
                <div className='formLabel'>
                  Password
                </div>
                <span><input onChange={this.handleChange.bind(this)} name='password' type='password' required /></span>
              </div>

              <div className='login-button-container'>
                <button type='submit' className='login-button button'>Log In</button>
              </div>
            </form>
          </div>
        <Footer />
       </div>
      </div>
    );
  }
}

export default LogIn;

// https://trello.com/b/nqMbncwn/sonic-gate
