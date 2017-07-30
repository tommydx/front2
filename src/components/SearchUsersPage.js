import React, { Component } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router';

import Nav from './Nav';

class SearchUsersPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  renderUsers() {
    console.log('IN RENDER ALL USERS', this.state);

    let user = this.state.user_id.map((oneUser, i) => {
      return(
        <div key={i} className="viewOneUser">
          <h3>{oneUser.fname}</h3>
          <h3>{oneUser.lname}</h3>
          <h4>{oneUser.username}</h4>
          <div className="viewUserPhoto">{oneUser.photo}</div>
        </div>
      )
    })
    return oneUser;
  }

  render() {
    return (
      <div className="">
        <Nav />
        <h2>Users</h2>
        <div>
          Show All Users
        </div>
      </div>
    );
  }
}

export default SearchUsersPage;
