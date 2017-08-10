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
      name: "",
      item_category: "",
      item: "",
      manufacturer: "",
      year: "",
      serial_number: "",
      condition: "",
      description: "",
      photo_1: "",
      photo_2: "",
      photo_3: ""
    };
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

    let gearId = window.localStorage.getItem("gear_id");
    console.log("GGGGG", gearId);
    axios
    .get(`http://localhost:8080/users/${window.localStorage.user_id}/gear/${gearId}`, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    })
    .then((response) => {
      const gearData = response.data;
      this.setState({name: response.data.name,
      item_category: response.data.item_category,
      item: response.data.item,
      manufacturer: response.data.manufacturer,
      year: response.data.year,
      serial_number: response.data.serial_number,
      condition: response.data.condition,
      description: response.data.description,
      photo_1: response.data.photo_1,
      photo_2: response.data.photo_2,
      photo_3: response.data.photo_3
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
            <EditGearForm gearId={window.localStorage.gear_id}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default EditGearPage;
