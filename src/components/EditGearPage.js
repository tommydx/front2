import React, { Component } from 'react';
import axios from 'axios';
// import { browserHistory } from 'react-router';

import Nav from './Nav';
import EditGearForm from './EditGearForm';
import Footer from './Footer';

class EditGearPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gearData: []
    };
    console.log('EDIT GS PROPS', this.props);
  }

  componentDidMount() {
    console.log("MY PROPS", this.props)
    axios
    .get(`http://localhost:8080/users/${window.localStorage.user_id}`, {
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

    let gearId = this.props.params.gear_id;
    console.log("GGGGG", gearId);
    axios
    .get(`http://localhost:8080/users/${window.localStorage.user_id}/gear/${gearId}`, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    })
    .then((response) => {
      const gearData = response.data;
      this.setState({gearData
      });
      console.log('EDIT GEAR DATA', gearData);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return(
      <div>
        <Nav />
        <div className='edit-gear-container'>
          <h2>Edit Gear</h2>
          <div className='edit-gear-form'>
            <EditGearForm gearData={this.state.gearData}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default EditGearPage;
