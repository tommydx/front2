import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';


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
    .post(`https://been-there-done-that-api.herokuapp.com/users/${this.props.userId}/locations`, {
      location: this.state
    }, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    })
    .then(() => {
      this.props.reloadSidebar();
      this.setState({
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
      });
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
      <form id="place-to-go-form" onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <div className="labelName">
            Name
          </div>
          <span>
            <input name="name" type="text" onChange={this.handleChange} value={this.state.name} required/>
          </span>
        </div>

        <div>
          <div className="labelName">
            Item Category
          </div>
          <span>
            <input name="item_category" type="text" onChange={this.handleChange} value={this.state.item_category} required/>
          </span>
        </div>

        <div>
          <div className="labelName">
            Item
          </div>
          <span>
            <input name="item" type="text" onChange={this.handleChange} value={this.state.item} required/>
          </span>
        </div>

        <div>
          <div className="labelName">
            Manufacturer
          </div>
          <span>
            <input name="manufacturer" type="text" onChange={this.handleChange} value={this.state.manufacturer} required/>
          </span>
        </div>

        <div>
          <div className="labelName">
            Year
          </div>
          <span>
            <input name="year" type="text" onChange={this.handleChange} value={this.state.year} required/>
          </span>
        </div>

        <div>
          <div className="labelName">
            Serial Number
          </div>
          <span>
            <input name="serial_number" type="text" onChange={this.handleChange} value={this.state.serial_number} required/>
          </span>
        </div>

        <div>
          <div className="labelName">
            Condition
          </div>
          <span>
            <input name="condition" type="text" onChange={this.handleChange} value={this.state.condition} required/>
          </span>
        </div>

        <div>
          <div className="labelName">
            Description
          </div>
          <span>
            <input name="description" type="text" onChange={this.handleChange} value={this.state.description} />
          </span>
        </div>

        <div>
          <div className="labelName">
            Photo
          </div>
          <span>
            <input name="photo_1" type="text" onChange={this.handleChange} value={this.state.photo_1} required/>
          </span>
        </div>

        <div>
          <div className="labelName">
            Photo
          </div>
          <span>
            <input name="photo_2" type="text" onChange={this.handleChange} value={this.state.photo_2} />
          </span>
        </div>

        <div>
          <div className="labelName">
            Photo
          </div>
          <span>
            <input name="photo_3" type="text" onChange={this.handleChange} value={this.state.photo_3} />
          </span>
        </div>

        <div className="hidden">
          <input onChange={this.handleChange} name="user_id" type="text" value={`${this.props.userId}`} />
        </div>
        <div>
          <button type="submit">Submit Your Gear</button>
        </div>
      </form>
    )
  }
}

export default CreateGearPage;
