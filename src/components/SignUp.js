import React, { Component } from 'react';
// import { Link } from 'react-router';
import axios from 'axios';
import { browserHistory } from 'react-router';

import Footer from './Footer';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      username: "",
      password: "",
      email: "",
      phone_number: "",
      address: "",
      photo: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    axios
      .post('', {
        user: this.state
      })
      .then(() => {
        browserHistory.push('/login');
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
      <div>
        {/* <Nav /> */}
        <div className="content-wrapper">
          <div className="dashboard-wrapper">
          <div className="signup-container">
            <h1 >Create Account</h1>

              <form onSubmit={this.handleSubmit.bind(this)}>

                <div >
                  <div className="formLabel">
                    First Name
                  </div>
                  <span><input onChange={this.handleChange} name="fname" type="text" required /></span>
                </div>

                <div >
                  <div className="formLabel">
                    Last Name
                  </div>
                  <span>
                    <input onChange={this.handleChange} name="lname" type="text" required/>
                  </span>
                </div>

                <div >
                  <div className="formLabel">
                    Username
                  </div>
                  <span>
                    <input onChange={this.handleChange} name="username" type="text" required/>
                  </span>
                </div>

                <div >
                  <div className="formLabel">
                    Password
                  </div>
                  <span>
                    <input onChange={this.handleChange} name="password" type="password" required/>
                  </span>
                </div>

                <div >
                  <div className="formLabel">
                    Email
                  </div>
                  <span>
                    <input onChange={this.handleChange} name="email" type="email" required />
                  </span>
                </div>

                <div >
                  <div className="formLabel">
                    Phone Contact
                  </div>
                  <span>
                    <input onChange={this.handleChange} name="phone_number" type="text" />
                  </span>
                </div>

                <div >
                  <div className="formLabel">
                    Address
                  </div>
                  <span>
                    <input onChange={this.handleChange} name="address" type="text" />
                  </span>
                </div>

                <div >
                  <div className="formLabel">
                    Photo
                  </div>
                  <span>
                    <input onChange={this.handleChange} name="photo" type="text" />
                  </span>
                </div>

                <div >
                  <button type="submit" className="">Sign Up</button>
                </div>
              </form>
          </div>
          </div>
        </div>
       <Footer />
      </div>
    );
  }
}

export default SignUp;
