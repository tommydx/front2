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
