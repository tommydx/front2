import React, { Component } from 'react';
import axios from 'axios';
// import { browserHistory } from 'react-router';

import Nav from './Nav';

class CreateGearPage extends Component {
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
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
    .post(`http://localhost:3000/users/${this.props.userId}/gear`, {
      gear: this.state
    }, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    })
    .then((data) => {
      browserHistory.push(`/users/${window.localStorage.getItem('user_id')}`);
      // this.props.reloadSidebar();
      // this.setState({
      //   name: "",
      //   item_category: "",
      //   item: "",
      //   manufacturer: "",
      //   year: "",
      //   serial_number: "",
      //   condition: "",
      //   description: "",
      //   photo_1: "",
      //   photo_2: "",
      //   photo_3: "",
      // });
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
      <div className="create-gear-container">
        <Nav userId={this.props.params.user_id} />
        <form id="" onSubmit={this.handleSubmit.bind(this)}>
          <h2>Add Gear</h2>
          <div>
            <div className="formLabel">
              Name
            </div>
            <span>
              <input name="name" type="text" onChange={this.handleChange} value={this.state.name} required/>
            </span>
          </div>

          <div>
            <div className="formLabel">
              Item Category
            </div>
            <span>
              <input name="item_category" type="text" onChange={this.handleChange} value={this.state.item_category} required/>
            </span>
          </div>

          <div>
            <div className="formLabel">
              Item
            </div>
            <span>
              <input name="item" type="text" onChange={this.handleChange} value={this.state.item} required/>
            </span>
          </div>

          <div>
            <div className="formLabel">
              Manufacturer
            </div>
            <span>
              <input name="manufacturer" type="text" onChange={this.handleChange} value={this.state.manufacturer} required/>
            </span>
          </div>

          <div>
            <div className="formLabel">
              Year
            </div>
            <span>
              <input name="year" type="text" onChange={this.handleChange} value={this.state.year} required/>
            </span>
          </div>

          <div>
            <div className="formLabel">
              Serial Number
            </div>
            <span>
              <input name="serial_number" type="text" onChange={this.handleChange} value={this.state.serial_number} required/>
            </span>
          </div>

          <div>
            <div className="formLabel">
              Condition
            </div>
            <span>
              <input name="condition" type="text" onChange={this.handleChange} value={this.state.condition} required/>
            </span>
          </div>

          <div>
            <div className="formLabel">
              Description
            </div>
            <span>
              <input name="description" type="text" onChange={this.handleChange} value={this.state.description} />
            </span>
          </div>

          <div>
            <div className="formLabel">
              Photo
            </div>
            <span>
              <input name="photo_1" type="text" onChange={this.handleChange} value={this.state.photo_1} required/>
            </span>
          </div>

          <div>
            <div className="formLabel">
              Photo
            </div>
            <span>
              <input name="photo_2" type="text" onChange={this.handleChange} value={this.state.photo_2} />
            </span>
          </div>

          <div>
            <div className="formLabel">
              Photo
            </div>
            <span>
              <input name="photo_3" type="text" onChange={this.handleChange} value={this.state.photo_3} />
            </span>
          </div>

          <div className="hidden-ui">
            <input onChange={this.handleChange} name="user_id" type="text" value={`${this.props.userId}`} />
          </div>
          <div>
            <button type="submit-button button ">Submit Your Gear</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateGearPage;
