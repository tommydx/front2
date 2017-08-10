import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
// import { Link } from 'react-router';

import Nav from './Nav';

class SearchUsersPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }
// need an axios call to get all users then store in state 7-31-17
  componentDidMount() {
    axios
    .get(`http://localhost:8080/users/`)
    .then((response) => {
      const userData = response.data;
      this.setState({
        users: userData,
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  renderUsers() {
    console.log('IN RENDER ALL USERS', this.props.params.user_id);

    let user = this.state.users.map((oneUser, i) => {
      return(
        <div key={i} className="viewOneUser">
        <div className="viewUserPhoto"><img src={oneUser.photo} /></div>
          <h3>{oneUser.fname}</h3>
          <h3>{oneUser.lname}</h3>
          <h4>{oneUser.username}</h4>
        </div>
      )
    })
    return user;
  }

  render() {
    return (
      <div className="">
        <Nav />
        <h2>Users</h2>
        <div className="show-all-users-title">
          Members
        </div>

        <div className="viewAllUsers">
          {this.renderUsers()}
        </div>

      </div>
    );
  }
}

export default SearchUsersPage;


// <div className='userHomeNewGear'>
// <Link to={`/users/${oneUser.id}`}>
// <button type='button' className='create-new-gear-button button'>Create New</button>
// </Link>
// </div>
