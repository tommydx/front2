import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

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
      photo_3: "",
      user_id: 0
    };
  }

  componentDidMount() {
    axios
    .get(`-api.herokuapp.com/users/${this.props.params.user_id}/gear/${this.props.params.id}`, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    })
    .then((response) => {
      const gearData = response.data;
      this.setState(gearData);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return(
      <div>
        <Nav userId={this.props.params.user_id} />
        <div className=''>
          <div className=''>

            <div className=''>
              <h2>Edit Gear</h2>
              <EditGearForm userId={this.props.params.user_id} gearId={this.props.params.id}/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default EditGearPage;
