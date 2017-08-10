import React, { Component } from 'react';
import axios from 'axios';

import Nav from './Nav';
import EditUserForm from './EditUserForm';
import ViewAllGearPage from './ViewAllGearPage';
import Footer from './Footer';

class EditUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
      gear: []
    }
  }

  componentDidMount() {
    axios
    .get(`http://localhost:8080/users/${this.props.params.user_id}`, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    })
    .then((response) => {
      const userData = response.data;
      this.setState({
        user: userData,
      });
    })
    .catch((err) => {
      console.log(err);
    });

    axios
    .get(`http://localhost:8080/users/${this.props.params.user_id}/gear`,{
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    })
    .then((response) => {
      const gearData = response.data.gear;
      this.setState({
        gear: response.data.gear
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  // If userId is removed from NAV user will become undefined.
  // theUserId is allowing EditUserForm to populate edit user fields with user specific info - IT IS PASSED AS PROPS TO THE FORM
  render() {
    // console.log(this.props.params.user_id);
    return (
      <div>
        <Nav userId={this.props.params.user_id}/>
          <div className='editUserPage-container'>
            <div className='editUserForm-container'>
              <EditUserForm theUserId={this.props.params.user_id}/>
            </div>

            <div className='VGC-editPage'>
              <ViewAllGearPage
              gear={this.state.gear}
              />
            </div>
          </div>
        <Footer />
      </div>
    );
  }
}

export default EditUser;
