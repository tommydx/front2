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
        gear: gearData
      });
      console.log('GOT GEAR EDIT ACCT PAGE', gearData);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    console.log(this.props.params.user_id)
    return (
      <div>
        <Nav userId={this.props.params.user_id}/>
        <div className=''>
          <div className=''>
            <div className='edituser-container'>
              <EditUserForm userId={this.state.user} theUserId={this.props.params.user_id}/>
            </div>

            <div className='viewGearContainer-editAcctPage'>
              <h2>Gear</h2>
              <ViewAllGearPage gear={this.state.gear}/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default EditUser;
